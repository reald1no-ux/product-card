function showWeather(city, temperature) {
  console.log(`В городе ${city} сейчас ${temperature} градусов`)
}
showWeather('москва', 20)

const SPEED_OF_LIGHT = 300000;
function showSpeed(speed) {
  if (speed > SPEED_OF_LIGHT) { console.log('Сверхсветовая скорость'); }
  else if (speed === SPEED_OF_LIGHT) {
    console.log('скорость света');
  }
  else {
    console.log('Субсветовая скорость');
  }
}
showSpeed(300000);

const productName = "telephone";
const price = 300;

function buyProduct(balans) {
  if (balans >= price) { console.log(`вы приобрели ${productName} спасибо за покупку `) }
  else { console.log(`вам не хватает ${price - balans} $ пополните баланс`) }
}
buyProduct(300);

const userName = 'иван';
const userAge = 17;

function checkCinemaAccess(age) {
  if (age >= 18) {
    console.log(`${userName} может купить билет цена 500р`)
  }
  else { console.log(`${userName} не может купить билет ему нет 18 лет`) }
}
checkCinemaAccess(userAge);

