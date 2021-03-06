const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(
    {
        path: './config.env',
    }
);

const DB = process.env.MongoDB.replace(
    '<password>',
    process.env.MongoDB_Password,
)

mongoose
    .connect(DB)
    .then(() => console.log('mongodb is connected...'))
    .catch((err) => console.log(err.message));
