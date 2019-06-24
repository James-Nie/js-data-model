var Llist = require('../src/Llist').Llist

var cities = new Llist()
cities.insert('David', 'head')
cities.insert('Mali', 'David')
cities.insert('Aoteman', 'Mali')

cities.display()

cities.remove('Mali')

cities.display()