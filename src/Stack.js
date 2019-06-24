'use strict'
/**
 * @name Stack 栈
 * @author niejianbo
 * @describe 数据只能在栈顶插入和删除
 */

class Stack {
    constructor() {
        this.dataStore = [];
        this.top = 0;
    }

    // 将一个元素压入栈
    push (element) {
        this.dataStore[this.top++] = element;
    }

    // 返回栈顶元素，同时将变量top减一
    pop () {
        return this.dataStore[--this.top];
    }

    // 返回栈顶元素,如果对于一个空栈调用此方法，返回undefined
    peek () {
        return this.dataStore[this.top - 1];
    }

    // 栈的从长度
    length () {
        return this.top;
    }

    // 清空栈
    clear () {
        this.dataStore.length = 0;
        this.top = 0;
    }

}

module.exports.Stack = Stack