const readline = require('readline');
const fs = require('fs');

console.log(`------------------------------------
email addresses
------------------------------------`);

const rl = readline.createInterface({
    input: fs.createReadStream('teachers.csv'),
    crlfDelay: Infinity
});

function getMailAddress(firstName, lastName) {
    firstName = firstName.toLowerCase();
    lastName = lastName.toLowerCase();

    lastName = lastName.replace('ä', 'ae');
    lastName = lastName.replace('ö', 'oe');
    lastName = lastName.replace('ü', 'ue');

    return firstName.charAt(0) + '.' + lastName + '@htl-leonding.ac.at';
}

rl.on('line', (line) => {
    let lineArray = line.split(';');
    console.log(getMailAddress(lineArray[1], lineArray[0]));
});

rl.on('close', () => {
    console.log('------------------------------------');
});