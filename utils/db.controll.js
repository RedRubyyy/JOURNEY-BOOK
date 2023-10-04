const {Client} = require('../databases/db.config');

exports.saveData = data => {
    const newData = new Client (data)
    newData.save().then(response => console.log(response))
}