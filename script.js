/*
let userName;

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



const myText = document.getElementById("myText"); 
const firstText = document.getElementById("firstText");
const birthdayInput = document.getElementById("birthdayInput"); 
const countdownText = document.getElementById("countdownText");


document.getElementById("myButton").addEventListener("click",() => {
    const userName = myText.value.trim();
    if(userName){
        firstText.textContent = `Hi ${userName}`;
        document.getElementById("secondDiv").style.display = "block";
        document.getElementById("firstDiv").style.display = "none";
    }
});