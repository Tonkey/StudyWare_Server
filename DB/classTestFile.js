require('../utils/Classes')

var mongoose = require('mongoose')
var Class = mongoose.model('class')

var class1 = new Class({
    _id: 'CPH-Javascript',
    pointsAvailable: 100,
    pointsRequired: 80
})

class1.save((err)=> {
    if(err) throw err
    console.log('class Saved')
    mongoose.connection.close()
})