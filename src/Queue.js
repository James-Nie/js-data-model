'use strict'
/**
 * @name Queue 队列
 * @author niejianbo
 * @describe 用于存储按顺序排列的数据，先进先出
 */

class Queue {
    constructor() {
        this.dataStore = [];
    }

    // 向队尾插入一个元素
    enqueue (element) {
        this.dataStore.push(element);
    }

    // 删除队首的元素
    dequeue () {
        return this.dataStore.shift();
    }

    // 返回队首元素
    front () {
        return this.dataStore[0];
    }

    // 返回队尾元素
    back () {
        return this.dataStore[this.dataStore.length - 1];
    }

    // 显示队列内所有元素
    toString () {
        var reStr = '';
        for (let i = 0, l = this.dataStore.length; i < l; i++) {
            reStr += this.dataStore[i] + "\n";
        }
        return reStr;
    }

    // 队列是否为空
    empty () {
        return this.dataStore.length === 0 ? true : false;
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

module.exports.Queue = Queue