var Queue = require('../src/Queue').Queue

var q = new Queue()

q.enqueue('David')
q.enqueue('Mali')
q.enqueue('Aoteman')

console.log(q.toString())
q.dequeue('Aoteman')
console.log(q.toString())

console.log('front of queue:', q.front())

console.log('back of queue:', q.back())