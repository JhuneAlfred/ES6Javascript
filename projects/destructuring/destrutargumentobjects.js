var saveFiled = {
    extension: 'jpg',
    name: 'repost',
    size: 14040
}

// function fileSummary(file) {
//     return `The file ${file.name}.${file.extension} is of size ${file.size}`
// }

//Destructuring above
function fileSummary({ name, extension, size }, { path }) {
    return `The file ${path}${name}.${extension} is of size ${size}`
}

//destructuring

console.log(fileSummary(saveFiled, { path: 'c:\\data\\' }))

//output
//The file c:\data\repost.jpg is of size 14040