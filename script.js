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

document.getElementById("startCountdown").addEventListener("click", () => {
    const birthdayInput = birthdayInput.value;
    if (birthdayInput === "") return;

    const birthday = new Date(birthdayInput);
    const now = new Date(); 

    //This code is for when the birthday is not in thsi year
    if(birthdayInput < now){
        birthdayInput.setFullYear(now.getFullYear() + 1);
    }

    document.getElementById("secondDiv").style.display = "none";
    document.getElementById("countdownSection").style.display = "block";

    function updateCountdown(){
        const now = new Date();
        const diff = birthdayInput - now;

        if (diff <= 0){
            countdownText.textContent = "Happy Birthday"
            clearInterval(timer);
            return;
        }

        const days = Math.floor(diff /(1000 * 60 * 60 * 24));
        const hours = Math.floor((diff /(1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        countdownText.textContent = `${days}d ${hours}h ${minutes}m ${sceonds}s until your birthday! ${userName}`;
    }
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
})