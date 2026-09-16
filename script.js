    const productCards = document.querySelectorAll('.product__card');
    const changeColorCardButton = document.querySelector('#change-Color-Card-all');
    const greenColorHash = '#00FF00';
    const blueColorHash = '#0000FF';

    changeColorCardButton.addEventListener ('click', () => {
    productCards.forEach((card) =>  card.style.backgroundColor = greenColorHash)
    });

    const firstProductCard = document.querySelector('.product__card');
    const changeColorFirstCardButton = document.querySelector('#change-Color-Card');

    changeColorFirstCardButton.addEventListener('click',() => {
    firstProductCard.style.backgroundColor = blueColorHash;
    });

    const openGoogleButton = document.querySelector('#open-google-button')
    openGoogleButton.addEventListener ('click',openGoole)

    function openGoole () {
    const answer = confirm ('вы действительно хотите открыть google?')

    if(answer === true)[
    window.open('https://google.com')
    ]
    }

    const outputLogButton = document.querySelector('#output-console-log')
    outputLogButton.addEventListener ('click',() =>outputConsoleLog('ДЗ №4')) 
    function outputConsoleLog(message){
    alert(message)
    console.log(message)
    }



    const recolor = document.querySelector('#recolor-button');
    recolor.addEventListener('click', () => {
    recolor.classList.toggle('active')
    })
    
    const sum =(a,b) =>{
      const sum = a + b;
      return sum * sum
    };
    console.log(sum(10,20))

  const age = 17
  if (age>=18) {
    console.log('доступ разрешен')
  } else {
    console.log('доступ запрещен')
  }

let temprerature = 20
if (temprerature>20){
  console.log('холодно')}
  else if (temprerature===20){
    console.log('температура равна 20')
  }

  function weather (city,temprerature)
  { 
    console.log(`В городе ${city} сейчас ${temprerature} градусов`)
  }
  weather('москва',20)

  const speedLight = 300000; 
  function speed(speed) {
  if (speed>speedLight) 
  {console.log('Сверхсветовая скорость' );}
  else if (speed===speedLight){
    console.log('скорость света');
  }
  else {
    console.log('Субсветовая скорость');
  }
  }
  speed(300000);

  const productName = "telephone";
  const price = 300;
  
  function buyProduct(balans) {
  if (balans>=price)
  {console.log(`вы приобрели ${productName} спасибо за покупку `)}
  else {console.log(`вам не хватает ${price - balans} $ пополните баланс`)}

  }
  buyProduct(300);
  
  const userName = 'Али';
  const userAge = 17; 
  
  function сheckCinemaAccess(age){
    if (age>=18) {
    console.log(`${userName} может купить билет цена 500р`)}
    else {console.log(`${userName} не может купить билет ему нет 18 лет`)}
  }
  сheckCinemaAccess(userAge);