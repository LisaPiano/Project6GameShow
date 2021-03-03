
//Define all parameters
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const missed = 0; 
let resetButton = document.getElementsByClassName('btn__reset')[0];
const overlay = document.getElementById('overlay');
let ul = document.getElementById('phrase');


let button = document.querySelector('button');

//event listener for reset button that removes the overaly 
resetButton.addEventListener('click', () => {
    overlay.style.display = 'none';
  });

  //array of phrases to be used in the game
  const phrases = [
    "To be or not to be",
    "An apple a day keeps the doctor away",
    "Paint me like one of your French Girls",
    "What goes up must come down",
    "Luke I am your father",
    "With great power comes great responsibility",
    "All you need is love"
  ];

  //Function that takes an array of phrases as a parameter, and then returns a random phrase from the array using a random number generator
  const getRandomPhraseAsArray = (array) => {
    let num = Math.floor(Math.random() * array.length); 
    let charArray = [];
    return(array[num]);
  };
  let array = getRandomPhraseAsArray(phrases);

//Function that takes any array and returns it as a string of chars
 const addPhraseToDisplay = (array) => {
     for (let i = 0; i < array.length; i++){
         let li = document.createElement('li');
         li.textContent = array.charAt(i);

            if(li.textContent ===" "){
                li.className += "space";
            } else {
                li.className += "letter";
            }
         ul.appendChild(li);
     }  
 };
 addPhraseToDisplay(array);


  //Function that checks to see if a specific letter is in the selected phrase
  var checkLetter = (clickButton) => {
  let list = document.querySelectorAll('li');
  var match = null; 
    for(let i = 0; i <= list.length; i++){
     if(clickButton.textContent.toLowerCase() === list[i].textContent.toLowerCase()){
        list[i].className += ' show';
        match = button.textContent; 
      } 
    };
    console.log(match); 
 };
  

  
  
  //detect click, and if button is clicked and hasn't been chosen yet,
  //assign class name and variable of "letter"
  qwerty.addEventListener('click', (e) => {
    if(e.target === button || e.target.className !== 'chosen'){
      let button = e.target;
      button.className += 'chosen';
      button.disabled = true; 
      let result = checkLetter(button);
    } else {
      button.disabled = false; 
    };
   });
