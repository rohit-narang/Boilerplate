import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const App = () => {
    return (
        <div>
            <Header />
            <header>
                <Link to="/">Home</Link>
                <Link to="/about-us">About</Link>
            </header>
            <Footer />
        </div>
    )
}

export default App;