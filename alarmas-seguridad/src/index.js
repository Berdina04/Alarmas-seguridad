import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBarC from "./Components/NavBar/Navbar";
import Footer from "./Components/Footer/Footer";

const header = ReactDOM.createRoot(document.getElementById('header'));
const root   = ReactDOM.createRoot(document.getElementById('root'));
const footer = ReactDOM.createRoot(document.getElementById('footer'));

header.render(
    <React.StrictMode>
        <NavBarC />
    </React.StrictMode>
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

footer.render(
    <React.StrictMode>
        <Footer />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();