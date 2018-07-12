const _ = require('lodash')

const numbers = [
  { num: 1, type: 'a' },
  { num: 11, type: 'g' },
  { num: 21, type: 'd' },
  { num: 32, type: 'j' },
  { num: 45, type: 'x' },
  { num: 4, type: 'o' },
  { num: 98, type: 'q' },
  { num: 8, type: 'l' }
]

const zeroToNinetyNine = () => {
  let i = 0
  let numbers = []
  while (i <= 99) {
    const x = { num: i, type: `a${i}` }
    numbers.push(x)
    i++
  }
  return numbers
}

//sort array by num in ascending order
const sortedNums = numbers.sort(function(a, b) {
  return a.num - b.num
  //return b.num - a.num - sort in descending order
})

function findFirstMissing(nums, nine9) {
  //return nums.map(num => {
  //console.log(num.num)
  return _.differenceBy(nine9, nums, 'num')
  //})
}

//   for (var i = 0; i < array.length; i++) {
//     if (array[i + 1] - array[i] !== 1) {
//       return array[i] + 1
//     }
//   }
//}

const missingNum = findFirstMissing(sortedNums, zeroToNinetyNine())

//console.log(zeroToNinetyNine())

console.log(missingNum)
