let promise = new Promise((resolve, reject) => {
  resolve('A completed')
})

promise
  .then(msg => console.log(msg))
  .then(() => console.log('ran after A completed'))
  .catch(err => console.log(err))

//Output

//A completed
//ran after A completed
