const validator = require('validator');

function usernameValidation (username) {
    const NA = validator.isAlphanumeric(username);
    const NS = !username.includes(' ');
    return [NA , NS].includes(false) ? false : true;
};

function clientValidation (data) {
    const username = usernameValidation(data.username);
    const uniword = validator.isAlpha(data.uniword ,'en-US' ,{ignore : ' '});
    const correct = [];
    const succesfullyMessage = "Berhasil masuk"
    if (!username) {
        correct.push('Username tidak valid');
    };
    if (!uniword) {
        correct.push('Uniq word tidak valid');
    };
    return {
        message : correct.length == 0 ? succesfullyMessage : correct.join(' dan '),
        status : correct.length == 0 ? true : false
    };
};

module.exports = {clientValidation}