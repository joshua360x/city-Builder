// import functions and grab DOM elements
import { createCountString } from '../utils.js';


const cityEL = document.querySelector('.img-city')
const skyEL = document.querySelector('.img-sky')
const castleEL = document.querySelector('.img-castle')
const cityDropDown = document.querySelector('#city-dropdown')
const skyDropDown = document.querySelector('#sky-dropdown')
const castleDropDown = document.querySelector('#castle-dropdown')
const sloganButtonEL = document.querySelector('.sloganBtn')
const sloganInputEL = document.querySelector('.sloganInput')
const sloganEL = document.querySelector('.slogan')
const statReportingEL = document.querySelector('.stat-Reporting')

// let state
let sloganArr = [];
let cityStatechange = 0;
let skyStatechange = 0;
let castleStatechange = 0;


// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state


  cityDropDown.addEventListener('change', () => {
    cityStatechange++
    let cityChoosen = cityDropDown.value
    console.log(cityChoosen);
    cityEL.style.backgroundImage = `url("./assets/${cityChoosen}.jpg")`
    displayStats()
  })

  skyDropDown.addEventListener('change', () => {
    skyStatechange++
    let skyChoosen = skyDropDown.value
    console.log(skyChoosen);
    skyEL.style.backgroundImage = `url("./assets/${skyChoosen}-skyline.jpg")`
    displayStats()

  })

  castleDropDown.addEventListener('change', () => {
    castleStatechange++
    let castleChoosen = castleDropDown.value
    console.log(castleChoosen);
    castleEL.style.backgroundImage = `url("./assets/${castleChoosen}-castle.jpg")`
    displayStats()

  })

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

sloganButtonEL.addEventListener('click', () => {
  clearingCatchPhrase()
  displaySlogan()
})






function displaySlogan() {
  let sloagnPhrase = sloganInputEL.value
  sloganArr.push(sloagnPhrase)
console.log(sloganArr);
  sloganInputEL.value = ''
  for (const slogan of sloganArr) {
    const p = document.createElement('p');
    p.textContent = '';
    p.textContent = slogan;

    sloganEL.append(p)

  }
}

function clearingCatchPhrase(){ 
  while (sloganEL.firstChild) {
      sloganEL.removeChild(sloganEL.firstChild);
  }
}

function displayStats() {
  const currentState = createCountString(cityStatechange, skyStatechange, castleStatechange)
  statReportingEL.textContent = currentState;

}

