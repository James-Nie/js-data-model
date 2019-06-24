var Stack = require('../src/Stack').Stack

var stack = new Stack()

stack.push('David')
stack.push('Mali')
stack.push('Aoteman')

console.log('stack length:', stack.length())
console.log(stack.peek())