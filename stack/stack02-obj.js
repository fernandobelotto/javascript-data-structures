class Stack { 
    constructor() {
        this.items = {}
        this.count = 0
    }

    push(e) {
        this.items[this.count] = e
        this.count++
    }

    peek() {
        return this.items[this.count]
    }

    pop() {
        delete this.items[this.count]
        this.count--
    }

    size() {
        return this.count
    }

    clear() {
        this.items = {}
        this.count = 0 
    }
    isEmpty() {
        if(!this.count) return true
        return false
    }
}



const myStack = new Stack()
console.log(myStack.isEmpty())
myStack.push('fernando')
myStack.push('gabriel')
console.log(myStack.isEmpty())

console.log(myStack.items)