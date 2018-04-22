//Sample 1:
// const companies = [
//     { name: 'Google', location: 'Mountain View' },
//     { name: 'Facebook', location: 'Menlo Park' },
//     { name: 'Uber', location: 'San Francisco' }
// ]

//const [{ location }] = companies
//console.log(location)
//output:
//Mountain View

//************************************************ */
//Sample 2:

const Google = {
    locations: ['Mountain View', 'New York', 'London']
}

const { locations: [location, ...loc2] } = Google

console.log(location, loc2)

//output;
//Mountain View [ 'New York', 'London' ]