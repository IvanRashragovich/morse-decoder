const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const expr = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";

console.log(expr.length);

function decode(expr) {
    let result = ''

    for (let i = 0; i < expr.length; i += 10) {

    let letter = '';
    let exprUnit = expr.slice(i, i + 10);

    if (exprUnit == '**********') {
        result += ' ';
    } else {
        for (let k = 0; k < exprUnit.length; k +=2) {

        if (exprUnit.slice(k, k + 2) == '10') letter += '.';
        if (exprUnit.slice(k, k + 2) == '11') letter += '-';

        }
        result += MORSE_TABLE[letter];
    }
    }

    return result;
}

module.exports = {
    decode
}