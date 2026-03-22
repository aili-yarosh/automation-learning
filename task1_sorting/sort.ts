const fs = require('fs'); // працюємо з файловою системою тому підключаємо модуль файлової системи
const data = fs.readFileSync('./data_for_sort.json'); //читаємо json файл
console.log(data);
