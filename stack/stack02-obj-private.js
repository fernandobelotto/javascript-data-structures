const _items = Symbol('stackItems')

class Stack { 
    constructor() {
        this[_items] = []
    }

    pop() {
        this[_items].pop()
    }

    push(...e) {
        this[_items].push(...e)
    }

    peek() {
        return this[_items][this[_items].length]
    }

    clear() {
        this[_items] = []
    }

    size() {
        return this[_items].length
    }

    isEmpty() {
        if (this[_items].length) {
            return false
        }
        return true
    }
}



const myStack = new Stack()
myStack.push(1)
console.log(myStack[_items] = 0)