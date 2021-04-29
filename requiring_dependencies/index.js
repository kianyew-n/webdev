// index.js is the entry point or the main file for the directory in JS
const f1 = require('./f1.js')
const f2 = require('./f2.js')
const f3 = require('./f3.js')

const arr = [f1, f2, f3]
// Export all the sub functions using just index.js
module.exports = arr