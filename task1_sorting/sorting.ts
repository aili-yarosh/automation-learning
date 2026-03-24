const fs = require('fs');
const obj= {
    "sprints" : "2",
    "task" : "3"
};
fs.writeFileSync('./j_1.json', JSON.stringify(obj), {encoding : 'utf8',flag : 'w'});