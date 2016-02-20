const borderColor = require('./border/color');
const borderWidth = require('./border/width');

console.log(borderColor('red'));
console.log(borderColor('red', 'blue'));
console.log(borderColor('red', 'blue', 'black'));
console.log(borderColor('red', 'blue', 'black', 'yellow'));
console.log(borderColor('red', 'blue', 'black', 'yellow', 'pink'));

console.log(borderWidth(10));
console.log(borderWidth(10, 20));
console.log(borderWidth(10, 20, 30));
console.log(borderWidth(10, 20, 30, 0));
