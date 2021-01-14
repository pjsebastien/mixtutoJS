//********** Auto write text ******/

//define the text whose going on page
const text = "💻 Welcome to my new JavaScript \nproject !\nIf you click on the button on bottom, \nBackground Color will change !!!\nIf you click on top button\n Hearts will rain ! "
//Initialisation of the index to 0
let index = 0;

//WriteText function will be called for each character
function writeText(){
    //With slice we separate each character of the string
    //Slice start at 0 , and goes to index 
    document.querySelector("#text").innerText = text.slice (0, index);
    //Each time function is called , index rise +1
    index++;
    //If index is as long as the string, it restart to 0.
    if(index >text.length -1){
        index=0;
    }
}

//Function will be called every 0.07second
setInterval(writeText, 70)



//*****Change background color */

//Select button on html
const btn = document.querySelector("#btn");

//Each time we click on, function will be called
btn.addEventListener("click", ()=> {
    //For the background style of body, randomBg function is applied
    document.body.style.background = randomBg();
});
//We define randomBg function
function randomBg(){
    // It returns random hsl property of CSS.
    return `hsl(${Math.floor(Math.random()*360)}, 100%, 50%)`;
}

//************Function raining hearts*******

//select the button on html
const btn2 = document.querySelector("#btn2");

//define the function to create heart
function createHeart (){
    //we create a variable with a div a CSS class and we had the heart symbol
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "💜";
    //We add a style to add a new position by random from left in viewport width
    heart.style.left = Math.random() * 100 + "vw";
    //We change the speed of some hearts by random
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    
    //We put the heart insine the html body
    document.body.appendChild(heart);
    //every 5s we remove the hearts
    setTimeout(()=>{
        heart.remove();
    },5000);   
}
//Creation of the function calling by button onclick in html
function rain (){
    //every 03s function createHeart is called
    return setInterval(createHeart, 300);    
}