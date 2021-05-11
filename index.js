const express = require('express');
const app = express();
const port = 5000;

const mongoose = require('mongoose');
mongoose
    .connect(
        'mongodb+srv://hansol:slswk7985@todonodelist.ocjhj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        }
    )
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err));

app.get('/', (req, res) => res.send('hello World!'));

app.listen(port, () => console.log(`Express app listening on port ${port}!`));
