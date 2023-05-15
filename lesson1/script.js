//You can initiate global variables here
//Global variables mean they exist to be accessed from the browser itself
//To test, open the page on a browser, go to F12 > Console, then type 'test_string'
var score = 0;
var test_string = "this is a test string"; 

//Write code here to increase the score, then update the HTML text
function increaseScore(){
  //This is how you can print in the developer console in the browser
  //console.log() is very useful for debugging your code
  //Press F12 > Console in Chrome and press the Increase score button
  console.log('hello');
  console.log(test_string); 
}


// To show or hide the mole, you need first to be able to "select" it
// Read: https://www.w3schools.com/jsref/met_document_queryselector.asp
// Take note the difference between document.querySelector() and document.querySelectorAll()
// Then look at your HTML and see how you can select the <div class="hole"></div>

// THEN, you have to adjust the visibility of the mole based on if you are showing or hiding it
// Read: https://www.w3schools.com/jsref/prop_style_visibility.asp

//Write code here to show the mole
function showMole() {
  
}

//Write code here to hide the mole
function hideMole() {

}