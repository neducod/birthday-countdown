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

//Code to make container disappear
let labelContanier;

function myButton(){
    const name = document.getElementById("myText").value;
    if (name.trim() !== ""){
        document.getElementById("label-contanier").classList.add("hidden");
        document.getElementById("wraPer").classList.add("hidden");
        document.getElementById("welcomeText").textContent = `Hello, ${name}!`;
    }
    else{
        alert("Please enter your name.");
    }
}












window.onload = function(){
    const audio = document.getElementById('audio');
    audio.style.display = 'block';

    setTimeout(() =>{
        audio.style.display = 'none';
    })
}