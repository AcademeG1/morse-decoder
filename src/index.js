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

function decode(inputStr) {
    let mass = []
    for (let i = 0; i < (inputStr.length); i = i+10) {
        mass.push(inputStr.substring(i,i+10))
    }
    for (let i = 0; i < mass.length; i++) {
        if (mass[i] === '**********') {
            mass[i] = ' '
        }
        mass[i] = mass[i].replace(/^0+/, '')
    }

    let str = ''

    mass.forEach(el => {
        for (let i = 0; i < el.length; i = i+2){
            if (el[i] === ' ') {
                str += '/'
            } else {
                if (`${el[i]}${el[i+1]}` === '10'){
                    str += '.'}
                if (`${el[i]}${el[i+1]}` === '11'){
                    str += '-'}
            }
        }
        str += ' '
    })
// console.log(str)
    mass = str.split(' ')
    console.log(mass)
    let result = ''
    for (let i = 0; i < mass.length - 1; i++){
        if (mass[i] === '/') {
            result += ' '
        } else {result += MORSE_TABLE[mass[i]]}
    }
    return result
}

module.exports = {
    decode
}