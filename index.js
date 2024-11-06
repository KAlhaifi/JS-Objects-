const book = {
  title: "JavaScript: The Definitive Guide",
  author: "David Flanagan",
  publishedYear: 2020,
  genre: "Programming",
};

console.log(`${book.title} - ${book["publishedYear"]}`);

book.pageCount = 1096;

book.ISBN = "978-1491952023";

book.publishedYear = 2021;

console.log(book);

book.author = ["David Flanagan", "Another Author"];

console.log(book);

book.reviews = [
  { reviewer: "Book Critic", comment: "A comprehensive guide to JavaScript." },
];

console.log(book);
