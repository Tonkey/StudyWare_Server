require('../utils/StudyPoints')
var mongoose = require('mongoose')
var StudyPoint = mongoose.model('studyPoint')

var StudyPoint1 = new StudyPoint({
    _id: '1',
    owner: 'cph-nm106',
    class: 'CPH-Javascript',
    description: 'someDescription',
    pointsGotten: 10,
    pointsAvailable: 10,
    type: 'Review'
})

StudyPoint1.save((err) => {
    if(err) throw err
    console.log('sp saved')
    mongoose.connection.close()
})