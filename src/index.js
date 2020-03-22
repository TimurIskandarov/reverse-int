module.exports = function reverse (n) {
  n = n < 0 ? -n : n;
  return +String(n).split('').reverse().reduce((a,b) => a+b);
}
