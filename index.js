const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const { User } = require('./models/User');

const config = require('./config/key');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose
    .connect(config.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err));

// application/x-www-form-urlencoded
app.get('/', (req, res) => res.send('hello World! hansol'));

//application/json
app.post('/register', (req, res) => {
    // 회원 가입 할때 필요한 정보들을 client 에서 가져오면
    // 그것들을 데이터 테이블에 저장한다.

    // id: "hello",
    // password: "12345"

    const user = new User(req.body);

    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true,
        });
    });
});

app.listen(port, () => console.log(`Express app listening on port ${port}!`));
