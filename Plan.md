## HTML Set Up

- 3 Divs
  - Why? to divide the sections of the page
  - How? div * 3

- Dropdown menu (3 items)
  - Why? to select the image we want to be displayed 
  - How? label select and option

- 3 images 
  - Why? to give us variety on what images to choose plus it helps us know if the code is working 
  - How? img src=""

- Input value 
  - Why? so we can keep track of the users input value for the slogan
  - How? input tag

- Submit btn
  - Why? to hand over the user information (more on this with javascript)
  - How? button tag

- State MGMT
  - Why? for the users and the developer to see that state is being changed
  - How? with javascript 



  ## Event Listeners

change for the dropdown menu
  - Why? The image will change according to the value of the dropdown menu
  - How? use the value from the dropdwon to dynmaically change the iumage or background image of the dropdown

count will increment 
  - Why? This important when managing the State 
  - How? this will continue to be on change, so each time the dropdown is changed then the count will increment

  click 
   - Why? Obtain the slogan from the input value and push it to array
   - How? done though addEventListener


update the DOM 
 - loop through array and clear out any slogans
 - append any new slogans (avoid double appending)
