import React from 'react';
import './BookList.css';
import  { Book } from '../../../utils/Interfaces/Book'
import  CounterState   from '../../../utils/Interfaces/CounterState'
import * as API from '../../../utils/Scripts/API'
import { useState, useEffect} from 'react';
import { useBooks } from '../../../domain/hooks'
import ErrorPage from "../../ErrorPage/ErrorPage";
import LoadingPage from '../../LoadingPage/LoadingPage';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import likebutton from '../../../images/LikeButton.png'


const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const BookList = () => {

const [counters, setCounters] = useState<CounterState>({});

const query = useQuery();
const page: number = parseInt(query.get('_page') || '1');

const { books, state, error, refresh, links } = useBooks(page);

const navigate = useNavigate();


const handlePageChange = (url: string) => {
  const urlParams = new URLSearchParams(url.split('?')[1]);
  const newPage = urlParams.get('_page');
  const newLimit = urlParams.get('_limit');
  navigate(`?_page=${newPage}&_limit=${newLimit}`);
};


useEffect(() => {
  const initialCounter = async () => {
    try {
      const initialCounters = books.reduce((acc: { [key: string]: number }, book) => {
        acc[book.isbn] = 0;
        return acc;
      }, {});
      setCounters(initialCounters);
    } catch (error) {
      console.error('Counter broke', error);
    }
  };

  initialCounter();
}, []);

const handleLike = (bookIsbn: string) => {
  setCounters((prevCounters: CounterState) => ({
    ...prevCounters,
    [bookIsbn]: (prevCounters[bookIsbn] || 0) + 1,
  }));
};

return (
  <div className="content">
    {state === 'loading' && (
      <LoadingPage/>
    )
    }
    {state === 'error' && (
      <ErrorPage error={error}/> 
    )
    }
    {state === 'success' && (

    <div className="bookcontent" >
      {books.map((book) => (
        <div className="books" key={book.isbn}>
          <div className="book-content">
            <div className="book-info">
              <h2 className='book-title'>{book.title}</h2>
              <p className='author'>Author: {book.author}</p>
              <p className='publisher'>Publisher: {book.publisher}</p>
              <p className='price'>Price: {book.price}</p>
            </div>
              {book.cover ? (
                <img
                  className='cover'
                  src={book.cover}
                  alt={book.title}
                />
              ) : (
                <p>Kein Bild vorhanden!</p>
              )}
            <div className='likeContainer'>
              <p className='counter'>{counters[book.isbn] || 0}</p>
              <img className='likeImage' src={likebutton} alt='LikeButton'/>
            </div>
            <div className='buttons'> 
              <div className='counterButton'>
                <button onClick={() => handleLike(book.isbn)}>Like</button>
              </div>
              <div className='detailsButton'>
                <button onClick={() => navigate(`/bookdetails/${book.isbn}`)}>Details</button>
              </div> 
              <div className='warenkorbButton'>
                <button>Warenkorb</button>
              </div> 
            </div>
          </div>
        </div>
      ))}
    </div>
    )}
    <div className='pageButtons'>
      <button className='pageButtonsStyle'
        disabled={!links.first}
        onClick={() => links.first && handlePageChange(links.first)}>
          First
      </button>
      <button className='pageButtonsStyle'
        disabled={!links.prev}
        onClick={() => links.prev && handlePageChange(links.prev)}>
          Previous
      </button>
      <button className='pageButtonsStyle'
        disabled={!links.next}
        onClick={() => links.next && handlePageChange(links.next)}>
          Next
      </button>
      <button className='pageButtonsStyle'
        disabled={!links.last}
        onClick={() => links.last && handlePageChange(links.last)}>
          Last
      </button>
    </div>
  </div>
);
};


export default BookList;


