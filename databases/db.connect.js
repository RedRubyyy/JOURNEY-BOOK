const db  = require('./db.config.js');
const {mongoose}  = require('./db.config.js');

const connection = {
    message : "Not connection on databases",
    status : "pending",
    inference : false
}
const connectionConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
const models = {
    Client : db.Client,
    Admin : db.Admin
}

function changeConnectionInfo (object) {
    const keys = Object.keys(object)
    keys.forEach(key => {
        connection[`${key}`] = object[`${key}`]
    })
}
function connectToDatabase () {
    return mongoose.connect(db.URI , connectionConfig)
    .then(() => {
        const object = {
            message : "Connect to databases",
            status : "resolved",
            inference : true
        }
        changeConnectionInfo(object)
        console.log(connection.message)
    })
    .catch((error) => {
        const object = {
            message : "Failed connect to databases",
            status : "rejected",
            inference : false
        }
        changeConnectionInfo(object)
        console.error(error.message)
    })
}
module.exports = {
    models,
    connectToDatabase,
    connection
}