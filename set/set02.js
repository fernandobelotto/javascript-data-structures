
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

mySet.add(1)
mySet.add(2)
mySet.add(2)
console.log(mySet.size)
console.log(mySet)

// ou seja, mesmo eu adicionando novamente o valor 2, meu set continua com apenas 2 items únicos (1 e 2)
// o mesmo vale para strings ou quaiquer outro valor