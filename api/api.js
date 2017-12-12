var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var dbCon = require('../DB/dbCon.js')

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
    mongoose.connect('mongodb://root:root@ds123136.mlab.com:23136/swstudypoints', {useMongoClient:true})
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
    StudyPoint.find({}, (err, data) => {
        if(err){
            console.log(err)
        }
        res.send(data)
    })
})

// /sp/data?user=xxx&class=xxx
// Fetch studypoints by user and class
router.get('/sp/:data', (req, res, next) => {
    let owner = req.query.user
    let aClass = req.query.class

    // if a class was not passed
    if (aClass === undefined) {
        StudyPoint.find({ owner: owner }, (err, data) => {
            if (err) {
                console.log(err)
            }
            res.send(data)
        })
    }
    // if both arguments are present
    else {
        StudyPoint.find({ owner: owner, class: aClass }, (err, data) => {
            if (err) {
                console.log(err)
            }
            res.send(data)
        })
    }
})

// Get all points this sutdent has gotten, without data about what course theu belong to
router.get('/sp/points/:owner', (req,res,next)=>{
    let owner = req.query._id
    let points = []
    StudyPoint.find({ owner: owner }, (err,data)=> {
        if(err){
            console.log(err)
        }
        points = data.map((point)=>{
            return point.pointsGotten
        })
        res.send(points)
    })
})

module.exports = router;