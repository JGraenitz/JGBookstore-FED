import React from 'react';
import './AddBook.css';
import * as API from '../../../utils/scripts/API';
import  { Book } from '../../../utils/interfaces/Book'
import { useState, useEffect, ChangeEvent, FormEvent} from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { useAuth } from '../../authContext/AuthContext';



const AddBook: React.FC = () => {

  const navigate = useNavigate();

  const [book, setBook] = useState<Book>({
    id: '',
    title: '',
    isbn: '',
  });
  
  const [message, setMessage] = useState<string | null>(null);

  const { user } = useAuth();
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const newBook = await API.postNewBook(book);
      setMessage(`Book added successfully with ID: ${newBook.id}`);
      setBook({
        id: '',
        title: '',
        isbn: '',
      });
      navigate('/home')
    } catch (error) {
      setMessage('Error adding book');
    }
  };

  return (
    <div className="addBook">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
          <div className="addBookText">
              <div>
                  <label htmlFor="title">Title:</label>
                  <input
                      className="textInput"
                      type="text"
                      id="title"
                      name="title"
                      value={book.title}
                      onChange={handleChange}
                      required
                  />
              </div>
              <div>
                  <label htmlFor="isbn">ISBN:</label>
                  <input
                      className="textInput"
                      type="text"
                      id="isbn"
                      name="isbn"
                      value={book.isbn}
                      onChange={handleChange}
                      required
                  />
              </div>
              <div>
                  <label htmlFor="subtitle">Subtitle:</label>
                  <input
                      className="textInput"
                      type="text"
                      id="subtitle"
                      name="subtitle"
                      value={book.subtitle || ''}
                      onChange={handleChange}
                  />
              </div>
              <div>
                  <label htmlFor="abstract">Abstract:</label>
                  <textarea
                      className="textInput"
                      id="abstract"
                      name="abstract"
                      value={book.abstract || ''}
                      onChange={handleChange}
                  />
              </div>
              <div>
                  <label htmlFor="author">Author:</label>
                  <input
                      className="textInput"
                      type="text"
                      id="author"
                      name="author"
                      value={book.author || ''}
                      onChange={handleChange}
                  />
              </div>
              <div>
                  <label htmlFor="publisher">Publisher:</label>
                  <input
                      className="textInput"
                      type="text"
                      id="publisher"
                      name="publisher"
                      value={book.publisher || ''}
                      onChange={handleChange}
                  />
              </div>
              <div>
                  <label htmlFor="price">Price:</label>
                  <input
                      className="textInput"
                      type="text"
                      id="price"
                      name="price"
                      value={book.price || ''}
                      onChange={handleChange}
                  />
              </div>
              <div>
                  <label htmlFor="numPages">Number of Pages:</label>
                  <input
                      className="textInput"
                      type="number"
                      id="numPages"
                      name="numPages"
                      value={book.numPages || ''}
                      onChange={handleChange}
                  />
              </div>
              <div>
                  <label htmlFor="cover">Cover URL:</label>
                  <input
                      className="textInput"
                      type="text"
                      id="cover"
                      name="cover"
                      value={book.cover || ''}
                      onChange={handleChange}
                  />
              </div>
          </div>
            {user?.role === 'admin' ? (
                <div className="addBookButtons">
                    <button type="submit">Add Book</button>
                    <button className="cancleButton" onClick={() => navigate("/home")}>Cancel</button>
                </div>
            ) : (
                <div className="addBookButtons">
                    <button className="cancleButton" onClick={() => navigate("/home")}>Cancel</button>
                </div>
            )}
      </form>
    </div>
  );
};

export default AddBook;