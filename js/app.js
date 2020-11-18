//How the product should work
//Display a carousel of a random generator of food images main page and food review videos on the right side.

//Person can click on the random generator button

//Person will receive a card below the carousel with the an image and name of the generated genre.

//To reset, just click on the random generator button again

//Person can hover to the right of the page and check out food reviews





//Work to be done for this project
// Link references to APIs, style document, and javascript document

// Make HTML elements

// add class/id where necessary

// CSS styling of body and children of body

// CSS styling to include body styling, button and carousel div, card div, and side.

// JS  constants, variables, cached elements, event listeners, and functions.




//Javascript stuff
// 1) Define the required constants:
    ////Color scheme(maybe)

// 2) Define the required variables:
    //Random images being generated.
    //Food review videos generated.

// 3) Define the required cached elements:
    //Button to generate random food images.
    //Carousel div
    //card div
    //body
    //video divs

// 4) Upon loading, the product should:
    //Initialize the random images being generated
    //Initialize the food review videos

// 5) Person click events:
    //add event listener to random generator button
        //fetch data from the API
        //return a response
        //render data
        //add error catcher
    //add event listener to food review videos
        //fetch data from the API
        //return a response
        //render data
        //add error catcher

// 6) Person wants a redo, hit random generator again:
    //Initialize and render


/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
const foodImg = []


/*------------------------ Cached Element References ------------------------*/
const randBtn = document.getElementById('randomizer')
const carDiv = document.querySelectorAll('.carousel')
const squares = document.querySelectorAll('.reviewVideos');
const body = document.getElementById('body')

/*----------------------------- Event Listeners -----------------------------*/
// swiftBtn.addEventListener('click', ()=> {
//     fetch("https://api.taylor.rest/")
//     .then((response) => {
//         console.log(response)
//         return response.json()
//     })
//     .then((data) => {
//         let newQuote = {}
//         newQuote["artist"] = "T-Swift"
//         newQuote["quote"] = data.quote
//         quotes.push(newQuote)
//         render();
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// })

/*-------------------------------- Functions --------------------------------*/
