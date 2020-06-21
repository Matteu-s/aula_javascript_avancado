function Cachorro(){}

Cachorro.prototype.latir = function() {}

const c = new Cachorro()

console.log(c.__proto__);

Cachorro.prototype.test = function(){}

console.log(c.__proto__);

String.prototype.split

console.log('12345'.split(''));

String.prototype.split = function() {console.log('ixi...');}

console.log('12345'.split(''));

