'use strict'
/**
 * @name DoubleLlist 双向链表
 * @author niejianbo
 * @describe 节点集合，每个节点指向它的前面节点个后继节点
 */

class DoubleLlist {
    constructor() {
        this.head = new Node('head');
    }

    // 最后节点
    findLast () {
        var currNode = this.head;
        while (!(currNode.next == null)) {
            currNode = currNode.next;
        }
        return currNode;
    }

    // 反序显示双向链表中的元素
    dispReverse () {
        var currNode = this.head;
        currNode = this.findLast();
        while (!(currNode.previous == null)) {
            console.log(currNode.element)
            currNode = currNode.previous;
        }
    }

    // 查找链表中一个节点
    find (item) {
        var currNode = this.head;
        while (currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    }

    // 插入节点
    insert (newElement, item) {
        var newNode = new Node(newElement);
        var current = this.find(item);
        newNode.next = current.next;
        newNode.previous = current;
        current.next = newNode;
    }

    // 查找元素前一个节点
    findPrevious (item) {
        var currNode = this.head;
        while (!(currNode.next == null) && currNode.next.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    }

    // 删除一个节点
    remove (item) {
        var currNode = this.find(item)
        if (!(currNode.next == null)) {
            currNode.previous.next = currNode.next;
            currNode.next.previous = currNode.previous;
            currNode.next = null;
            currNode.previous = null;
        }
    }

    // 返回队尾元素
    display () {
        var currNode = this.head;
        while (currNode.next != null) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }

}

// 定义节点
class Node {
    constructor(element) {
        this.element = element;
        this.previous = null;
        this.next = null;
    }
}

module.exports.DoubleLlist = DoubleLlist