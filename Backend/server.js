const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())
app.use(express.json())

const dotenv = require('dotenv')
dotenv.config()

const DBConnect = require('./Middleware/DBConnect')
DBConnect()

app.get('/connect', (req, res) => {
    try {
        console.log('Request recieved...');
        res.status(200).json({ message: 'This is from backend...' })
    } catch (error) {
        console.error(error.message);
    }
})

app.listen(5000, () => console.log('Server running at PORT: 5000'))