//iterates through each element in the array
const colors = ['red', 'yellow', 'blue', 'green']
const myColor = 'blue'

colors.forEach((color) => {
    console.log(color)
})

colors.forEach((color) => {
    console.log(`I found my color ${myColor}`)
    console.log(color)
})

const numbers = [1, 2, 3, 4, 5]

let sum = 0

numbers.forEach(number => {
    sum += number
})

console.log(sum)

handlePosts()

//-------------
function handlePosts() {
    var posts = [
        { id: 33, title: 'Morning News' },
        { id: 44, title: 'Golden City' },
        { id: 25, title: 'Dark Nights' },
        { id: 46, title: 'Happy Days' },
    ]

    posts.forEach(post => {
        console.log(post.title)
    })
}

///
var images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
];
var areas = [];

images.forEach(function (image) {
    areas.push(image.height * image.width)
})

areas.forEach(area => {
    console.log(area)
})


// output:
// red
// yellow
// blue
// green
// I found my color blue
// red
// I found my color blue
// yellow
// I found my color blue
// blue
// I found my color blue
// green
// 15
// Morning News
// Golden City
// Dark Nights
// Happy Days
// 300
// 1800
// 1728