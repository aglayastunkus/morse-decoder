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

function decode(expr) {
    // write your solution here
    let strArr = expr.match(/.{1,10}/g);
    strArr.forEach((item, index) => {
        strArr[index] = getChar(item);
    });
    return strArr.join('');


    function getChar(str){

        let arr = str.match(/.{1,2}/g);
        if (arr[0] === '**') return ' ';
        arr.forEach( (item, index) => {
            if (item === '10') arr[index] = '.';
            if (item === '11') arr[index] = '-';
        } );
        let newArr = arr.filter( item => (item !== '00'));
        return MORSE_TABLE[newArr.join('')];
    }
}

module.exports = {
    decode
};