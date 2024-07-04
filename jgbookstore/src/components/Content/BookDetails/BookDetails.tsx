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
import { useAuth } from '../../authContext/AuthContext';

const BookDetails = () => {

    const { id } = useParams<{id: string}>();

    const [book, setBook] = useState<Book>();

    const navigate = useNavigate();

    const { user } = useAuth();

    useEffect(() => {
        const fetchBookByIsbn = async () => {
            try {
                const fetchedBookByID = await API.reqBookByID(id as string)
                setBook(fetchedBookByID);
            } catch (err){
                console.log(err)
            }           
        }
        fetchBookByIsbn();
    }, [id])

    const deleteBook = async () => {
        try {
            const fetchedBookByID = await API.deleteABook(id as string)
            navigate('/home')
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
                    <p>{book?.subtitle}</p>
                    <p>{book?.isbn}</p>
                    <p>{book?.abstract}</p>
                    <p>{book?.numPages}</p>
                    <p>{book?.author}</p>
                    <p>{book?.publisher}</p>
                    <p>{book?.price}</p>
                </div>
            </div>
            {user?.role === 'admin' ? (
                <div className='detailsButtons'>
                    <div className='editBookButton'>
                        <button onClick={() => navigate(`/editbook/${book?.id}`)}>Edit Book</button>
                    </div>
                    <div className='deleteBookButton'>
                        <button onClick={deleteBook}>Delete Book</button>
                    </div>
                </div>
            ) : (
                <div className='detailsButtons'>
                </div>
            )}
        </div>
    );
};

export default BookDetails;