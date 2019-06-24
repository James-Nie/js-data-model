var DoubleLlist = require('../src/DoubleLlist').DoubleLlist

var c = new DoubleLlist()
c.insert('David', 'head')
c.insert('Mali', 'David')
c.insert('Aoteman', 'Mali')

c.display()

c.remove('Mali')

c.display()

c.dispReverse()