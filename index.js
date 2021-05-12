const express = require('express');
const app = express();
const port = 3070;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { User } = require('./models/User');
const { auth } = require('./middleware/auth');
const config = require('./config/key');

//application/x-www-form-urlencoded   body에 url담음
app.use(bodyParser.urlencoded({ extended: true }));

//application.json
app.use(bodyParser.json());
app.use(cookieParser());

const mongoose = require('mongoose');
mongoose
    .connect(config.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => console.log('MongoDB Connected...')) //에러 안뜨게 작성, 잘연결됬을때 출력, 에러 출력
    .catch((err) => console.log(err));

app.get('/', (req, res) => res.send('안녕하세요~ 다들 새해복 많이 받으세요!!!'));

//회원가입
app.post('/api/users/register', (req, res) => {
    //회원가입할때 필요한 정보들을 클라이언트에서 가져오면 그것들을 DB에 넣어줌
    const user = new User(req.body);

    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true,
        }); //성공했을시
    });
});

//로그인
app.post('/api/users/login', (req, res) => {
    //로그인 라우터
    //요청된 이메일을 데이터베이스에서 있는지 찾음
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user) {
            return res.json({
                loginSuccess: false,
                message: '제공된 이메일에 해당하는 유저가 없습니다.',
            });
        }

        //요청된 이메일이 데이터 베이스에 있다면 비밀번호가 맞는 비밀번호인지 확인
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch)
                return res.json({
                    loginSuccess: false,
                    message: '비밀번호가 틀렸습니다.',
                });

            //비밀번호 까지 맞다면 토큰을 생성
            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);

                //token을 저장 -> 쿠키에
                res.cookie('x_auth', user.token)
                    .status(200)
                    .json({ loginSuccess: true, userId: user._id });
            });
        });
    });
});

app.get('/api/users/auth', auth, (req, res) => {
    // 여기 까지 미들웨어를 통과해 왔다는 이야기를 authentication 이 true 라는 말.

    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        image: req.user.image,
    });
});

app.get('/api/users/logout', auth, (req, res) => {
    User.findOneAndUpdate({ _id: req.user._id }, { token: '' }, (err, user) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true,
        });
    });
});

app.listen(port, () => console.log(`Express app listening on port ${port}!`));
