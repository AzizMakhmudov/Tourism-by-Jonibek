alert("salom")
var d = 750;
var e = 120
var dKurs =  10966 * d;
var eKurs = 11181 * e;
var summa = dKurs + eKurs;

var money = Number(prompt("Pulingiz qancha?"));

var eText = document.querySelector(".heading");

if (money >= summa) {
  eText.textContent = "Oq yo'l, Jonibek";
} else {
  eText.textContent =
    "Uyga o'tir Jonibek";
}