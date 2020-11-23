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
const randomImages = []
const advices = []
/*------------------------ Cached Element References ------------------------*/
const randBtn = document.getElementById('randomizer')
const adviseBtn = document.getElementById('adviceButton');
const container = document.getElementById("containerDiv")
const body = document.getElementById('body')
const slip = document.getElementById("adviceSlip")
/*----------------------------- Event Listeners -----------------------------*/
randBtn.addEventListener('click', async() => {//one event listener using a sync await promise to fetch the APIs
    try{
        const a = fetch("https://foodish-api.herokuapp.com/api/images/biryani");
        const b = fetch("https://foodish-api.herokuapp.com/api/images/burger");
        const c = fetch("https://foodish-api.herokuapp.com/api/images/dosa");
        const d = fetch("https://foodish-api.herokuapp.com/api/images/idly");
        const e = fetch("https://foodish-api.herokuapp.com/api/images/pizza");
        await Promise.all([a, b, c, d, e])
        .then(async (results) => {//then function required to json-results in an epty array called jsonRsults
            jsonResults = []
            for (const result of results) {
                jsonResults.push(await result.json())
            }
            return jsonResults//returning an array of objectcs, containing API information 
        })
        .then(data => {//then function required to disect the data, from the above array
            let newImage = data[Math.floor(Math.random() * data.length)]//using this section of code to effectively randomize the APIs and return one value
            newImage["cat"] = "randomAPI"
            newImage["image"] = newImage.image
            randomImages.push(newImage)//the variable whith an empty array, ready to receive some values
            render();//invoke render function to render onto the screen 
            console.log(newImage.image)
        })
    } catch(err) {
        console.log(err)//standard in a promise in order to find out if there are some errors in the code
    }
});

adviseBtn.addEventListener('click', ()=> {//this is an event listener for the second API which fetches advice
    fetch("https://api.adviceslip.com/advice")
    .then((response) => {//then required to return a response from the API that was fetched as a json
        return response.json()
    })
    .then((data) => {//then function required to disect the data just received
                let newAdvice = {}//an epty object is created and a constant is assigned to it
                newAdvice["artist"] = "GOD"
                newAdvice["advise"] = data.slip.advice//in order to pick the specifc part of information that is needed
                advices.push(newAdvice)//the variable whith an empty array, ready to receive some values
                render();//invoke render function to render onto the screen 
    })
    .catch((err) => {
      console.log(err)
    });
})    
/*-------------------------------- Functions --------------------------------*/
function appendImg(image, cat) {//In this function the DOM is being manipulated in order to create another div with an image
    let newContainer = document.createElement("div")
    newContainer.innerHTML = `
                                <div id="${cat.toLowerCase()}" class="flex-container"><img src="${image}" onerror="src='https://thumbs.dreamstime.com/z/funny-dog-wearing-wig-female-clothes-white-background-48441429.jpg'" alt="rand-image." width="350px" height="300px"></div>
                            `
    container.appendChild(newContainer)//this is an empty div in HTML that's being appended with the above div
}

//function for second APi
function appendDiv(advice, artist) {//In this function the DOM is being manipulated in order to create another div with an image
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
    slip.appendChild(newDiv)//this is an empty div in HTML that's being appended with the above div
}

function render() {//nothing will render on screen without this function. It has already been invoked by each respective API function
    container.innerHTML = ""
    randomImages.forEach((image, idx) => {
        appendImg(image["image"], image["cat"], idx)
    });
    slip.innerHTML = ""
    advices.forEach((advice, idx) => {
        appendDiv(advice["advise"], advice["artist"], idx)
    });
}

