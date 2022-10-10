class Stack { 
    constructor() {
        this.items = []
    }

    pop() {
        this.items.pop()
    }

    push(...e) {
        this.items.push(...e)
    }

    peek() {
        return this.items[this.items.length]
    }

    clear() {
        this.items = []
    }

    size() {
        return this.items.length
    }

    isEmpty() {
        if (this.items.length) {
            return false
        }
        return true
    }
}



const myStack = new Stack()
myStack.push('fernando', 'gabriel', 'belotto')
console.log(myStack.size())