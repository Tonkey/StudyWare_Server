var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var dbCon = require('../DB/dbCon.js')
var DB = "mongodb://root:root@ds123136.mlab.com:23136/swstudypoints"
// Mongoose models etc.
require('../utils/Classes')
require('../utils/Users')
require('../utils/StudyPoints')
var Class = mongoose.model('class')
var User = mongoose.model('user')
var StudyPoint = mongoose.model('studyPoint')

// TODO: implement functionality for register function... update a given studypoint in the correct array

/* GET home page. */
router.get('/', (req, res, next) => {
    res.send('StudyWare Studpoints backend API')
});

//fetch all classes
router.get('/classes/:student', (req, res, next) => {
    mongoose.connect(DB, {useMongoClient:true})
    Class.find({student: req.query.student}, (err, data) => {
        if (err) {
            console.log(err)
        }
        res.send(data)
        mongoose.connection.close()
    })
})

// /user/user?_id=xxx
// Fetch user by _id
router.get('/user/:user', (req, res, next) => {
    mongoose.connect(DB, {useMongoClient:true})
    User.find({ _id: req.query._id }, (err, data) => {
        if (err) {
            console.log(err)
        }
        res.send(data)
        mongoose.connection.close()
    })
})

// requires 
router.get('/register/:data', (req,res,next) => {
    mongoose.connect(DB, {useMongoClient:true})
    Class.findOneAndUpdate({id: req.query._id, student: req.query.student, 'attendance.id': {$eq:req.query.id}},{$set: {'attendance.$.pointsGotten': 1} }, (err,data) => {
        if(err){
            console.log(err)
        }
        res.send(data)
        mongoose.connection.close()
    })
})

module.exports = router;