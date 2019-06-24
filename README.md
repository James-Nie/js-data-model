# js-data-structure

javascript data structure.

include 
```
Stack
Queue
Llist
Dictionary
DoubleLlist
```
## Installation

This is a javascript module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm install js-data-structure --registry http://af.hikvision.com.cn/artifactory/api/npm/npm-pbg/
```

## API

<!-- eslint-disable no-unused-vars -->

```js
var jsDataModel = require('js-data-structure')
```

## Example

### Simple example

The following is an example of some server-side code that generates a form
that requires a CSRF token to post back.

```js
var Stack = require('js-data-structure').Stack

var stack = new Stack()

stack.push('David')
stack.push('Mali')
stack.push('Aoteman')

console.log('stack length:', stack.length())
console.log(stack.peek())
```

## License

[MIT](LICENSE)
