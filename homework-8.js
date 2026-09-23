// задание номер 2

const userInfo = {
  name: 'Иван',
  age: 18,
  lastName: 'Иванов',
  email: 'ivanov@example.com',
  employer: 'Example Corp',
  jobTitle: 'Software Engineer',
  country: 'Russia',
  city: 'Moscow',
  relationshipStatus: 'Single'
}
// задание номер 3

const carInfo = {
  make: 'toyota',
  model: 'camry',
  year: 2020,
  color: 'red',
  transmission: 'automatic',
}
carInfo.owner = userInfo

// задание номер 4

function Check(info, speed, sp) {
  if (!Object.hasOwn(info, speed)) {
    info[speed] = sp
  }
}
Check(carInfo, 'speed', 200)

console.log(carInfo)

//задание номер 6

function giveInfo(obj, key) {
  console.log(obj[key])
}
giveInfo(carInfo, 'speed')

//задание номер 7

const products = [молоко, хлеб, сыр, масло, йогурт]

//задание номер 8

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


const books = [book1, book2, book3]

books.push(book4)

//задание номер 9

const book5 = {
  name: 'Гарри Поттер и философский камень',
  author: 'Дж. К. Роулинг',
  year: 1997,
  genre: 'фэнтези',
  color: 'красный'
};

const book6 = {
  name: 'Гарри Поттер и Тайная комната',
  author: 'Дж. К. Роулинг',
  year: 1998,
  genre: 'фэнтези',
  color: 'зеленый'
};

const book7 = {
  name: 'Гарри Поттер и узник Азкабана',
  author: 'Дж. К. Роулинг',
  year: 1999,
  genre: 'фэнтези',
  color: 'синий'
};

const allBooks = [book5, book6, book7, ...books]

//задание номер 10

const upDatedBooks = allBooks.map(function (book) {
  if (book.year > 2000) {
    book.isRare = true
  }
  else {
    book.isRare = false
  }
  return book
})