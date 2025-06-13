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
        firstText.textContent = `Hi ${userName} 🌼✨`;
        document.getElementById("secondDiv").style.display = "block";
        document.getElementById("firstDiv").style.display = "none";
    }
});

document.getElementById("startCountdown").addEventListener("click", () => {
    const birthdayValue = birthdayInput.value;
    if (birthdayValue === "") return;

    const birthday = new Date(birthdayValue);
    const now = new Date(); 

    //This code is for when the birthday is not in thsi year
    if(birthday < now){
        birthday.setFullYear(now.getFullYear() + 1);
    }

    document.getElementById("secondDiv").style.display = "none";
    document.getElementById("countdownSection").style.display = "block";

    function updateCountdown(){
        const now = new Date();
        const diff = birthday - now;




        //For random images when the countdown finishes
        const images = [
            "images/birthday.jpeg",
            "images/birthday2.jpeg"
        ];

        const audio = new Audio("audio/audio.mp3");

        if (diff <= 0){


            const randomImage = images[Math.floor(Math.random() * images.length)];
            const birthdayImage = document.getElementById("birthdayImage");
            birthdayImage.src = randomImage;
            birthdayImage.style.display = "block"

            const countdownText = document.getElementById("countdownText");
            countdownText.innerHTML = 'Happy Birthday <br> <img src="${randomImage}" style = "max-width: 80px; margin-top: 10px;" '
            audio.play();
            clearInterval(timer);
            return;



            // countdownText.textContent = "Happy Birthday"
            // const countdownText = document.getElementById("countdownText");
            // // countdownText.textContent = "Happy Birthday"
            // clearInterval(timer);
            // return;
        }

        const days = Math.floor(diff /(1000 * 60 * 60 * 24));
        const hours = Math.floor((diff /(1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        countdownText.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s until your birthday!`;
    }
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
});

confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
});

document.getElementById("shareBtn").addEventListener("click", () => {
    if (navigator.share) {
        navigator.share({
            title: "🎉 Happy Birthday!",
            text: "My birthday countdown just ended!",
            url: window.location.href
        });
    } else {
        alert("Sharing is not supported in this browser.");
    }
});