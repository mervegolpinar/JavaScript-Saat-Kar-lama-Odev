
document.querySelector("#myName").innerHTML = prompt("Adınızı giriniz.");

//Saat ve günlerin ayar kısmı 
function showTime() {
  let date = new Date();
  let days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  let clock = document.querySelector("#myClock");
  clock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${
    days[date.getUTCDay()]
  }`;

  setTimeout(showTime, 1);
}
showTime();