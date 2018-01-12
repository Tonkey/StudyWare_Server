require('../utils/Classes')

var mongoose = require('mongoose')
var Class = mongoose.model('class')

var stud ='cph-nm106'

var class1 = new Class({
    id: 'CPH-Javascript',
    student: stud,
    pointsAvailable: 100,
    pointsRequired: 80,
    attendance: [
        { 'id': 1, 'description': new Date(2018, 0, 15), 'pointsGotten': 1, 'pointsAvailable': 1, spType: 'Attendance' },
        { 'id': 2, 'description': new Date(2018, 0, 16), 'pointsGotten': 1, 'pointsAvailable': 1, spType: 'Attendance' },
        { 'id': 3, 'description': new Date(2018, 0, 17), 'pointsGotten': 0, 'pointsAvailable': 1, spType: 'Attendance' },
        { 'id': 4, 'description': new Date(2018, 0, 18), 'pointsGotten': 0, 'pointsAvailable': 1, spType: 'Attendance' },
        { 'id': 5, 'description': new Date(2018, 0, 19), 'pointsGotten': 1, 'pointsAvailable': 1, spType: 'Attendance' },
        { 'id': 6, 'description': new Date(2018, 0, 20), 'pointsGotten': 0, 'pointsAvailable': 1, spType: 'Attendance' },
    ],
    handIns: [
        { 'id': 1, 'description': 'P1_Hand-in', 'pointsGotten': 10, 'pointsAvailable': '10', spType: 'Hand-in' },
    { 'id': 2, 'description': 'P1_Review', 'pointsGotten': 10, 'pointsAvailable': '10', spType: 'Review' },
    { 'id': 3, 'description': 'P2_Hand-in', 'pointsGotten': 10, 'pointsAvailable': '10', spType: 'Hand-in' },
    { 'id': 4, 'description': 'P2_Review', 'pointsGotten': 10, 'pointsAvailable': '10', spType: 'Review' },
    { 'id': 5, 'description': 'P3_Hand-in', 'pointsGotten': 10, 'pointsAvailable': '10', spType: 'Hand-in' },
    { 'id': 6, 'description': 'P4_Hand-in', 'pointsGotten': 0, 'pointsAvailable': '10', spType: 'Hand-in' },
    { 'id': 7, 'description': 'P5_Hand-in', 'pointsGotten': 0, 'pointsAvailable': '10', spType: 'Hand-in' },
    { 'id': 8, 'description': 'P6_Hand-in', 'pointsGotten': 0, 'pointsAvailable': '10', spType: 'Hand-in' },
    ]
})

var class2 = new Class({
    id: 'Internet of Things',
    student: stud,
    pointsAvailable: 100,
    pointsRequired: 80,
    attendance: [
        { 'id': 1, 'description': new Date(2018, 0, 17), pointsGotten: 0, pointsAvailable: 1, spType: 'Attendance' },
        { 'id': 2, 'description': new Date(2018, 0, 18), pointsGotten: 1, pointsAvailable: 1, spType: 'Attendance' },
        { 'id': 3, 'description': new Date(2018, 0, 19), pointsGotten: 0, pointsAvailable: 1, spType: 'Attendance' }
    ],
    handIns: [
        { 'id': 1, 'description': 'P1_Hand-in', 'pointsGotten': 20, 'pointsAvailable': '20', spType: 'Hand-in' },
        { 'id': 2, 'description': 'P2_Hand-in', 'pointsGotten': 20, 'pointsAvailable': '20', spType: 'Hand-in' },
        { 'id': 3, 'description': 'P3_Hand-in', 'pointsGotten': 40, 'pointsAvailable': '40', spType: 'Hand-in' }
    ]
})

var class3 = new Class({
    id: 'App Development',
    student: stud,
    pointsAvailable: 100,
    pointsRequired: 50,
    attendance: [],
    handIns: [
        { 'id': 1, 'description': 'P1_Hand-in', 'pointsGotten': 20, 'pointsAvailable': '20', spType: 'Hand-in' },
        { 'id': 2, 'description': 'P2_Hand-in', 'pointsGotten': 20, 'pointsAvailable': '20', spType: 'Hand-in' },
        { 'id': 3, 'description': 'P3_Hand-in', 'pointsGotten': 10, 'pointsAvailable': '10', spType: 'Hand-in' },
        { 'id': 3, 'description': 'P4_Hand-in', 'pointsGotten': 5, 'pointsAvailable': '10', spType: 'Hand-in' }
    ]
})

class1.save((err) => {
    if (err) throw err
    console.log('class Saved')
    
})

class2.save((err) => {
    if(err) throw err
})
class3.save((err) => {
    if(err) throw err
    mongoose.connection.close()
})