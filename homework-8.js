// задание номер 1

const userInfo = {
  name: 'Иван',
  age: 17,
  lastName: 'Иванов',
  email: 'ivanov@example.com',
  employer: 'Example Corp',
  jobTitle: 'Software Engineer',
  country: 'Russia',
  city: 'Moscow',
  relationshipStatus: 'Single'
}
// задание номер 2

const carInfo ={
  make: 'toyota',
  model:'camry',
  year: 2020,
  color:'red',
  transmission:'automatic',
}
carInfo.owner=userInfo 

// задание номер 3

function Check (info,speed,sp)
{
  if (!Object.hasOwn(info,speed)){
    info [speed]=sp
  }
}
Check(carInfo,'speed',200)

//задание номер 4

function giveInfo (obj,key){
  console.log(obj[key])
}
giveInfo(carInfo,'speed')