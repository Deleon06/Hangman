//create a list with the 40 words that can be guessed
var words = ["PRINCE", "WAR", "DEATH", "FAMINE", "BEAST", "CONQUEST", "SWORD", "BOW", "BEAST", "WILD", "FIRE", "FOUR", "HADES", "LAMB", "BLACK", "WHITE", "RED", "PALE", "EARTH", "DESTROY", "BLACK", "JOHN", "SEAL", "SON", "HORSE", "BOW", "CROWN", "DEATH", "OIL", "WINE", "HADES", "QUAKES", "STAR", "SCROLL", "SKY", "AIR", "GOD", "BLUNT", "SCYTHE"]

var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
//create the rules, can only pick 26 letters, cannot pick the same letter twice, if guess incorrectly -1 chance, if guess correctly 
//Use key events to listen for the letters that your players will type.

var start = true;
var randNum = Math.floor(Math.random() * words.length);
var currentword = words[randNum];
var underscore = [];
var lettersalreadyguessed = [];
var correctletter = [];
var c = 10;


remaining.innerHTML = c;

function generateUnderscore() {
	for (var i = 0; i < currentword.length; i++) { 
		underscore.push('_');
	}
	return underscore;
}
	word.innerHTML = generateUnderscore();
	console.log(currentword)

document.onkeyup = function(event) {
	var userGuess = event.key;
	// if userGuess is right 
	if (currentword.indexOf(userGuess) > -1 ) {
	// add to the correct letter array
		correctletter.push(userGuess);
	// replace underscore with correct letter
		underscore[currentword.indexOf(userGuess)] = userGuess;
		word.innerHTML = underscore;
		//if (underscore = currentword) {
		//alert("You Win!");	

		}else if  
			(currentword.indexOf(userGuess) === alphabet.indexOf(userGuess)){ 
					
		
		
		console.log(lettersalreadyguessed);

		}else {
			lettersalreadyguessed.push(userGuess);
				
			console.log(lettersalreadyguessed);
			c = c - 1;
			remaining.innerHTML = c;
			guess.innerHTML = lettersalreadyguessed;
				if (c = 0){
					alert("You Lose");}
				}
			};




		


	
				