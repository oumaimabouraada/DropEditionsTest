import React from 'react';
//import logo from './logo.svg';

import Header from '../components/Header';
import Footer from '../components/Footer';
import './Main.css';

function Main() {
    return (
        <div className="App">
            <Header />
            <div className="content">
                <div className="cHome">
                    <p>Home</p>
                </div>
                <p>
                    <div className="cItem">
                        <p>Private section 1: cours de clôture de Microsoft, Google et Amazone sur le marché du NASDAQ le 3 janvier 2020</p>
                    </div>
                </p>
                <p>
                    <div className="cItem">
                        <p>Private section 2: cours de clôture de Microsoft, Google et Amazone sur le marché du NASDAQ le 4 janvier 2020</p>
                    </div>
                </p>
                <p>
                    <div className="cItem">
                        <p>Private section 3: une video youtube de votre choix commençant à la minute 1 et 03 seconde</p>
                    </div>
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default Main;
