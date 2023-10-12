setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");
const theDay = document.querySelector("[data-day]");
function setClock() {
  const currentDate = new Date();
  const secondRatio = currentDate.getSeconds() / 60; // 0.0 => 10
  const minutesRatio = (secondRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  const dateInDay = currentDate.getDate();
  theDay.textContent = dateInDay;

  setRotation(secondHand, secondRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();
