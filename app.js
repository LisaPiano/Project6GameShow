
//Define all parameters
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const missed = 0; 
let resetButton = document.getElementsByClassName('btn__reset')[0];
const overlay = document.getElementById('overlay');
let ul = document.getElementById('phrase');
let lis = document.getElementsByClassName('letter');
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

            if(li.textContent === ""){
                li.className = "space";
            }   else {
                li.className = "letter";
            }
         ul.appendChild(li);
     }  
 };
 addPhraseToDisplay(array);


  //Function that checks to see if a specific letter is in the selected phrase
  const checkLetter = (button) => {
    let match = null; 
    for(let i = 0; i <= lis.length; i++){
      let letter = lis[i]
      if(button.textContent === letter.textContent){
        lis[i].className = "show";
        match.textContent = button.textContent;
      } 
      return match; 
    };
  };
  

  qwerty.addEventListener('click', (e) => {
    if(e.target === button || e.target.className !== 'chosen'){
      e.target.className = 'chosen';
      console.log("adding class name");
    }
    
  });
 