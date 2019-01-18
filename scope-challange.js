//NEW PROBLEM!!!!!!!
// const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
// let y = 1

// for (let x = 1; y < cookies.length; x++) {
//     const currentCookie = cookies[y]
//     console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
// }
// //this runs through the loop & ouputs the current cookie onto the console 
// with the text `mmmmmm` text provided with string template


//THIS IS HOW I TACKLED THE PROBLEM!!!!!!!!!


const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
let y = 1
for (let x= 1; x < cookies.length; x++) {
    const currentCookie = cookies[x]
    // console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}

// NEW PROBLEM!!!!!!!!!!!
// const conjunction = function (firstWord, secondWord) {
//     const conjoinedWord = `${firstWord} ${secondWord}`
// }

// conjunction("Master", "Card")
// console.log(conjoinedWord)

//THIS IS HOW I TACKLED THE PROBLEM!!!!!!


const conjunction = (firstWord, secondWord) => {
    let conjoinedWord = `${firstWord} ${secondWord}`
    return `customer has ${conjoinedWord}`;
}

let cardType = conjunction("Master", "Card")
// console.log(cardType)



//NEW PROBLEM 
// {
//     const ModSquad = {
//         "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"]
//         "series": {
//             "start": "1968",
//             "end": "1973"
//         }
//     }

//     const HTMLRepresentation = `<h1>The Mod Squad</h1>`

//     ModSquad.members.forEach(member => {
//         const HTMLRepresentation += `<div>${member}</div>`
//     })
// }

// document.querySelector(".show-info").innerHTML = HTMLRepresentation

//THIS IS HOW I TACKLED THE PROBLEM !!!!!!!!!!!!!!!

    const ModSquad = {
        "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        "series": {
            "start": "1968",
            "end": "1973"
        }
    }

    let HTMLRepresentation = `<h1>The Mod Squad</h1>`

    ModSquad.members.forEach(member => {
        HTMLRepresentation += `<div>${member}</div>`
    })
// console.log(HTMLRepresentation)

// document.querySelector(".show-info").innerHTML = HTMLRepresentation


  //NEW PRACTICE!!!!!!!!
// There are two separate scoping issues in this code. Remember, for and if are 
// their own block scopes and if something is declared with let or const then that variable only exists in that scope.
//THIS IS THE INCORRECT CODE!!!!!!!!!!!!
// const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

// for (let k = 0; k < locations.length; k++) {
//     const currentLocation = locations[k]

//     if (currentLocation[0] > 2) {
//         const invalidLocation = true
//     }

//     if (invalidLocation) {
//         console.log("This location is invalid")
//     }
// }

// /*
//     Since k is used as the loop counter, it will be the
//     total number of locations, not the invalid ones. You
//     need to fix this somehow.
// */
// console.log(`There were ${k} invalid locations`)

//THIS IS HOW I TACKLED THE PROBLEM!!!!!!!!!!

const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

let invalidLocations = 0;
for (let k = 0; k < locations.length; k++) {
    const currentLocation = locations[k]

    if (currentLocation[0] > 1) {
        // console.log("This location is invalid")
        invalidLocations ++
    }

}
// console.log(`There were ${invalidLocations} invalid locations`)

//SCOPE ADVANCE CHALLENGE!!!!!!!!!
// Not only can functions take other functions as arguments, 
// but functions can also return functions! This is marked as an advanced challenge 
// because you haven't been introduced to this concept yet.

// The llamaNamer function defines an internal function and your job is to rewrite this
// his code so that the internal function gets returned.

// const llamaNamer = function () {
//     const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
//     const randomizer = Math.floor(Math.random() * 7)

//     const namer = function () {
//         const suffix = " the Llama"
//         const name = possibleNames[randomizer]
//     }

//     return name + suffix
// }

// nameMaker = llamaNamer()
// console.log(nameMaker())



let llamaNamer = () => {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    let randomizer = Math.floor(Math.random() * 7)

    let namer = function () {
        const name = possibleNames[randomizer]
        const suffix = " the Llama"
        let nameMaker = name + suffix
        return nameMaker
    }
    return namer();
}

console.log(llamaNamer());
console.log(llamaNamer());
console.log(llamaNamer());

