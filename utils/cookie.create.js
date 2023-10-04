const stringsAlphabet_L = 'abcdefghijklmnopqrstuvwxyz';
const stringsAlphabet_U = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const number = '1234567890';
const uniqChar = '@#$&=?!';

var unixChar_length = 16

function createUnixChar () {
    const AL = stringsAlphabet_L.split('');
    const AU = stringsAlphabet_U.split('');
    const NB = number.split('');
    const UC = uniqChar.split('');

    let uniq = '';
    const char = [AL , AU , NB , UC];
    for (let i = 0 ; i < unixChar_length ; i++) {
        const charsetIndex = Math.floor((Math.random() * 4) + 0);
        const charFindRandom = () => {
            const ch = char[charsetIndex];
            const chLength = ch.length;
            return Math.floor((Math.random() * chLength ) + 0); 
        };
        const charIndex = charFindRandom();
        uniq += char[charsetIndex][charIndex];
    }
    return uniq
}

function createCookie (database) {
    try {
        const uniqDatabase = []
        if (database && typeof database == 'object' && database.length) {
            database.forEach(data => {
                uniqDatabase.push(data.cookieCode);
            });
        }
        const unix = createUnixChar()
        if (uniqDatabase.includes(unix)) {
            return createCookie(database);
        };
        return unix
    } catch ( error) {
        if (error.message == 'Maximum call stack size exceeded') {
            unixChar_length++
            createCookie(database)
        }
        console.error(error.message);
    };
};

module.exports = {createCookie}
