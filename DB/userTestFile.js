require('../utils/Users')
var mongoose = require('mongoose')
var User = mongoose.model('user')

var user1 = new User({
    _id: 'cph-nm106',
    firstName: 'Nicklas',
    lastName: 'Molving',
    password: 'test'
})

user1.save((err)=> {
    if(err) throw err
    console.log('user saved')
    mongoose.connection.close()
})




