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
const biryaniImg = []
const burgerImg = []
const dosaImg = []
const idlyImg = []
const pizzaImg = []
const advise = []


/*------------------------ Cached Element References ------------------------*/
const randBtn = document.getElementById('randomizer')
const adviseBtn = document.getElementById('adviceButton');
const body = document.getElementById('body')

/*----------------------------- Event Listeners -----------------------------*/

randBtn.addEventListener('click', ()=> {//how to randomize 5 categories being fetched?
    fetch("https://foodish-api.herokuapp.com/api/images/biryani")
    .then((response) => {
        console.log(response)
        return response.json()
    })
    .then((data) => {
                let newImage = {}
                newImage["cat"] = "biryani"
                newImage["image"] = data.image
                biryaniImg.push(newImage)
                render();
    })
    .catch((err) => {
      console.log(err)
     });
    fetch("https://foodish-api.herokuapp.com/api/images/burger")
    .then((response) => {
        console.log(response)
        return response.json()
    })
    .then((data) => {
                let newImage = {}
                newImage["cat"] = "burger"
                newImage["image"] = data.image
                burgerImg.push(newImage)
                render();
    })
    .catch((err) => {
      console.log(err)
     });
    fetch("https://foodish-api.herokuapp.com/api/images/dosa")
    .then((response) => {
        console.log(response)
        return response.json()
    })
    .then((data) => {
                let newImage = {}
                newImage["cat"] = "dosa"
                newImage["image"] = data.image
                dosaImg.push(newImage)
                render();
    })
    .catch((err) => {
      console.log(err)
     });
    fetch("https://foodish-api.herokuapp.com/api/images/idly")
    .then((response) => {
        console.log(response)
        return response.json()
    })
    .then((data) => {
                let newImage = {}
                newImage["cat"] = "idly"
                newImage["image"] = data.image
                idlyImg.push(newImage)
                render();
    })
    .catch((err) => {
      console.log(err)
     });
    fetch("https://foodish-api.herokuapp.com/api/images/pizza")
    .then((response) => {
        console.log(response)
        return response.json()
    })
    .then((data) => {
                let newImage = {}
                newImage["cat"] = "pizza"
                newImage["image"] = data.image
                pizzaImg.push(newImage)
                render();
    })
    .catch((err) => {
      console.log(err)
     });
})

adviseBtn.addEventListener('click', ()=> {
    fetch("https://api.adviceslip.com/advice")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
                let newAdvise = {}
                newAdvise["artist"] = "unknown"
                newAdvise["advise"] = data.advise
                advise.push(newAdvise)
                render();
    })
    .catch((err) => {
      console.log(err)
    });
})    
/*-------------------------------- Functions --------------------------------*/
// function biryaniCat() {
//     fetch("https://foodish-api.herokuapp.com/api/images/biryani")
//     .then((response) => {
//         console.log(response)
//         return response.json()
//     })
//     .then((data) => {
//         console.log(data)
//                 // let newImage = {}
//                 // newImage["cat"] = "biryani"
//                 // newImage["image"] = data.image
//                 // biryaniImg.push(newImage)
//                 // render();
//     })
//     .catch((err) => {
//       console.log(err)
//      });
// };

// function burgerCat() {
//     fetch("https://foodish-api.herokuapp.com/api/images/burger")
//     .then((response) => {
//         console.log(response)
//         return response.json()
//     })
//     .then((data) => {
//                 let newImage = {}
//                 newImage["cat"] = "burger"
//                 newImage["image"] = data.image
//                 burgerImg.push(newImage)
//                 render();
//     })
//     .catch((err) => {
//       console.log(err)
//      });    
// };

// function dosaCat() {
//     fetch("https://foodish-api.herokuapp.com/api/images/dosa")
//     .then((response) => {
//         console.log(response)
//         return response.json()
//     })
//     .then((data) => {
//                 let newImage = {}
//                 newImage["cat"] = "dosa"
//                 newImage["image"] = data.image
//                 dosaImg.push(newImage)
//                 render();
//     })
//     .catch((err) => {
//       console.log(err)
//      });     
// };

// function idlyCat() {
//     fetch("https://foodish-api.herokuapp.com/api/images/idly")
//     .then((response) => {
//         console.log(response)
//         return response.json()
//     })
//     .then((data) => {
//                 let newImage = {}
//                 newImage["cat"] = "idly"
//                 newImage["image"] = data.image
//                 idlyImg.push(newImage)
//                 render();
//     })
//     .catch((err) => {
//       console.log(err)
//      });     
// };

// function pizzaCat() {
//     fetch("https://foodish-api.herokuapp.com/api/images/pizza")
//     .then((response) => {
//         console.log(response)
//         return response.json()
//     })
//     .then((data) => {
//                 let newImage = {}
//                 newImage["cat"] = "pizza"
//                 newImage["image"] = data.image
//                 pizzaImg.push(newImage)
//                 render();
//     })
//     .catch((err) => {
//       console.log(err)
//      });     
// };

function render() {
    container.innerHTML = ""
    categories.forEach((cat, idx) => {
        appendDiv(cat["image"], cat["cat"], idx)
    })
}

//function for second APi

// function appendDiv(advice, artist) {
//     let newDiv = document.createElement("div")
//     newDiv.innerHTML = `
//                         <div class="card h-100" id="${artist.toLowerCase()}">
//                             <div class="card-body">
//                                 <blockquote class="blockquote mb-0">
//                                     <p>${advice}</p>
//                                     <footer class="blockquote-footer">${artist}</footer>
//                                 </blockquote>
//                             </div>
//                         </div>    
//                         `
//     container.appendChild(newDiv)
// }

