import React from 'react'
import ReactDOM from 'react-dom/client'
import logo from "../src/assets/schoolhacks-logo.png";
import './styles/main.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Workshops from "./pages/Workshops.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div className="main">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home title="Home"/>}></Route>
                    <Route path="Workshops" element={<Workshops title="Workshops"/>}></Route>
                </Routes>
                <header className="container">
                    <img
                      className="logo"
                      src={logo}
                      alt="SchoolHacks logo"
                      title="SchoolHacks | Home"
                    />
                </header>
                <footer className="container">
                    &copy;2022 | <a
                  href="https://www.schoolhacks.eu"
                  target="_blank"
                  rel="noreferrer noopener"
                >SchoolHacks</a>
                </footer>
            </BrowserRouter>
        </div>
    </React.StrictMode>
)
