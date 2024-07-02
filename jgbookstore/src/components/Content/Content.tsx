import React from "react";
import { Routes, Route } from 'react-router-dom';
import './Content.css';
import BookList from "./bookList/BookList";
import AddBook from "./addBook/AddBook";
import About from "./about/About";
import BookDetails from "./bookDetails/BookDetails";
import EditBook from "./editBook/EditBook";
import LoadingPage from "../LoadingPage/LoadingPage";
import LoginPage from "../loginPage/LoginPage";
import Warenkorb from "../Content/warenkorb/Warenkorb"
import Checkout from "../checkout/Checkout";


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