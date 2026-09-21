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

const carInfo = {
  make: 'toyota',
  model: 'camry',
  year: 2020,
  color: 'red',
  transmission: 'automatic',
}
carInfo.owner = userInfo

// задание номер 3

function Check(info, speed, sp) {
  if (!Object.hasOwn(info, speed)) {
    info[speed] = sp
  }
}
Check(carInfo, 'speed', 200)

console.log(carInfo)

//задание номер 4

function giveInfo(obj, key) {
  console.log(obj[key])
}
giveInfo(carInfo, 'speed')

//задание номер 5

const products = [молоко, хлеб, сыр, масло, йогурт]

//задание номер 6

const book1 = {
  name: 'Война и мир',
  autor: 'Лев Толстой',
  year: 1869,
  genre: 'роман',
  color: 'белый'
}

const book2 = {
  name: 'Преступление и наказание',
  autor: 'Федор Достоевский',
  year: 1866,
  genre: 'роман',
  color: 'черный'
}

const book3 = {
  name: 'первый учитель',
  autor: 'Чингиз Айтматов',
  year: 1962,
  genre: 'роман',
  color: 'красный'
}
const book4 = {
  name: 'материнское поле',
  autor: 'Чингиз Айтматов',
  year: 1967,
  genre: 'роман',
  color: 'синий'
}


const books = [book1,book2,book3]

books.push(book4)
