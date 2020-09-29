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
                <a href="http://www.youtube.com">
                    <div className="cItem">
                        <p>Private section 1: cours de clôture de Microsoft, Google et Amazone sur le marché du NASDAQ le 3 janvier 2020</p>
                    </div>
                </a>
                <a href="http://www.youtube.com">
                    <div className="cItem">
                        <p>Private section 2: cours de clôture de Microsoft, Google et Amazone sur le marché du NASDAQ le 4 janvier 2020</p>
                    </div>
                </a>
                <a href="https://www.youtube.com/watch?v=KWcFhVQ13Bc&fbclid=IwAR3kmA6OzlFHuOelfjcUM9LmZhtUYkM7k_Ab2ljsJ1VFHnAQ4uX7AxDAhHI&ab_channel=InfographicCharts&t=63s">
                    <div className="cItem">
                        <p>Private section 3: une video youtube de votre choix commençant à la minute 1 et 03 seconde</p>
                    </div>
                </a>
            </div>
            <Footer />
        </div>
    );
}

export default Main;
