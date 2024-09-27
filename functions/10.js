/*
line 1: multiply, left, right
  multiply: global
  left: local
  right: local

line 2: product, left, right
  product: local
  left: local
  right: local

line 3: product
  product: local

line 6: getNumber, prompt
  getNumber: global
  prompt: local

line 7: parseFloat, question, prompt
  parseFloat: global
  question: global
  prompt: local

line 10: left, getNumber
  left: global
  getNumber: global

line 11: right getNumber
  right: global
  getNumber: global

line 12: console, left, right, multiply
  console: global
  left: global
  right: global
  multiply: global
  left: local
  right: local

*/
