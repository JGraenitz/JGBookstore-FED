import React from 'react';
import './BookDetails.css';
import  { Book } from '../../../utils/Interfaces/Book'
import  CounterState   from '../../../utils/Interfaces/CounterState'
import * as API from '../../../utils/Scripts/API'
import { useState, useEffect} from 'react';
import { useBooks } from '../../../domain/hooks'
import { useParams } from 'react-router-dom';
import { Buttons } from '@testing-library/user-event/dist/types/system/pointer/buttons';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';


const BookDetails = () => {

    const { isbn } = useParams<{isbn: string}>();

    const [book, setBook] = useState<Book>();

    const navigate = useNavigate();

    useEffect(() => {
        const fetchBookByIsbn = async () => {
            try {
                const fetchedBookByISBN = await API.reqBookByISBN(isbn as string)
                setBook(fetchedBookByISBN);
            } catch (err){
                console.log(err)
            }           
        }
        fetchBookByIsbn();
    }, [isbn])

    const deleteBook = async () => {
        try {
            const fetchedBookByISBN = await API.deleteABook(isbn as string)
            navigate('/')
        } catch (err){
            console.log(err)
        }
    }
        
    return (
        <div>
            <div className='bookDetails'>
                <div className='bookCover'>
                    {book?.cover ? (
                        <img className='bookDetailsCover' src={book?.cover} alt="Book Cover" />
                    ) : (
                        <p className='noImageText'>Kein Bild vorhanden</p>
                    )}
                </div>
                <div className='bookTextInfos'>
                    <h1>{book?.title}</h1>
                    <p>{book?.author}</p>
                    <p>{book?.isbn}</p>
                    <p>{book?.abstract}</p>
                    <p>{book?.numPages}</p>
                    <p>{book?.price}</p>
                    <p>{book?.userId}</p>
                </div>
            </div>
            <div className='buttons'>
                <div className='editBookButton'>
                    <button onClick={() => navigate(`/editbook/${book?.isbn}`)}>Edit Book</button>
                </div>
                <div className='deleteBookButton'>
                    <button onClick={deleteBook}>Delete Book</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;