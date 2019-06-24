'use strict'
/**
 * @name Dictionary 字典
 * @author niejianbo
 * @describe 基础是Array
 */

class Dictionary {
    constructor() {
        this.dataStore = [];
    }

    // 插入一个元素
    add (key, value) {
        this.dataStore[key] = value;
    }

    // 查找关联键
    find (key) {
        return this.dataStore[key];
    }

    // 返回队首元素
    remove (key) {
        delete this.dataStore[key];
    }

    // 返回字典长度
    count () {
        var n = 0;
        for (var key in Object.keys(this.dataStore)) {
            n++;
        }
        return n;
    }

    // 清空字典
    clear () {
        Object.keys(this.dataStore).forEach((key) => {
            delete this.dataStore[key]
        }, this)
    }

    // 显示字典中所有键-值对
    showAll () {
        Object.keys(this.dataStore).forEach((key) => {
            console.log(key + '->' + this.dataStore[key])
        })
    }

}

module.exports.Dictionary = Dictionary