"use strict";
let result;
let a = 1;
let b = 1; 
result = (a + b < 4) ? result = ' мало' :  'много';
console.log(result);

let message;
let login;
login = prompt('Директор', '');
login == 'сотрудник' ? message = 'привет' : login == 'Директор' ? message = 'Здраствуйте' : 
login == '' ? message = 'нет логина': '';
alert(message);