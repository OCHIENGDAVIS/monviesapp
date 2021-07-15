// Objects and their associated methods

const o = {
  name: 'Davis',
  numbers: ['one', 'two'],
};

console.log(Object.getPrototypeOf(o));
console.log(o.constructor.prototype);
console.log(o.toString());
console.log(o);
stream = JSON.stringify(o);
// console.log(stream);
// console.log(JSON.parse(stream));
// const d = new Date();
// console.log(d.toJSON());
// Ccore javascript in the way to go today
const developer = {
  stack: [],
  set stack(value) {
    this.stack.push(value);
  },
};
// developer.stack = 'javascript';
// console.log(developer.stack);
book = {
  name: 'intro to programming',
  author: 'int the band lands',
};
console.log(book.valueOf(), 'is th value of the object');
