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
};

// задание номер 3

const carInfo = {
  make: 'toyota',
  model: 'camry',
  year: 2020,
  color: 'red',
  transmission: 'automatic',
};
carInfo.owner = userInfo;

// задание номер 4

function checkCarInfo(info, key, value) {
  if (!Object.hasOwn(info, key)) {
    info[key] = value;
  }
}
checkCarInfo(carInfo, 'speed', 200);

console.log(carInfo);

//задание номер 6

function giveInfo (obj, key) {
  console.log (obj[key]);
}
giveInfo(carInfo, 'speed');

//задание номер 7

const products = ['молоко', 'хлеб', 'сыр', 'масло', 'йогурт'];

//задание номер 8

const books = [
  {
    name: 'Война и мир',
    author: 'Лев Толстой',
    year: 1869,
    genre: 'роман',
    color: 'белый'
  },

  {
    name: 'Преступление и наказание',
    author: 'Федор Достоевский',
    year: 1866,
    genre: 'роман',
    color: 'черный'
  },

  {
    name: 'первый учитель',
    author: 'Чингиз Айтматов',
    year: 1962,
    genre: 'роман',
    color: 'красный'
  }
];
const book = {
  name: 'материнское поле',
  author: 'Чингиз Айтматов',
  year: 1967,
  genre: 'роман',
  color: 'синий'
}

books.push(book)

//задание номер 9

const booksPotter = [
  {
    name: 'Гарри Поттер и философский камень',
    author: 'Дж. К. Роулинг',
    year: 1997,
    genre: 'фэнтези',
    color: 'красный'
  },

  {
    name: 'Гарри Поттер и Тайная комната',
    author: 'Дж. К. Роулинг',
    year: 1998,
    genre: 'фэнтези',
    color: 'зеленый'
  },

  {
    name: 'Гарри Поттер и узник Азкабана',
    author: 'Дж. К. Роулинг',
    year: 1999,
    genre: 'фэнтези',
    color: 'синий'
  }
];

const allBooks = [...booksPotter, ...books]

//задание 10

const markedBooks = allBooks.map(function (book) {
  book.isRare = book.year > 2000 ? true : false
  return book
});