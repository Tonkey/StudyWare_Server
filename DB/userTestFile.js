require('../utils/Users')
var mongoose = require('mongoose')
var User = mongoose.model('user')

var user1 = new User({
    _id: 'cph-nm106',
    firstName: 'Nicklas',
    lastName: 'Molving',
    password: 'test'
})

var user2 = new User({
    _id: 'cph-ml103',
    firstName: 'Michael',
    lastName: 'Larsen',
    password: 'test2'
})

var user3 = new User({
    _id: 'cph-hl80',
    firstName: 'Hamza',
    lastName: 'Laroussi',
    password: 'test3'
})

user1.save((err)=> {
    if(err) throw err
    console.log('user saved')
})
user2.save((err)=> {
    if(err) throw err
    console.log('user saved')
})
user3.save((err)=> {
    if(err) throw err
    console.log('user saved')
    mongoose.connection.close()
})




