import { comments } from './comments.js';

// уровень 1 задание 2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const filteredNumbers = numbers.filter(function (number) {
  return number >= 5;
});

// уровень 1 задание 3

const movies = ['форсаж', 'матрица', 'титаник'];
const hasTitanik = movies.includes('титаник');
console.log(hasTitanik);

// уровень 1 задание 4

function reverseArray(arr) {
  return arr.reverse();
}
reverseArray(numbers);
reverseArray(movies);

console.log(numbers);
console.log(movies);

//ЗАДАНИЕ 7 УРОВЕНЬ 2

const comEmailComments = comments.filter(function (comment) {
  return comment.email.includes('.com');
});
console.log(comEmailComments)

//ЗАДАНИЕ 8 УРОВЕНЬ 2

const commentsWithPostId = comments.map(function (comment) {
  return {
    ...comment,
    postid: comment.id >= 5 ? 2 : 1
  };
});
console.log(commentsWithPostId);

//ЗАДАНИЕ 9 УРОВЕНЬ 2

const shortComments = comments.map(function (comment) {
  return { id: comment.id, name: comment.name };
});

//ЗАДАНИЕ 10 УРОВЕНЬ 2

const checkedComments = comments.map(function (comment) {
  return {
    ...comment,
    isInvalid: comment.body.length > 180,
  };
});
console.log(checkedComments);

//ЗАДАНИЕ 11 УРОВЕНЬ 3

const emails = comments.reduce((emailsList, user) => {
  emailsList.push(user.email);
  return emailsList;
}, []);

const commentEmails = comments.map(function (comment) {
  return comment.email;
});

//ЗАДАНИЕ 12 УРОВЕНЬ 3

const commentsString = commentEmails.toString()
console.log(commentsString)

