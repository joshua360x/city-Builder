// import functions and grab DOM elements
import { createCountString } from '../utils.js';


const cityEL = document.querySelector('.img-city');
const skyEL = document.querySelector('.img-sky');
const castleEL = document.querySelector('.img-castle');
const cityDropDown = document.querySelector('#city-dropdown');
const skyDropDown = document.querySelector('#sky-dropdown');
const castleDropDown = document.querySelector('#castle-dropdown');
const sloganButtonEL = document.querySelector('.sloganBtn');
const nameButtonEL = document.querySelector('#nameBtn');
const sloganInputEL = document.querySelector('.sloganInput');
const nameInputEL = document.querySelector('#nameInput');
const sloganEL = document.querySelector('.slogan');
const cityNameEL = document.querySelector('.cityName');
const statReportingEL = document.querySelector('.stat-Reporting');
const formEL = document.querySelector('#form');

// let state
let sloganArr = [];
let nameArr = [];
let cityStatechange = 0;
let skyStatechange = 0;
let castleStatechange = 0;



// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state


cityDropDown.addEventListener('change', () => {
    cityStatechange++;
    let cityChoosen = cityDropDown.value;
    // console.log(cityChoosen);
    cityEL.style.backgroundImage = `url("./assets/${cityChoosen}.jpg")`;
    let audiofile = new Audio(`./assets/${cityChoosen}.wav`);
    audiofile.play();
    displayStats();
});

skyDropDown.addEventListener('change', () => {
    skyStatechange++;
    let skyChoosen = skyDropDown.value;
    // console.log(skyChoosen);
    skyEL.style.backgroundImage = `url("./assets/${skyChoosen}-skyline.jpg")`;
    displayStats();
    let audiofile = new Audio(`./assets/${skyChoosen}.wav`);
    audiofile.play();

});

castleDropDown.addEventListener('change', () => {
    castleStatechange++;
    let castleChoosen = castleDropDown.value;
    // console.log(castleChoosen);
    castleEL.style.backgroundImage = `url("./assets/${castleChoosen}-castle.jpg")`;
    let audiofile = new Audio(`./assets/${castleChoosen}.wav`);
    audiofile.play();
    displayStats();

});

//   change for the dropdown menu
//   - Why? The image will change according to the value of the dropdown menu
//   - How? use the value from the dropdwon to dynmaically change the iumage or background image of the dropdown

// count will increment 
//   - Why? This important when managing the State 
//   - How? this will continue to be on change, so each time the dropdown is changed then the count will increment

//   click 
//    - Why? Obtain the slogan from the input value and push it to array
//    - How? done though addEventListener


// update the DOM 
//  - loop through array and clear out any slogans
//  - append any new slogans (avoid double appending)

// sloganButtonEL.addEventListener('click', () => {
//     clearingCatchPhrase();
//     displaySlogan();
// });



formEL.addEventListener('submit', (event) => {
      // function FormData(name, slogan) {
  //   this.nameArr = name;
  //   this.sloganArr = slogan;
    event.preventDefault();

    const formNew = new FormData(formEL);
  // console.log(formNew);
    console.log(formNew.get('sloganNameValue'));
    clearingCatchPhrase();
    displaySlogan();
    sloganInputEL.value = ''

});
  // let coolNew = new FormData(['Pizza'], ['red', 'blue'])
  // console.log(coolNew);
  
nameButtonEL.addEventListener('click', () => {
    // clearingCatchPhrase();
    // displaySlogan();
    let nameValue = nameInputEL.value;
    nameArr.push(nameValue);
    cityNameEL.textContent = `The name of your city is ${nameValue}`;
    nameInputEL.value = '';
    // console.log(nameValue);

});


function displaySlogan() {
    let itemofArr = nameArr.slice(-1)[0];
    // console.log(itemofArr);
    let sloagnPhrase = sloganInputEL.value;
    sloganArr.push(sloagnPhrase);
    // console.log(sloganArr);
    sloganInputEL.value = '';
  
  
  
    for (const slogan of sloganArr) {
        const p = document.createElement('p');
        p.textContent = '';
        p.textContent = `${itemofArr ? `${itemofArr} :` : '' }  ${slogan}`;
    
        sloganEL.append(p);
    }

  
}

function clearingCatchPhrase(){ 
    while (sloganEL.firstChild) {
        sloganEL.removeChild(sloganEL.firstChild);
    }
}

function displayStats() {
    const currentState = createCountString(cityStatechange, skyStatechange, castleStatechange);
    statReportingEL.textContent = currentState;
}

