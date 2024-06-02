import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import Content from './components/Content/Content';
import { BrowserRouter as Router } from 'react-router-dom';





const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>  
      <Navigation onComponentChange={function (component: String): void {
        throw new Error('Function not implemented.');
        } } 
      />
      <Header/>
      <Content/>
      <Footer/>
    </Router>
  </React.StrictMode>
);


//<Navigation onComponentChange={handleComponentChange} />
//{currentComponent === 'Content' ? <Content /> : <Content2 />}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
