const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');
const timeL=document.getElementById('time-left');


// List of words for game
const words = ['unbeatable','completed','hello','welcome','superficial','courtship','constitution',
'punch',
'abolish',
'technology',
'residence',
'rational',
'crisis',
'result',
'overeat',
'material',
'quality',
'charge',
'stain',
'glasses',
'flat',
'pair',
'portion',
'print',
'site',
'banish',
'project',
'replacement',
'queen',
'inspector',
'faithful',
'carpet',
'complain',
'copper',
'comprehensive',
'enjoy',
'border',
'diet',
'facade',
'fly',
'copyright',
'strange',
'mix',
'want',
'drawer',
'decrease',
'dismiss',
'forum',
'opposition',
'forest',
'objective',
'professor',
'trap',
'team']
// Init word
let randomWord;


// Init score
let score = 0;


// Init time
let time = 10;




// set difficulty to value in ls or medium
let difficulty = localStorage.getItem('difficulty') !== null ?
	localStorage.getItem('difficulty') : 'easy';


// set difficulty select value



// Set difficulty select value
difficultySelect.value =
 localStorage.getItem('difficulty') !== null
   ? localStorage.getItem('difficulty')
   : 'easy';


// Focus on text field then timer will start
function timerstart(){
  if(time>=0){
    setInterval(updateTime,1000);
  }
}


// Generate random word from array
function getRandomWord() {
 return words[Math.floor(Math.random() * words.length)];
}




// Add word to DOM
function addWordToDOM() {
 randomWord = getRandomWord();
 word.innerHTML = randomWord;
}




// Update score
function updateScore() {
 score++;
 scoreEl.innerHTML = score;
}

// Update time
function updateTime() {
 time--;
 timeEl.innerHTML = time + 's';
 if(time <= 3){
  timeL.classList.add("Beat");
 }
 else{
  timeL.classList.remove("Beat");
 }
 if (time === 0) {
   clearInterval(setInterval(updateTime,1000));
   // end game
   gameOver();
 }
 
}

// Game over, show end screen
function gameOver() {
Refresh=document.getElementById("Rbtn");
Refresh.addEventListener("click",function(){
  location.reload();
})
Quit=document.getElementById("Qbtn");
Quit.addEventListener("click",function(){
  window.close();
})


document.getElementById("Score").innerHTML =`${score}`
document.getElementById("star-game-container").style.display = "none";
document.getElementById("end-game-container").style.display = "block";
 
}
addWordToDOM();

// Event listeners


// Typing
text.addEventListener('input', e => {
 const insertedText = e.target.value;
 if (insertedText === randomWord) {
   addWordToDOM();
   updateScore();


   // Clear
   e.target.value = '';


   if (difficulty === 'hard') {
     time += 2;
   } else if (difficulty === 'medium') {
     time += 3;
   } else {
     time += 5;
   }


   updateTime();
 }
});




// Settings btn click
settingsBtn.addEventListener('click', () => settings.classList.toggle('hide'));



// Settings select
settingsForm.addEventListener('change', e => {
 difficulty = e.target.value;
 localStorage.setItem('difficulty', difficulty);
});
document.getElementById("star-game-container").style.display = "none";
document.getElementById("end-game-container").style.display = "block";