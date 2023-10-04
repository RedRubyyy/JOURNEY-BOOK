const mongoose = require('mongoose')

const Client = require('./models/client.model')(mongoose)
const Admin = require('./models/admin.model')(mongoose)
const Collection = 'journey-book'
const URI = `mongodb://127.0.0.1/${Collection}`;

const db = {
    mongoose,
    Client,
    Admin,
    URI
}; 
module.exports = db