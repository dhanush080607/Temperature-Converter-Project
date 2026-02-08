/*print
console.log("HI",`hello`,'came');

//alert box
window.alert("hi");
window.alert("pop");

//getting element by id and making text content
document.getElementById("myh1").textContent=`Hello`;
document.getElementById("myp").textContent='cameo';

//variable declaration
let x="a";
console.log(x);
console.log("hello my cgpa is",x);
console.log(`hai ${x}`);
console.log(typeof(x));

// document get id text content
let fullname = 'Dhanush';
let age = 18;
let student = true;
let food = 'Noodles';
document.getElementById("hp1").textContent = fullname;
document.getElementById("hp2").textContent = age;
document.getElementById("hp3").textContent = student;
document.getElementById("hp4").textContent = food;

//Easy way to ask user input through popup
let username;
username = window.prompt("What is your name");
console.log(username);
document.getElementById("hp4").textContent = username;

//Professional using html text box
let username;

document.getElementById("onsubmit").onclick = function(){
    username = document.getElementById("userid").value;
    console.log(username);
    document.getElementById("hp4").textContent = username;
}

// By using easy window prompt
let username;
username = window.prompt("Enter the username:");
document.getElementById("H1").textContent= username;

//by using html text box
let username;
document.getElementById("onsubmit"),onclick = function(){
    username = document.getElementById("userid").value;
    console.log(username);
    this.document.getElementById("H1").textContent = username;
}

//type conversion
let x, y, z;
x ;
y ;
z ;

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x,typeof(x),y,typeof(y),z,typeof(z));

//let variable value can be changed 
//but const is permanently fixed
const pi = 3.14;
let radius;
let circumference;

radius = Number(radius);
radius = window.prompt("Enter the radius:");
circumference = 2 * pi * radius;
console.log(circumference);

//By html box
const pi = 3.14;
let radius;
let circumference;
document.getElementById("onsubmit").onclick = function(){
    radius = Number(radius);
    radius = document.getElementById("radius").value;
    circumference = 2 * pi * radius;
    
    console.log(circumference,typeof(circumference));
    document.getElementById("H1").textContent = circumference;
}
HTML:
 <h1 id="H1">Welcome</h1>
    <label for="" >Type radius:</label>
    <input  id="radius" >
    <button id="onsubmit">submit</button>

// Increase Decrease Reset Through Buttons
<label for="" id="countlabel">0</label><br>
    <div id="container">
        <button id="dec" class="buttons">decrease</button>
    <button id="res" class="buttons">reset</button>
    <button id="ins" class="buttons">increase</button>
    </div>

const decreasebtn = document.getElementById("dec");
const resetbtn = document.getElementById("res");
const increasebtn = document.getElementById("ins");
const countlabel = document.getElementById("countlabel");
let count = 0;

increasebtn.onclick = function(){
    count++;
    countlabel.textContent = count; 
} 
resetbtn.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}
decreasebtn.onclick = function(){
    count--;
    countlabel.textContent = count;
}

//Math functions
Math.PI
Math.floor
Math.pow
Math.max
Math.min
Math.ceil
etc
console.log(Math.PI);

//random num
const min = 1;
const max = 100;
let x = Math.floor(Math.random()*(max-min))+min;
document.getElementById("Myh1").textContent=x;

//Roll of dice
<label for="" id="label1" class="labelroll"></label><br>
    <label for="" id="label2" class="labelroll"></label><br>
    <label for="" id="label3" class="labelroll"></label><br>
    <button id="roll">roll</button>

const roll = document.getElementById("roll");
const labelroll1 = document.getElementById("label1");
const labelroll2 = document.getElementById("label2");
const labelroll3 = document.getElementById("label3");
const min = 1;
const max = 100;

roll.onclick = function(){
    const x = Math.floor(Math.random()*(max-min)+min);
    const y = Math.floor(Math.random()*(max-min)+min);
    const z = Math.floor(Math.random()*(max-min)+min);
    labelroll1.textContent = x;
    labelroll2.textContent = y;
    labelroll3.textContent =z;

}
// using if and else
    <label for="" id="my">Enter your age:</label><br><br>
    <input type="" id="typ"><br><br>
    <button id="age">submit</button>
const label1 = document.getElementById("my");
const button1 = document.getElementById("age");
const arm = document.getElementById("typ");
let age;
button1.onclick = function(){
    age = Number(arm.value);
    if(age <= 0){
        label1.textContent = "you age cannot be less than 1 ";
    }
    else if(age >= 100){
        label1.textContent = "you are 100";
    }
    else if(age >= 18){
        label1.textContent = "you are eligible ";
    }
    else{
         label1.textContent = "you are not upto the age ";
    }
}
//Subscribe checkbox and radio with checked attribute
<input type="checkbox" name="subscribe" id="sub">
    <label for="sub">subscribe</label><br>

    <input type="radio" name="fire" id="vis">
    <label for="vis">visa</label><br>

    <input type="radio" name="fire" id="phone">
    <label for="phone">phonepe</label><br>

    <input type="radio" name="fire" id="pay">
    <label for="pay" >paypal</label><br>

    <button type="submit" id="onsubmit">submit</button>

    <p id="subspara"></p>
    <p id="monpara"></p>

const subscribe = document.getElementById("sub");
const visa = document.getElementById("vis");
const phonepe = document.getElementById("phone");
const paypal = document.getElementById("pay");
const submit = document.getElementById("onsubmit");
const para1 = document.getElementById("subspara");
const para2 = document.getElementById("monpara");

submit.onclick = function(){
    if(subscribe.checked){
        para1.textContent = "You are Subscribed👍";
    }
    else{
        para1.textContent = "You are not Subscribed👎";
    }
    if(visa.checked){
        para2.textContent = "You have visa 💳";
    }
    else if(phonepe.checked){
        para2.textContent = "you have phonepe 📱";
    }
    else if(paypal.checked){
        para2.textContent = "you have paypal 📱";
    }
    else{
        para2.textContent = "you need to select any one of them ⬆️";
    }
}
//ternary operator usage 
let age = window.prompt("Enter the age:");
let message = age>=18 ? "you are > 18 " : "You are < 18";
document.getElementById("my").textContent = message;

//Switch case
let x = "h";
let msg;
switch(true){
    case (x >= 90):
        msg = "A";
        break;
    case x >= 80:
        msg = "B";
        break;
    case x >= 70:
        msg = "C";
        break;
    case x >= 50:
        msg = "D";
        break;
    case x <= 49 || x >= 0:
        msg = "F";
        break;
    default:
        msg = "You cannot keep any other";
}
console.log(msg);

// String Handling
let x = "  Dhanush  ";
console.log(x.charAt(0));
console.log(x.indexOf("D"));
console.log(x.lastIndexOf("s"));
console.log(x.length);
console.log(x.trim());
console.log(x.toUpperCase());
console.log(x.toLowerCase());
console.log(x.repeat(8));
//Use another variable
y = x.startsWith(" ");
z = x.endsWith(" ");
a = x.includes(" ");
console.log(y,z, a);
console.log(x.replaceAll(" ",""));
console.log(x.padStart(12,"-"));
console.log(x.padEnd(12,"-"));

//String Slicing
 gmail=window.prompt("Enter Email: ");
let x = gmail.slice(0,gmail.indexOf("@"));
let y = gmail.slice(gmail.indexOf("@")+1);

document.getElementById("first").textContent = x;
document.getElementById("second").textContent = y;

//method chaining
username = window.prompt("Enter:");
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);

// AND OR NOT operators
const pass = document.getElementById("pass");
const temp = window.prompt("Enter temp:");
if(temp>0 && temp<=30){
    pass.textContent="Temperature is Good";
}
else if (temp>30 && temp<=100){
    pass.textContent="temp is bad";
}
else if(temp==273 || temp==0){
    pass.textContent="Temp refers to kelvin and celsius"
}
else {
    pass.textContent="Error";
}
const a = true;
if(!a){
    console.log("It is cloudy");
}
else{
    console.log("it is sunny");
}

// == compares values but === compares values and data types also
const PI = 3.14;
if(PI !== "ai"){
    console.log("Pi");
}
else{
    console.log("not pi");
}


//while loop and do-while loop
let username = "";
do{
    username = window.prompt("Enter Username:");
}while(username === "" || username === null)
console.log(`Hello ${username}`);

//Using while loop user authentication
let Loggedin = true;
let username;
let password;
while(Loggedin){
    username = window.prompt("Enter Username:");
    password = window.prompt("Enter Password:");

    
    if(username === "Dhanush" && password === "Dhanush"){
        console.log("Successfully Logged IN");
        break;
    }
    else{
        Loggedin = false;
        console.log("Invalid credentials !!!");
    }
}

//for loop
let i;
const lo = document.getElementById("loop");
for(i=10;i>0;i--){
    console.log(i);
    if(i==13){
    continue;
    }
    else if (i == 17){
    break;
    }
    else{
    console.log msg   
    }
}
console.log("Happy Newyear");

// game guess
const min = 1;
const max = 100;
const Value = Math.floor(Math.random()*(max-min)+min);

let attempts = 0;
let guess;
let run = true;


while(run){
    guess = window.prompt(`Guess a Number with in the range of ${min} - ${max} value:`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please Enter a Valid Number");
    }
    else if(guess < min || guess > max){
        window.alert("Please Enter a valid number in the range of 1 - 100");
    }
    else{
        attempts++;
        if(guess < Value){
            window.alert("TOO LOW! TRY AGAIN!");
        }
        else if(guess > Value){
            window.alert("TOO HIGH! TRY AGAIN!");
        }
        else{
            window.alert(`CORRECT😄 The Answer is ${Value}. It Took You ${attempts} attempts`);
            run = false;
        }
    }
}
//game
<div class="game-box">
    <h2>🎮 Number Guessing Game</h2>
    <p id="myp">Guess a number between 1 and 100</p>

    <input type="text" id="userinput" placeholder="Enter your guess">
    <button id="submit">Submit</button>
</div>
* {
    box-sizing: border-box;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

body {
    height: 100vh;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
    color: #fff;
}

.game-box {
    background: #111;
    padding: 30px 35px;
    border-radius: 14px;
    width: 350px;
    text-align: center;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
}

.game-box h2 {
    margin-bottom: 10px;
    font-size: 24px;
    letter-spacing: 1px;
}

.game-box p {
    margin: 15px 0;
    font-size: 16px;
    min-height: 24px;
}

input[type="text"] {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border-radius: 8px;
    border: none;
    outline: none;
    margin-bottom: 15px;
}

input[type="text"]:focus {
    box-shadow: 0 0 0 2px #00d4ff;
}

button {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    background: #00d4ff;
    color: #000;
    cursor: pointer;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
}

button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 212, 255, 0.5);
}

button:active {
    transform: scale(0.97);
}

button:disabled {
    background: #555;
    color: #aaa;
    cursor: not-allowed;
}

const min = 1;
const max = 100;
const value = Math.floor(Math.random() * (max - min + 1)) + min;

const inp = document.getElementById("userinput");
const sub = document.getElementById("submit");
const pass = document.getElementById("myp");

let attempts = 0;
let run = true;

sub.onclick = function () {
    if (!run) return;

    let guess = Number(inp.value);

    if (isNaN(guess)) {
        pass.textContent = "❌ Please enter a valid number";
    }
    else if (guess < min || guess > max) {
        pass.textContent = "⚠️ Enter a number between 1 and 100";
    }
    else {
        attempts++;

        if (guess < value) {
            pass.textContent = "⬇️ Too low! Try again";
        }
        else if (guess > value) {
            pass.textContent = "⬆️ Too high! Try again";
        }
        else {
            pass.textContent = `🎉 CORRECT! The answer was ${value}. Attempts: ${attempts}. You Need To Refresh To Play Again.`;
            run = false;
            inp.disabled = true;
        }
    }

    inp.value = "";
};
//create function
function Birth(){
    console.log("Happy");
    console.log("Birthday");
}
Birth();
//arguments
function Details(x, y){
    console.log(`Hello, I am ${x}, My age is ${y}`);
}
Details("Dhanush",18);
//return 
function add(x, y){
    return x+y;
}
console.log(add(2,3));
//Even or odd
function check(x){
    if(x % 2 === 0){
        return (`${x} is even`);
    }
    else{
        return (`${x} is odd`);
    }
}
console.log(check(2));
//function of includes
function valid(x){
    if(x.includes("@")){
        return (`${x} is valid`);
    }
    else{
        return (`${x} is not valid`);
    }
}
console.log(valid("tronold@gmail.com"));
console.log(valid("pepergmail.com"));
*/
//Function converter
const textbox = document.getElementById("textbox");
const fahrenheit = document.getElementById("fahrenheit");
const celsius = document.getElementById("celsius");
const result = document.getElementById("result");
let temp;

function convert(){
    
    if(fahrenheit.checked){
        temp = textbox.value;
        temp = temp * 9 / 5  + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if(celsius.checked){
        temp = textbox.value;
        temp = (temp-32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C";
    }
    else{
        result.textContent = "Select a unit";
    }

}
