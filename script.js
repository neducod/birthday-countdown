/*let userName;

document.getElementById("myButton").addEventListener("click", function(){
    const name = document.getElementById("myText").value.trim();

    if(name == ""){
        alert("Please enter your name");
    }
    else{

        document.getElementById("myButton").addEventListener("click", function(){
            document.getElementById("wrapPer").style.display = "block";
        })
        
        document.getElementById("myButton").onclick = function(){
            userName = document.getElementById("myText").value;
            document.getElementById("firstText").textContent = `Hey  ${userName} , let's countdown to your birthday 🧁𐙚`
        }
    }
})

*/
let userName;

const myText = document.getElementById("myText");
// const myButton = document.getElementById("myButton");
const secondDiv = document.getElementById("secondDiv");
const firstText = document.getElementById("firstText");
const birthdayInput = document.getElementById("birthdayInput");
const startCountdown = document.getElementById("startCountdown");
const countdownSection = document.getElementById("countdownSection");
const countdownText = document.getElementById("countdownText");



document.getElementById("myButton").addEventListener("click", () => {
    const userName = nameInput.value.trim();
    if(userName){
        greeting.textContent = `Hi ${userName}!`;
        document.getElementById("first-div").style.display = "none";
        document.getElementById("secondDiv").style.display = "block";
    }
});