require('dotenv').config()

const PORT = process.env.PORT

const MONGODB_URI = process.env.NODE_ENV === 'test'
   ? process.env.MONGO_TEST
   : process.env.MONGO

module.exports = {
  MONGODB_URI,
  PORT
}