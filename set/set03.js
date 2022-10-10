
// ref => https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set

const mySet = new Set()

// métodos do set:

// mySet.add
// mySet.clear
// mySet.delete
// mySet.entries
// mySet.forEach
// mySet.has
// mySet.keys
// mySet.size
// mySet.values

mySet.add({ name: 'fernando' })
mySet.add({ name: 'fernando' })
mySet.add({ name: 'Fernando' })
console.log(mySet.size)
console.log(mySet)

// ou seja, mesmo eu adicionando novamente o valor 2, meu set continua com apenas 2 items únicos (1 e 2)

