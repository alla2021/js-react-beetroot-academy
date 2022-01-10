// ● Кількість книг, позначених як прочитані
// ● Кількість книг, позначених як ще не прочитані
// ● Посилання на наступну книгу для читання (об’єкт книги)
// ● Посилання на поточну книгу, яка читається (об’єкт книги)
// ● Посилання на останню прочитану книгу (об’єкт книги)
// ● Масив усіх книг
//
// ● BookList повинен мати кілька методів:
// ● .add(book) - додає книгу до списку
// ● .finishCurrentBook() - має позначити книгу, яка зараз читається, як
// "прочитана"; проставити дату, коли вона була прочитана; змінити останню
// прочитану книгу на книгу, яку щойно закінчили; змінити поточну книгу на
// наступну, яку потрібно прочитати; змінити властивість «Наступна книга для
// читання» на першу непрочитану книгу, яку ви знайдете у списку книг
// ● Для BookList і Book може знадобитися більше методів. Спробуйте придумати
// ще методи, які можуть бути корисними.
class Booklist {
  constructor() {
      this.allBook = [];  
      this._nextBook = null;
      this._currentBook = null;
      this._lastBook = null;    
  }

  add(book){   
      this.allBook = [...this.allBook, book];
  }

  finishCurrentBook () {  
      this.currentBook.read();
  }
  
  get booksRead() { //прочитаные
      return this.allBook.filter(book => book.isRead).length;
  }
  get booksNotRead() { //не прочитаные
      return this.allBook.filter(book => !book.isRead).length;
  }
 
  get nextBook(){  
     return this._nextBook = this.allBook[this.booksRead + 1];
  }

  get currentBook(){  //ссылка на текущюю
    for (const book of this.allBook){
        if(!book.isRead) {
          return this._currentBook = book;
        }
        else {
          this._currentBook = undefined;
        }
    }
  }

  get lastBook(){   
    return this._lastBook = this.allBook[this.booksRead - 1];
  }
}

class Book {
  constructor(title, genre, author, isRead) {
      this.title = title;
      this.genre = genre;
      this.author = author;
      this.isRead = isRead;
      this._dateRead;
  }
  read() {
      this.isRead = true;
      this._dateRead = new Date();
  }
  set dateRead(date){
    new Date(date);
  }
}

//test
const book1 = new Book('harry potter33','harry potter44','Harry Potter66', false);
const book2 = new Book('sherlock holmes4','sherlock holmes4','sherlock holmes4', false);
const book3 = new Book('harry potter2','harry potter2','Harry Potter2', false);
const book4 = new Book('sherlock holmes1','sherlock holmes1','sherlock holmes1', false);
const book5 = new Book('sherlock holmes2','sherlock holmes2','sherlock holmes2', false);
const bookList = new Booklist();
bookList.add(book1);
bookList.add(book2);
bookList.add(book3);
bookList.add(book4);
bookList.add(book5);
bookList.finishCurrentBook();
bookList.finishCurrentBook();
bookList.nextBook;
bookList.lastBook;
bookList.currentBook;

console.log(bookList);
console.log(bookList.allBook)