const fs = require('fs');

let base = 2;
let data = '';

for (let i = 1; i < 11; i++) {
    data += `${base} * ${i} = ${base * i}\n`;
}

fs.writeFile(`archivos/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;

    console.log(`El archivo tabla-${base}.txt ah sido creado!`);
});