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
            document.getElementById("firstText").textContent = `Hey  ${userName} , do you want to see how long until your next birthday?`
        }
/*
        document.getElementById("myButton").addEventListener("click", function(){
            document.getElementById("popup").style.display = "block";
        })*/
    }
})


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