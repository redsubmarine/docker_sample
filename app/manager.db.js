const mongoose = require('mongoose')
const mongooseTimestamp = require('mongoose-timestamp')
const config = require('config')

mongoose.Promise = global.Promise
mongoose.plugin(mongooseTimestamp, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})

module.exports.connect = async () => {
  try {
    await mongoose.connect(config.db.host, config.db.options)
    console.log('mongo server started!')
  } catch (err) {
    throw err
  }
}
