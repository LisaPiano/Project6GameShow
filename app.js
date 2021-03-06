
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let resetButton = document.getElementsByClassName('btn__reset')[0];
const overlay = document.getElementById('overlay');
let ul = document.getElementById('phrase');
let button = document.querySelector('button');
let li = document.createElement('li');

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
  //let checkLetter = (button) => {
    
const phraseLetters = document.querySelectorAll('.letter');


let timesLost = 0;
const checkLetter = (button) => {
  let isMatch = null;
  
  
  for (i=0; i < phraseLetters.length; i++) {
    if (button === phraseLetters[i].textContent.toLowerCase()) {
      phraseLetters[i].classList.add('show');
      isMatch = true;
    }
    
  }

  return isMatch;
};

qwerty.addEventListener('click', event => {
  if (event.target.tagName === "BUTTON") {
    event.target.className = 'chosen';
    event.target.disabled = true;
    const match = checkLetter(event.target.textContent.toLowerCase());
    if (match === null) {
      timesLost++;
      let heartNumber = 5-timesLost; 
      console.log(heartNumber);
      const heart = document.querySelectorAll('img');
      heart[heartNumber].setAttribute('src', "images/lostHeart.png");
    };
    // checkWin() function call goes here
  



 // checkWin() function call goes here
    const checkWin = () => {
    const phraseLetters = document.querySelectorAll('.letter');
    const show = document.querySelectorAll('.show');
    let header = document.querySelectorAll('.title');

      if(phraseLetters.length === show.length){
        overlay.classList.add('win');
        const winningHeadline = document.querySelector('.title');
        winningHeadline.innerHTML = 'Congratulations! YOU WON!';
        overlay.style.display = 'flex';
        let newButton = document.createElement('button');
        newButton.innerHTML = 'reset';
        let div = document.getElementsByTagName('div')[1];
        div.appendChild(newButton)
      } else if (timesLost > 4){
        overlay.classList.add('.lose');
        const winningHeadline = document.querySelector('.title');
        winningHeadline.textContent = 'Sorry, YOU LOST! PLease try again!';
        overlay.style.display = 'flex';
        let newButton = document.createElement('button');
        newButton.innerHTML = 'reset';
        let div = document.getElementsByTagName('div')[1];
        div.appendChild(newButton)
        
      };//end elseif
  };//end function
  checkWin();
}
});

  


  
  
  

