var mongoose = require('mongoose')

var Schema = mongoose.Schema

var StudyPointSchema = new Schema({
    _id: {type: String},
    owner: {type: String},
    class: {type: String},
    description: {type: String, maxlength: 20},
    pointsGotten: {type: Number},
    pointsAvailable: {types: Number},
    type: {type: String, required: true}
})

const MONGO_DB= 'mongodb://root:root@ds123136.mlab.com:23136/swstudypoints'
mongoose.Promise = global.Promise
mongoose.connect(MONGO_DB, {useMongoClient: true})

var studyPoint = mongoose.model('studyPoint', StudyPointSchema)