const defaultColor = ['red', 'green']
const userFavoriteColors = ['orange', 'yellow']

const result = ['purple', ...defaultColor, ...userFavoriteColors]

console.log(result)


const firstTeam = [{ name: 'alex', age: 23 }, { name: 'samantha', age: 30 }]
const secondTeam = [{ name: 'robert', lastname: 'redford', age: 23, }, { name: 'brenda', lastname: 'wong', age: 30 }]
const thirdTeam = [{ name: 'peter', age: 23 }, { name: 'becky', age: 30 }]

const combinedTeam = [{ name: 'john', lastname: 'doe', age: 32 }, ...firstTeam, ...secondTeam, ...thirdTeam]

console.log(combinedTeam)

// output:
// [ 'purple', 'red', 'green', 'orange', 'yellow' ]
// [ { name: 'john', lastname: 'doe', age: 32 },
//   { name: 'alex', age: 23 },
//   { name: 'samantha', age: 30 },
//   { name: 'robert', lastname: 'redford', age: 23 },
//   { name: 'brenda', lastname: 'wong', age: 30 },
//   { name: 'peter', age: 23 },
//   { name: 'becky', age: 30 } ]