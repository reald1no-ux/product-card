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
  
  const userName = 'иван';
  const userAge = 17; 
  
  function сheckCinemaAccess(age){
    if (age>=18) {
    console.log(`${userName} может купить билет цена 500р`)}
    else {console.log(`${userName} не может купить билет ему нет 18 лет`)}
  }
  сheckCinemaAccess(userAge);