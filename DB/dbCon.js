var mongoose = require('mongoose')

function openCon () {
    mongoose.connect('mongodb://root:root@ds123136.mlab.com:23136/swstudypoints', {useMongoClient:true})
}

function closeCon(){
    mongoose.connection.close()
}

module.exports = {
    openCon: openCon,
    closeCon: closeCon
}
