import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

const App = () => {
    return (
        <div>
            <Navbar />
            <Footer /> 
        </div>
    )
}

export default App;