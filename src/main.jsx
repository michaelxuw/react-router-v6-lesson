import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import logo from "../src/assets/schoolhacks-logo.png";
import './styles/main.css'
import Home from "./pages/Home.jsx";
import Workshops from "./pages/Workshops.jsx";
import Header from "./components/Header.jsx";
import About from "./pages/About";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
        <div className="main">
            <Header/>

            <Routes>
                <Route path="/" element={<Home titel="Welcome to SchoolHacks"/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/workshops" element={<Workshops/>}/>
            </Routes>

            <footer className="container">
                &copy;2022 | <a
                href="https://www.schoolhacks.eu"
                target="_blank"
                rel="noreferrer noopener"
            >SchoolHacks</a>
            </footer>
        </div>
        </BrowserRouter>
    </React.StrictMode>
)
