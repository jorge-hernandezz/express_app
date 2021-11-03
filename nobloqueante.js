const fs = require('fs');

fs.readFile('el_quijote.txt', 'utf8', (error, content) =>
  console.log(content)
);

console.log('Haciendo otra cosa');
console.log(process.uptime());