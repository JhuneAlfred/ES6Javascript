var desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
];

var deskTypes = desks.reduce((deskTypes, desk) => {
    if (desk.type === "sitting") {
        deskTypes.sitting++
    }
    if (desk.type === "standing") {
        deskTypes.standing++
    }
    return deskTypes

}, { sitting: 0, standing: 0 });

console.log(deskTypes)

// output:
// { sitting: 3, standing: 2 }