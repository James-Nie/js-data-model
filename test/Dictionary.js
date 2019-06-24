var Dictionary = require('../src/Dictionary').Dictionary

var d = new Dictionary()

d.add('David', 25)
d.add('Mali', 28)
d.add('Aoteman', 18)

console.log('David age:', d.find('David'))
d.remove('David')

d.showAll()

console.log('dictionary count:', d.count())
d.clear()
console.log('dictionary count:', d.count())