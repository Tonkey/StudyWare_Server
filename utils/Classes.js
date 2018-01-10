var mongoose = require('mongoose')

var Schema = mongoose.Schema

var ClassSchema = new Schema({
    _id: {type: String},
    student: {type: String},
    pointsAvailable: {type: Number, max: 100, min: 0},
    pointsRequired: {type: Number, max: 100, min: 0},
    attendance:[{id:Number, description: Date, pointsGotten: String, pointsAvailable: String, spType: String}],
    handIns: [{id:Number, description: String, pointsGotten: String, pointsAvailable: String, spType: String}]
})

var MONGO_DB = 'mongodb://root:root@ds123136.mlab.com:23136/swstudypoints'
mongoose.Promise = global.Promise
mongoose.connect(MONGO_DB, {useMongoClient:true})

var Class = mongoose.model('class', ClassSchema)