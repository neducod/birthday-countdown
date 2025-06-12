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



const nameInput = document.getElementById("nameInput");
    const birthdayInput = document.getElementById("birthdayInput");
    const greeting = document.getElementById("greeting");
    const countdownText = document.getElementById("countdownText");

    document.getElementById("submitName").addEventListener("click", () => {
      const name = nameInput.value.trim();
      if (name) {
        greeting.textContent = `Hi ${name}! When is your birthday? 🎉`;
        document.getElementById("nameSection").style.display = "none";
        document.getElementById("birthdaySection").style.display = "block";
      }
    });

    document.getElementById("startCountdown").addEventListener("click", () => {
      const birthday = new Date(birthdayInput.value);
      const now = new Date();
      if (birthdayInput.value === "") return;

      // Set birthday year to this year or next
      birthday.setFullYear(now.getFullYear());
      if (birthday < now) {
        birthday.setFullYear(now.getFullYear() + 1);
      }

      document.getElementById("birthdaySection").style.display = "none";
      document.getElementById("countdownSection").style.display = "block";

      function updateCountdown() {
        const now = new Date();
        const diff = birthday - now;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        countdownText.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s until your birthday! 🎂`;

        if (diff <= 0) {
          countdownText.textContent = "🎉 Happy Birthday! 🎉";
          clearInterval(timer);
        }
      }

      updateCountdown();
      const timer = setInterval(updateCountdown, 1000);
    });