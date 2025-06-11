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

window.onload = function(){
    const audio = document.getElementById('audio');
    audio.style.display = 'block';

    setTimeout(() =>{
        audio.style.display = 'none';
    })
}
/*
//POP UP CODE
window.onload = function () {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';

    // Hide after 5 seconds (5000 milliseconds)
    setTimeout(() => {
      popup.style.display = 'none';
    }, 5000);
  };
*/