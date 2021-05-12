const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50,
    },
    email: {
        type: String,
        trim: true, //스페이스를 없애줌
        unique: 1,
    },
    password: {
        type: String,
        minlength: 5,
    },
    lastname: {
        type: String,
        maxlength: 50,
    },
    role: {
        //관리자=1, 사용자=0
        type: Number,
        default: 0,
    },
    image: {
        type: String,
    },

    token: {
        type: String, //유효성 검사할때
    },

    tokenExp: {
        //토큰을 사용할 수 있는 기간
        type: Number,
    },
});

// password 암호화 하기. (회원가입)
userSchema.pre('save', function (next) {
    var user = this; //스키마를 가르킴

    if (user.isModified('password')) {
        //비밀번호를 암호화 시킨다.
        bcrypt.genSalt(saltRounds, function (err, salt) {
            if (err) return next(err);

            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) return next(err);
                user.password = hash;
                next();
            });
        });
    } else {
        //비밀번호 외에 다른걸 바꿀시 next()로 넘어감
        next();
    }
});

// 암호화 된 password와 기존 password를 비교. (로그인)
userSchema.methods.comparePassword = function (plainPassword, cb) {
    var user = this;
    //cb = callback function

    //plainpassword 1234567     암호화된 비밀번호 "$2b$10$r7VKMZ1LMrgbtCL3/RVlH..Kbq7nGMipwFaBTKT4wPCW7A6aDC4Ja"
    bcrypt.compare(plainPassword, user.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        } else {
            cb(null, isMatch);
        }
    });
};

// 로그인 후 토큰 생성. (로그인 유지)
userSchema.methods.generateToken = function (cb) {
    var user = this;

    //jsonwebtoken을 이용해서 token을 생성
    var token = jwt.sign(user._id.toHexString(), 'secretToken');

    //user._id + 'secretToken' = token
    //-> 'secretToken' -> user._id

    user.token = token;
    user.save(function (err, user) {
        if (err) return cb(err);
        cb(null, user);
    });
};

// 로그인 후 생성한 토큰을 삭제. (로그아웃)
userSchema.statics.findByToken = function (token, cb) {
    var user = this;

    jwt.verify(token, 'secretToken', function (err, decoded) {
        // 유저 아이디를 이용해서 유저를 찾은다음에
        // 클라이언트에서 가져온 토큰 과 db에 보관된 토큰이 일치하는지 확인

        user.findOne({ _id: decoded, token: token }, function (err, user) {
            if (err) return cb(err);
            cb(null, user);
        });
    });
};

const User = mongoose.model('User', userSchema); // 모델에 유저스키마를 담음

module.exports = { User };
