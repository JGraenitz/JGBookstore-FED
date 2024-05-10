import React from 'react';
import './Content.css';
import  { Book } from '../../utils/Interfaces/Book'
import  CounterState   from '../../utils/Interfaces/CounterState'
import * as API from '../../utils/Scripts/API'
import { useState, useEffect} from 'react';


const Content = () => {

  const [books, setBooks] = useState<Book[]>([]);

  const [counters, setCounters] = useState<CounterState>({});

useEffect(() => {
  const fetchBooks = async () => {
    try {
      const data: Book[] = await API.reqAllBooks()
      const initialCounters = data.reduce((acc: { [key: string]: number }, book) => {
        acc[book.isbn] = 0;
        return acc;
      }, {});
      setBooks(data);
      setCounters(initialCounters);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  fetchBooks();
}, []);

const handleLike = (bookIsbn: string) => {
  setCounters((prevCounters: CounterState) => ({
    ...prevCounters,
    [bookIsbn]: (prevCounters[bookIsbn] || 0) + 1,
  }));
};

return (
  <div className="content">
    <div className="bookcontent" >
      {books.map((book) => (
        <div className="books" key={book.id}>
          <div className="book-content">
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Publisher: {book.publisher}</p>
            <p>Price: {book.price}</p>
              {book.cover ? (
                <img
                  className='cover'
                  src={book.cover}
                  alt={book.title}
                />
              ) : (
                <p>Kein Bild vorhanden!</p>
              )}
            <p>Counter: {counters[book.isbn] || 0}</p>
            <button onClick={() => handleLike(book.isbn)}>Like</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};


export default Content;


