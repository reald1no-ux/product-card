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

