const fs = require('fs'); // працюємо з файловою системою тому підключаємо модуль файлової системи
const data = fs.readFileSync('./data_for_sort.json',{encoding : 'utf8'}); //читаємо json файл та додали декодування
//console.log(typeof data);
let dataObj = JSON.parse(data); //стрінг трансформуємо в обʼєкт ts
console.log(typeof dataObj); //перевіряємо чи дійсно обʼєкт