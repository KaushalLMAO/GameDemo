let sec1 = document.getElementById("one");
let sec2 = document.getElementById("two");
let sec3 = document.getElementById("three");
let cash = document.querySelector(".money");
let cash_value = 300;

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
];
let spinbtn = document.getElementById("spin");

spinbtn.addEventListener("click", () => {
  let bet_cash = document.getElementById("bet_amount").value;
  if (bet_cash <= 0) {
    alert("Please enter a valid amount");
    return;
  } else if (bet_cash > cash_value) {
    alert("You don't have enough money to bet!");
    return;
  }
  remarks.textContent = "Remakrs :    ";
  if (cash_value !== 0) {
    let random1 = Math.floor(Math.random() * symbols.length);
    let random2 = Math.floor(Math.random() * symbols.length);
    let random3 = Math.floor(Math.random() * symbols.length);
    let sec1_value = symbols[random1];
    let sec2_value = symbols[random2];
    let sec3_value = symbols[random3];
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
  } else {
    sec1.textContent = X;
    sec2.textContent = X;
    sec3.textContent = X;
    remarks.textContent = "Remarks : You have no money!";
  }
});
