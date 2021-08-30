"use strict";

if (1) {
    console.log('ok');
} else{
    console.log('Error');
}



// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log('ok!') : console.log('Error');

const num = 51;
switch (num) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('неверно');
        break;
        case 50:
            console.log('В точку!');
            break;
    default:
        console.log('Не в этот раз');
        break;        
}
