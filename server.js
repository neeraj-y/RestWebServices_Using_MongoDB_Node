require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const subscribersRouter = require('./routes/subscribers');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', (error) => console.error(console.log('>> Failed to connect to MongoDB, retrying...', error)));
db.once('open', () => console.log('connected to database'));

app.use(express.json());
// http://localhost:3000/subscribers
app.use('/subscribers', subscribersRouter);


app.listen(3000, () => console.log('Server has started'));