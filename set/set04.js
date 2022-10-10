
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
mySet.add(3)

mySet.clear() // remove todos os valores do set

mySet.add(1)
mySet.add(2)
mySet.add(3)
mySet.add('fernando')
mySet.add('gabriel')

mySet.delete(1) // remove o valor 1 do set

// for (let i of mySet.entries()) {
//     console.log(i)
// }

mySet.has('fernando') // o método has retorna true se o valor existe, false se n existe no 



// ou seja, mesmo eu adicionando novamente o valor 2, meu set continua com apenas 2 items únicos (1 e 2)

