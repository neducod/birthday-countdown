let countdownInterval;

function startCountdown() {
  const inputValue = document.getElementById("birthdayInput").value;
  if (!inputValue) {
    alert("Please select your birthday date and time.");
    return;
  }

  const [datePart, timePart] = inputValue.split("T");
  const [year, month, day] = datePart.split("-").map(Number);
  const [hour, minute] = timePart.split(":").map(Number);

  const now = new Date();
  let birthday = new Date(now.getFullYear(), month - 1, day, hour, minute);

  if (birthday < now) {
    birthday.setFullYear(now.getFullYear() + 1);
  }

  clearInterval(countdownInterval);

  countdownInterval = setInterval(() => {
    const current = new Date();
    const diff = birthday - current;

    if (diff <= 0) {
      clearInterval(countdownInterval);
      showBirthdayMessage();
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("countdown").textContent =
      `${days}d ${hours}h ${minutes}m ${seconds}s until your birthday!`;
  }, 1000);
}
/*
function showBirthdayMessage() {
  const messages = [
    "🎉 Happy Birthday! Have an amazing day!",
    "🎂 Wishing you lots of cake and joy!",
    "🎈 It's your special day! Celebrate big!",
    "🌟 You’re a year more awesome!",
    "🎁 Surprise! Happy Birthday!"
  ];

  const msg = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("countdown").textContent = "";
  document.getElementById("message").textContent = msg;

  const shareBtn = document.getElementById("shareBtn");
  if (navigator.share) {
    shareBtn.style.display = "inline-block";
  }
}
*/
function showBirthdayMessage() {
    const messages = [
      "🎉 Happy Birthday! Have an amazing day!",
      "🎂 Wishing you lots of cake and joy!",
      "🎈 It's your special day! Celebrate big!",
      "🌟 You’re a year more awesome!",
      "🎁 Surprise! Happy Birthday!"
    ];

    const msg = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("countdown").textContent = "";
    document.getElementById("message").textContent = msg;

    const shareBtn = document.getElementById("shareBtn");
    if (navigator.share) {
      shareBtn.style.display = "inline-block";
    }
}


function share() {
  navigator.share({
    title: 'Happy Birthday!',
    text: '🎉 It’s my birthday today! Join me in celebrating! 🎂',
    url: window.location.href
  }).catch(err => console.error("Share failed:", err));
}



/*

function startCountdown() {
    const input = document.getElementById("birthdayInput").value;
    if (!input) {
      alert("Please select your birthday date and time.");
      return;
    }
  
    const now = new Date();
    const birthday = new Date(input);
  
    // If birthday already passed this year, move it to next year
    if (birthday < now) {
      birthday.setFullYear(now.getFullYear() + 1);
    }
  
    clearInterval(countdownInterval);
  
    countdownInterval = setInterval(() => {
      const current = new Date();
      const diff = birthday - current;
  
      if (diff <= 0) {
        clearInterval(countdownInterval);
        showBirthdayMessage();
        return;
      }
  
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
  
      document.getElementById("countdown").textContent =
        `${days}d ${hours}h ${minutes}m ${seconds}s until your birthday!`;
    }, 1000);
  }
  */

/*
let countdownInterval;

    function startCountdown() {
      const input = document.getElementById("birthdayInput").value;
      if (!input) {
        alert("Please select your birthday date.");
        return;
      }

      const now = new Date();
      let birthday = new Date(input);
      birthday.setFullYear(now.getFullYear());

      // If birthday already passed this year, set for next year
      if (birthday < now) {
        birthday.setFullYear(now.getFullYear() + 1);
      }

      clearInterval(countdownInterval); // clear any previous countdowns

      countdownInterval = setInterval(() => {
        const current = new Date();
        const diff = birthday - current;

        if (diff <= 0) {
          clearInterval(countdownInterval);
          showBirthdayMessage();
          return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        document.getElementById("countdown").textContent = 
          `${days}d ${hours}h ${minutes}m ${seconds}s until your birthday!`;

      }, 1000);
    }

    function showBirthdayMessage() {
      const messages = [
        "🎉 Happy Birthday! Have an amazing day!",
        "🎂 Wishing you lots of cake and joy!",
        "🎈 It's your special day! Celebrate big!",
        "🌟 You’re a year more awesome!",
        "🎁 Surprise! Happy Birthday!"
      ];

      const msg = messages[Math.floor(Math.random() * messages.length)];
      document.getElementById("countdown").textContent = "";
      document.getElementById("message").textContent = msg;

      const shareBtn = document.getElementById("shareBtn");
      if (navigator.share) {
        shareBtn.style.display = "inline-block";
      }
    }

    function share() {
      navigator.share({
        title: 'Happy Birthday!',
        text: '🎉 It’s my birthday today! Join me in celebrating! 🎂',
        url: window.location.href
      }).catch(err => console.error("Share failed:", err));
    }


*/