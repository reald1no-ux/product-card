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
    recolor.classList.toggle('#recolor-button')
    })
