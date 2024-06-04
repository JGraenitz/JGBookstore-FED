import React from 'react';
import * as API from '../../../utils/Scripts/API';
import  { Book } from '../../../utils/Interfaces/Book'
import { useState, useEffect, ChangeEvent, FormEvent} from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './EditBook.css';


const EditBook: React.FC = () => {

  const navigate = useNavigate();

  const { id } = useParams<{id: string}>();

  const [book, setBook] = useState<Book>();

  useEffect(() => {
      const fetchBookByIsbn = async () => {
          try {
              const fetchedBookByISBN = await API.reqBookByID(id as string)
              setBook(fetchedBookByISBN);
          } catch (err){
              console.log(err)
          }           
      }
      fetchBookByIsbn();
  }, [id])

  const [message, setMessage] = useState<string | null>(null);
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
        ...prevBook!,
        [name]: value,
      }));
  };

  const deleteBook = async () => {
    try {
        const fetchedBookByISBN = await API.deleteABook(id as string)
    } catch (err){
        console.log(err)
    }
}
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const newBook = await API.updateExistingBook(book as Book, id as string);    //Die update Funktion updated nicht die ID und damit geht das mit dem Finden nichtmehr ... idk warum

    
      //deleteBook()
      //const newBook = await API.postNewBook(book as Book)    //deleting and adding new Book


      setMessage(`Book added successfully with ID: ${newBook.id}`);
      setBook(newBook)
      navigate(`/bookdetails/${newBook.id}`)
    } catch (error) {
      setMessage('Error adding book');
    }
  };

  return (
    <div className='editBook'>
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <div className='editBookText'>
            <div>
                <label htmlFor="title">Title:</label>
                <input className='textInput'
                    type="text"
                    id="title"
                    name="title"
                    value={book?.title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="subtitle">Subtitle:</label>
                <input className='textInput'
                    type="text"
                    id="subtitle"
                    name="subtitle"
                    value={book?.subtitle || ''}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="isbn">ISBN:</label>
                <input className='textInput'
                    type="text"
                    id="isbn"
                    name="isbn"
                    value={book?.isbn}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="abstract">Abstract:</label>
                <textarea className='textInput'
                    id="abstract"
                    name="abstract"
                    value={book?.abstract || ''}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="numPages">Number of Pages:</label>
                <input className='textInput'
                    type="number"
                    id="numPages"
                    name="numPages"
                    value={book?.numPages || ''}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="author">Author:</label>
                <input className='textInput'
                    type="text"
                    id="author"
                    name="author"
                    value={book?.author || ''}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="publisher">Publisher:</label>
                <input className='textInput'
                    type="text"
                    id="publisher"
                    name="publisher"
                    value={book?.publisher || ''}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="price">Price:</label>
                <input className='textInput'
                    type="text"
                    id="price"
                    name="price"
                    value={book?.price || ''}
                    onChange={handleChange}
                />
            </div>
        </div>
        <div className='editBooksButtons'>
            <button type="submit">Edit Book</button>
            <button onClick={() => navigate('/')}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditBook;