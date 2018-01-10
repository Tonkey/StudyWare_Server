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

/* GET home page. */
router.get('/', (req, res, next) => {
    res.send('StudyWare Studpoints backend API')
});

//fetch all classes
router.get('/classes', (req, res, next) => {
    mongoose.connect(DB, {useMongoClient:true})
    Class.find({}, (err, data) => {
        if (err) {
            console.log(err)
        }
        console.log(data)
        res.send(data)
        mongoose.connection.close()
    })
})

// /user/user?_id=xxx
// Fetch user by _id
router.get('/user/:user', (req, res, next) => {
    User.find({ _id: req.query._id }, (err, data) => {
        if (err) {
            console.log(err)
        }
        res.send(data)
    })
})

// Fetch all StudyPoints
router.get('/sp', (req, res, next) => {
    mongoose.connect(DB, {useMongoClient:true})
    StudyPoint.find({}, (err, data) => {
        if(err){
            console.log(err)
        }
        res.send(data)
        mongoose.connection.close()
    })
})

// /sp/data?user=xxx&class=xxx
// Fetch studypoints by user and class
router.get('/sp/:data', (req, res, next) => {
    let owner = req.query.user
    let aClass = req.query.class
    mongoose.connect(DB, {useMongoClient:true})
    // if a class was not passed
    if (aClass === undefined) {
        StudyPoint.find({ owner: owner }, (err, data) => {
            if (err) {
                console.log(err)
            }
            res.send(data)
            mongoose.connection.close()
        })
    }
    // if both arguments are present
    else {
        StudyPoint.find({ owner: owner, class: aClass }, (err, data) => {
            if (err) {
                console.log(err)
            }
            res.send(data)
            mongoose.connection.close()
        })
    }
})

// Get all points this sutdent has gotten, without data about what course theu belong to
router.get('/points', (req,res,next)=>{
    let owner = req.query._id
    let points = []
    mongoose.connect(DB, {useMongoClient:true})
    StudyPoint.find({ owner: owner }, (err,data)=> {
        if(err){
            console.log(err)
        }
        points = data.map((point)=>{
            return point.pointsGotten
        })
        res.send(points)
        mongoose.connection.close()
    })
})

module.exports = router;