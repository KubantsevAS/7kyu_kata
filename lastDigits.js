let lastDigit = (n, d) => n.toString().split('').map(Number).reverse().splice(0, d).reverse();
// or
let lastDigit = (n, d) => d > 0 ? `${n}`.split('').map(Number).splice(-d) : [];