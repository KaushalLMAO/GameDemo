// datas and DOM elements
let sec1 = document.getElementById("one");
let sec2 = document.getElementById("two");
let sec3 = document.getElementById("three");
let cash = document.querySelector(".money");
let main = document.querySelector(".main");
let body = document.getElementById("body");
let header = document.querySelector(".header");
let cash_value = 300; // cash value
let ads = document.querySelector("#ads");
let remarks = document.querySelector("#remarks");
let remark2 = document.querySelector("#remark2");
cash.textContent = `Cash : $${cash_value}`;
const symbols = [
  "👽",
  "🐱‍🐉",
  "💀",
  "💯",
  "🐱‍👤",
  "⭐",
  "🤬",
  "🔥",
  "🎁",
  "🎂",
  "🐱‍🏍",
  "🤑",
];
let spinbtn = document.getElementById("spin");

// Flag to prevent game logic during ad
let isAdPlaying = false;

// more money
ads.addEventListener("click", () => {
  if (isAdPlaying) return; // Do nothing if ad is already playing

  isAdPlaying = true; // Set flag to true when ad is playing

  let iframe = document.createElement("iframe");
  iframe.width = "95%";
  iframe.height = "600";
  iframe.autoplay = true;
  iframe.src =
    "https://www.youtube-nocookie.com/embed/oC9BCdJmuZc?si=e6bYW_jTGyB22VUv&amp;controls=0&autoplay=1";
  iframe.title = "YouTube video player";
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.referrerPolicy = "strict-origin-when-cross-origin";
  iframe.allowFullscreen = true;
  header.appendChild(iframe);

  setTimeout(() => {
    let skipad = document.createElement("button");
    skipad.textContent = "Skip Ad";
    header.appendChild(skipad);

    let adTimeout = setTimeout(() => {
      iframe.remove();
      cash_value += 500;
      cash.textContent = `Cash : $${cash_value}`;
      remark2.textContent = "Remarks : You got $500";
      isAdPlaying = false;

      // Ensure skip button is cleaned up
      skipad.remove();
    }, 45000);

    // Event listener for skipping the ad manually
    skipad.addEventListener("click", () => {
      clearTimeout(adTimeout); // Stop the automatic reward
      iframe.remove();
      skipad.remove();
      cash_value += 50; // Reduced reward for skipping
      cash.textContent = `Cash : $${cash_value}`;
      remark2.textContent = "Remarks : You got $50";
      isAdPlaying = false;
    });
  }, 10000);
});

// game logic
spinbtn.addEventListener("click", () => {
  if (isAdPlaying) {
    alert("Please wait until the ad is finished!");
    return;
  }

  let bet_cash = document.getElementById("bet_amount").value;
  if (bet_cash <= 0) {
    alert("Please enter a valid amount");
    return;
  } else if (bet_cash > cash_value) {
    alert("You don't have enough money to bet!");
    return;
  }

  remarks.textContent = "Remarks :    ";
  remark2.textContent = "Remarks :    ";
  if (cash_value !== 0) {
    let random1 = Math.floor(Math.random() * symbols.length);
    let random2 = Math.floor(Math.random() * symbols.length);
    let random3 = Math.floor(Math.random() * symbols.length);
    let sec1_value = symbols[random1];
    let sec2_value = symbols[random2];
    let sec3_value = symbols[random3];
    let interval = setInterval(() => {
      sec1.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      sec2.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      sec3.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      sec1.textContent = sec1_value;
      sec2.textContent = sec2_value;
      sec3.textContent = sec3_value;
      if (
        sec1_value !== sec2_value &&
        sec2_value !== sec3_value &&
        sec1_value !== sec3_value
      ) {
        remarks.textContent = "Remarks : You lost!, everything is different";
        cash_value -= bet_cash;
        cash.textContent = `Cash : $${cash_value}`;
        if (cash_value <= 0) {
          remark2.textContent = "You Have no cash remaining!";
        } else if (cash_value === 50) {
          remark2.textContent =
            "Remarks :    You have  $50 remaining, be careful!";
        }
      } else if (sec1_value === sec2_value && sec2_value === sec3_value) {
        remarks.textContent = "Remarks : BINGO";
        cash_value += 10 * bet_cash;
        cash.textContent = `Cash : $${cash_value}`;
      } else if (
        sec1_value === sec2_value ||
        sec2_value === sec3_value ||
        sec1_value === sec3_value
      ) {
        remarks.textContent = "Remarks : Double!";
        cash_value += 3 * bet_cash;
        cash.textContent = `Cash : $${cash_value}`;
      }
    }, 1000);
  } else {
    sec1.textContent = "X";
    sec2.textContent = "X";
    sec3.textContent = "X";
    remarks.textContent = "Remarks : You have no money!";
  }
});
