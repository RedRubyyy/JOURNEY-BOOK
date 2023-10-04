const validator = require('validator');

function strictValidation (data) {
    const result = validator.isAlphanumeric(data) && !data.includes(' ');
    return result
};

function validationOn (database , type) {
    if (type == 'client-login') { 
     return function (inputData) { // inputData : Object
        const dataUsername = database.map(data => data.username);
        const dataPassword = database.map(data => data.password);
        const indexData = dataUsername.indexOf(inputData.username);

        if (!dataUsername.includes(inputData.username)) {
            return {
                message : "Username tidak ditemukan" , 
                satus : false
            }
        } 
        if (!dataPassword[indexData] !== inputData.password) {
            return {
                message : "Password salah", 
                status : false
            }
        }
        return {
            message : "Berhasil masuk", 
            status : true
        };
    }} 
    if (type == 'client-signup') {
     return function (inputData) {
        const dataUsername = database.map(data => data.username);
        const PV = strictValidation(inputData.password);
        const QV = validator.isAlphanumeric(inputData.uniword , 'en-US',{ignore : ' '});
        const UV = strictValidation(inputData.username);

        if (dataUsername.includes(inputData.username)) {
         return {
            message : `Username telah terdaftar`,
            status : false
         }
        }
        let result = {
            message : "User berhasil didaftarkan",
            status : true
        }
        const validationData = [PV , QV , UV];
        const dataValue = ['Password' , 'Uniword' , 'Username'];
        validationData.forEach((data , index) => {
            if (!data) {
             result = {
                message : `${dataValue[index]} tidak valid`,
                status : false
             }
            }
        })
        return result
     }
    }
}


module.exports = {validationOn}