console.log("JavaScript array Solar system exercise by Phonethip");

const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

const planetEl = document.getElementById("planets");

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

planets.forEach( (printPlanets) => {
    
    planetEl.innerHTML = "<h1>The eight planets in our solar system</h1>";
    planetEl.innerHTML += `<p>${planets}</p>`; 
    // console.log(printPlanets);
    return printPlanets;
});


/*
    Use the map method to create a new array where the 
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

let capPlanets = planets.map( (caps)=> {
    return caps;
});

capPlanets = caps.charAt(0).toUpperCase(array);

console.log(capPlanets);
// capPlanets.charAt(0).toUpperCase();



/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/


// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]