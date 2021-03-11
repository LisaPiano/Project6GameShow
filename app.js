//run function playGame
function playGame(){
  
//declare universal variables
const qwerty = document.getElementById('qwerty');
let resetButton = document.getElementsByClassName('btn__reset')[0];
const overlay = document.getElementById('overlay');
let ul = document.getElementById('phrase');
let timesLost = 0;// number of incorrect guesses; increments

//event listener for reset button that initially removes the overaly 
resetButton.addEventListener('click', () => {
  overlay.style.display = 'none';
});

 //create new button that says RESET that is invisible until the game is won or lost
 let newButton = document.createElement('button');//create new button that says RESET
 newButton.className = 'newButton';
 newButton.innerHTML = 'RESET';
 let div = document.getElementsByTagName('div')[1];
 div.appendChild(newButton);   
 newButton.style.display = 'none';
 
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

//Function that takes an array of phrases as a parameter, and then returns a random 
//phrase from the array using a random number generator
const getRandomPhraseAsArray = (array) => {
  let num = Math.floor(Math.random() * array.length); 
  return(array[num]);
};
let array = getRandomPhraseAsArray(phrases);

//Function that takes any array and returns it as a string of chars
 let addPhraseToDisplay = (array) => {
  for (let i = 0; i < array.length; i++){
  let li = document.createElement('li');
      li.textContent = array.charAt(i);

        if(li.textContent ===" "){
            li.className += "space";
        } else {
            li.className += "letter";
            li.style.backgroundColor = "purple";
        };
      ul.appendChild(li);
  }//end for  
 };//end function
 addPhraseToDisplay(array);

 //Function that checks to see if a specific letter is in the selected phrase  
let checkLetter = (button) => {
  let isMatch = null;
  const phraseLetters = document.querySelectorAll('li');//variable for all the letters in the array phrase
  for (i=0; i < phraseLetters.length; i++) {
    if (button === phraseLetters[i].textContent.toLowerCase()) {
      //Here, add class .show and transition styles
      phraseLetters[i].classList.add('show');
      phraseLetters[i].style.color = 'yellow';
      phraseLetters[i].style.transition = '2s'; 
      phraseLetters[i].style.borderRadius = '50%';
      isMatch = true;
    } //end if
  }//end for

  return isMatch;
};//end checkLetter

qwerty.addEventListener('click', event => {
  if (event.target.tagName === "BUTTON") {
    event.target.className = 'chosen';
    event.target.disabled = true;
    const match = checkLetter(event.target.textContent.toLowerCase());
    if (match === null) {
      timesLost++;
      let heartNumber = 5-timesLost; 
      const heart = document.querySelectorAll('img');
      heart[heartNumber].setAttribute('src', "images/lostHeart.png");
    };//end second if 
  }; //end first if

    //function to check if the player has won or lost---every time a letter is chosen
    const checkWin = () => {
      const phraseLetters = document.querySelectorAll('.letter');
      const show = document.querySelectorAll('.show');
      
      //If the player has won
        if(phraseLetters.length === show.length){
          overlay.classList.add('win');
          const winningHeadline = document.querySelector('.title');
          winningHeadline.innerHTML = 'Congratulations! YOU WON!';
          overlay.style.display = 'flex';
          resetButton.style.display = 'none';//Hide button that says START
          newButton.style.display = 'flex';

          // ELSE IF the player has lost
        } else if (timesLost > 4){
          overlay.classList.add('.lose');
          const winningHeadline = document.querySelector('.title');
          winningHeadline.textContent = 'Sorry, YOU LOST! Please try again!';
          overlay.style.display = 'flex';
          resetButton.style.display = 'none';//Hide button that says START
          newButton.style.display = 'flex';
        }; //end elseIF
      }; //end checkWin
          
        //run checkWin
        checkWin();
}); //end eventListener on the keys of the keyboard
    
      //When reset button is clicked, 
      newButton.addEventListener('click', () => {
      overlay.style.display = 'none';//remove overlay
      timesLost = 0; //resetting timesLost to 0
      heartNumber = 5-timesLost; //resetting heartNumber to 5
      
        //reset live-heart images
        const heart = document.querySelectorAll('img');
        for(let i =0; i < 5; i++){
        heart[i].setAttribute('src', "images/liveHeart.png");
        };//end for
        
        //reset key classes to '' empty string
        let keys = document.getElementsByTagName('BUTTON');
        for(let i = 0; i <= 26; i++){
          if(keys[i].className === 'chosen'){
            keys[i].className = ' ';
            keys[i].disabled = false; 
          }//end if
        };//end for

        //remove phrase
        let main = document.querySelector('.main-container');
        main.removeChild(phrase);

        //create a new phrase div section with UL added
        let resetPhrase = document.createElement('div');
        resetPhrase.setAttribute('id', 'phrase');
        resetPhrase.className = "section"; 
        main.insertBefore(resetPhrase, qwerty);
        let ul = document.createElement('ul');
        resetPhrase.appendChild(ul);
        
        //generate a new phrase
        let newArray = getRandomPhraseAsArray(phrases);
        console.log(newArray);
      
        //add new phrase to the resetPhrase Div
        //addPhraseToDisplay(newArray);---WHY WILL THIS NOT WORK???? I feel like I should just be able to
        //run this function, but it doesn't work! Instead, I need to hardcode the following...
        
        for (let i = 0; i < newArray.length; i++){
        let li = document.createElement('li');
            li.textContent = newArray.charAt(i);
      
              if(li.textContent ===" "){
                  li.className += "space";
              } else {
                  li.className += "letter";
                  li.style.backgroundColor = "purple";

              };
            ul.appendChild(li);
        };

  });//end reset event listener
}; //end playGame function

//call playGame function
playGame();

                  
            
     

  



    
