import React from "react";
import { Routes, Route } from 'react-router-dom';
import './Content.css';
import BookList from "./BookList/BookList";
import AddBook from "./AddBook/AddBook";
import About from "./About/About";
import BookDetails from "./BookDetails/BookDetails";
import EditBook from "./EditBook/EditBook";
import LoadingPage from "../LoadingPage/LoadingPage";
import LoginPage from "../LoginPage/LoginPage";
import Warenkorb from "./Warenkorb/Warenkorb"
import Checkout from "../Checkout/Checkout";


const Content = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/home" element={<BookList/>}/>
            <Route path="/add-book" element={<AddBook/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/warenkorb" element={<Warenkorb />} />
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/bookdetails/:id" element={<BookDetails/>}/>
            <Route path="/editbook/:id" element={<EditBook/>}/>
        </Routes>
    );
};

export default Content;