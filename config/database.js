const mogoose = require('mongoose')

const DB_STRING = process.env.DB_CON_STRING

module.exports = () => {
    // mogoose.connect("mongodb://localhost/ecommerce")
    mogoose.connect(DB_STRING)
        .then(() => console.log('DB Connection Successfull'))
        .catch(err => console.log(err.message))
}