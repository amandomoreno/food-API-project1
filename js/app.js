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
const randomImages = []
const advices = []


/*------------------------ Cached Element References ------------------------*/
const randBtn = document.getElementById('randomizer')
const adviseBtn = document.getElementById('adviceButton');
const container = document.getElementById("containerDiv")
const body = document.getElementById('body')
const slip = document.getElementById("adviceSlip")


/*----------------------------- Event Listeners -----------------------------*/

// randBtn.addEventListener('click', ()=> {
//     fetch("https://foodish-api.herokuapp.com/api/images/biryani")
//     .then((response) => {
//         console.log(response)
//         return response.json()
//     })
//     .then((data) => {
//                 let newImage = {}
//                 newImage["cat"] = "biryani"
//                 newImage["image"] = data.image
//                 biryaniImg.push(newImage)
//                 render();
//     })
//     .catch((err) => {
//       console.log(err)
//      });
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
//     fetch("https://foodish-api.herokuapp.com/api/images/pizza")
//     .then((response) => {
//         console.log(response)
//         return response.json()
//     })
//     .then((data) => {
//                 let newImage = {}
//                 newImage["cat"] = "pizza"
//                 newImage["image"] = data.url
//                 pizzaImg.push(newImage)
//                 render();
//     })
//     .catch((err) => {
//       console.log(err)
//      });
// })
const getBiryani = async() => {
    fetch("https://foodish-api.herokuapp.com/api/images/biryani")
    .then((response) => {
        console.log(response.url)
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
}

const getBurger = async() => {
    fetch("https://foodish-api.herokuapp.com/api/images/burger")
    .then((response) => {
        console.log(response.url)
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
}

const getDosa = async() => {
    fetch("https://foodish-api.herokuapp.com/api/images/dosa")
    .then((response) => {
        console.log(response.url)
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
}

const getIdly = async() => {
    fetch("https://foodish-api.herokuapp.com/api/images/idly")
    .then((response) => {
        console.log(response.url)
        return response.json()
    })
    .then((data) => {
                let newImage = {}
                newImage["cat"] = "idly"
                newImage["image"] = data.image
                burgerImg.push(newImage)
                render();
    })
    .catch((err) => {
      console.log(err)
     });
}

const getPizza = async() => {
    fetch("https://foodish-api.herokuapp.com/api/images/pizza")
    .then((response) => {
        console.log(response.url)
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
}

// randBtn.addEventListener('click', async() => {
//     try{
//         const a = getBiryani();
//         const b = getBurger();
//         const c = getDosa();
//         const d = getIdly();
//         const e = getPizza();

//         const randomize = await Promise.all([a, b, c, d, e])

//         // throw 'broken!'
        
//         return randomize
        

//     } catch(err) {
//         console.log(err)
//         return `It's all gonna be just fine...`
//         // throw `Get a burger!`
//     }
// });

randBtn.addEventListener('click', async() => {
    try{
        const a = fetch("https://foodish-api.herokuapp.com/api/images/biryani");
        const b = fetch("https://foodish-api.herokuapp.com/api/images/burger");
        const c = fetch("https://foodish-api.herokuapp.com/api/images/dosa");
        const d = fetch("https://foodish-api.herokuapp.com/api/images/idly");
        const e = fetch("https://foodish-api.herokuapp.com/api/images/pizza");
        await Promise.all([a, b, c, d, e])
        .then(async (results) => {
            jsonResults = []
            for (const result of results) {
                jsonResults.push(await result.json())
            }
            return jsonResults
        })
        .then(data => {
            console.log(data)
            let newImage = {}
                newImage["cat"] = "randomAPI"
                newImage["image"] = data.array
                randomImages.push(newImage)
                render();
        })
    } catch(err) {
        console.log(err)
    }
});

// const getRandomImg = async() => {
//     fetch(jsonResults)
//     .then((response) => {
//         console.log(response.url)
//         return response.json()
//     })
//     .then((data) => {
//         let newImage = {}
//         newImage["cat"] = "random"
//         newImage["image"] = data.image
//         randomImages.push(newImage)
//         render();
//     })
//     .catch(err) 
//         console.log(err)
//         return `It's all gonna be just fine...`
//         // throw `Get a burger!`
// }

adviseBtn.addEventListener('click', ()=> {
    fetch("https://api.adviceslip.com/advice")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
                let newAdvice = {}
                newAdvice["artist"] = "GOD"
                newAdvice["advise"] = data.slip.advice
                advices.push(newAdvice)
                render();
    })
    .catch((err) => {
      console.log(err)
    });
})    
/*-------------------------------- Functions --------------------------------*/
//function for first API
// function appendImg(image, cat) {
//     let newContainer = document.createElement("div")
//     newContainer.innerHTML = `
//                                 <div class="card mb-3" id="${cat.toLowerCase()}" style="max-width: 540px;">
//                                     <div class="row no-gutters">
//                                         <div class="col-md-4">
//                                             <img src="${image}" class="card-img" alt="randomizer-picks">
//                                 </div>
//                                 <div class="col-md-8">
//                                     <div class="card-body">
//                                     <h5 class="card-title">the Randomizer picks...</h5>
//                                     <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                                     <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//                                     </div>
//                                 </div>
//                                 </div>
//                             </div>
//                             `
//     container.appendChild(newContainer)
// }

// function for first API

// let process = (prom) =>{
//     prom.then(data=>{
//         let img = document.createElement('img');
//         img.style.background = data.image;
//         document.getElementById('containerDiv').appendChild(img);
//     });       
// }

function appendImg(randomImages, cat) {
    let newContainer = document.createElement("div")
    newContainer.innerHTML = `
                                <div id="${cat.toLowerCase()}" class="flex-container"><img src="${Object.values(randomImages)}" onerror="src='https://thumbs.dreamstime.com/z/funny-dog-wearing-wig-female-clothes-white-background-48441429.jpg'" alt="rand-image." width="350px" height="300px"></div>
                            `
    container.appendChild(newContainer)
}


// .then((dog) => { // then we do the following to the promise, now defined as "dog" ...
// // console.log(Object.values(dog)[1]); // turn this on for testing
// let newDog = document.getElementById('randomDogAPIImage'); // create "newDog" and have it set to ID randomDogAPIImage ...
// newDog.innerHTML = `<div id="dogImageHolder" class="flex-container"><img src="${Object.values(dog)[1]}" onerror="src='https://thumbs.dreamstime.com/z/funny-dog-wearing-wig-female-clothes-white-background-48441429.jpg'" alt="dog." width="350px" height="300px"></div>`; // In "newDog", we now update it with a new div, which we ID as "dogImageHolder" and link it to the value (url) of the API. Also added a default stock photo image to replace any broken links, set the alt text to "dog." and gave it a specific widthe and height.
// })



/*{ <div class="card h-100" id="${cat.toLowerCase()}">
                            <div class="card-body">
                                <blockquote class="blockquote mb-0">
                                     <img id="pick" class="getPick" src="${image}" alt="randomizer-picks">
                                     <footer class="blockquote-footer">${cat}</footer>
                                </blockquote>
                            </div>
                            </div>  }*/

//function for second APi
function appendDiv(advice, artist) {
    let newDiv = document.createElement("div")
    newDiv.innerHTML = `
                        <div class="card h-100" id="${artist.toLowerCase()}">
                            <div class="card-body">
                                <blockquote class="blockquote mb-0">
                                    <p>${advice}</p>
                                    <footer class="blockquote-footer">${artist}</footer>
                                </blockquote>
                            </div>
                            </div>    
                        `
    slip.appendChild(newDiv)
}

// function render() {
//     container.innerHTML = ""
//     allImages.forEach((cat, idx) => {
//         appendDiv(cat["image"], cat["cat"], idx)
//     })
// };

function render() {
    container.innerHTML = ""
    randomImages.forEach((image, idx) => {
        appendImg(image["image"], image["cat"], idx)
    });
    slip.innerHTML = ""
    advices.forEach((advice, idx) => {
        appendDiv(advice["advise"], advice["artist"], idx)
    });
}

// function deleteAdvise(idx){
//     advices.splice(idx, 1)
//     render()
// }