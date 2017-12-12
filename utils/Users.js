var mongoose = require('mongoose')

var Schema = mongoose.Schema

var UserSchema = new Schema({
    _id: {type: String}, // cph-xx000
    firstName: {type: String},
    lastName: {type: String},
    password: {type: String},
    // classes: [Schema.Types.ObjectId],
    // studyPoints: [Schema.Types.ObjectId],
})

const MONGO_DB='mongodb://root:root@ds123136.mlab.com:23136/swstudypoints'
mongoose.Promise = global.Promise
mongoose.connect(MONGO_DB, {useMongoClient: true})

var User = mongoose.model('user', UserSchema)