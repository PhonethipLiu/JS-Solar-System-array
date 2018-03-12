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
    planetEl.innerHTML += `<p> ${planets.join(" , ")} </p>`; 
    // console.log(printPlanets);
    return printPlanets;
});


/*
    Use the map method to create a new array where the first letter of each planet is capitalized. Use the `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
const print = document.getElementById("planets-caps");
print.innerHTML = "<h3> Planets using map method to create a new array where the first letter of each planet is capitalized:</h3>";

planets.map( (caps) => {
    let capPlanets = caps.charAt(0).toUpperCase() + caps.slice(1);
    print.innerHTML += `<p> ${capPlanets} </p>`;
    // console.log(capPlanets);
    return capPlanets;
});

/*
    Use the filter method to create a new array that contains planets with the letter 'e'. Use the `includes()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

var eplanets= document.getElementById("planets-e");
eplanets.innerHTML = "<h3> Planets filter method to create a new array that contains planets with the letter 'e':</h3>";

var newPlanetsArray = planets.filter( (planet) => {
    return planet.includes("e");   
});
// console.log("newPlanetsArray", newPlanetsArray);
newPlanetsArray = eplanets.innerHTML += `<p> ${newPlanetsArray.join(" , ")} </p>`;


// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]