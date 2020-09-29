import React from 'react';
import '../views/Main.css';

function Header() {
    return (
        <header className="App-header">
            <div className="logo">
                <div className="App-logo" alt="logo" >
                    <p>logo</p>
                </div>
            </div>
            <div className="normal"  >
                <p className="text">Home</p>
            </div>
            <div className="normal"  >
                <p className="text">Private section 1</p>
            </div>
            <div className="normal"  >
                <p className="text">Private section 2</p>
            </div>
            <div className="normal"  >
                <p className="text">Private section 3</p>
            </div>
            <div className="logo">
                <div className="normal" alt="logo" >
                    <p className="text">Authentification</p>
                </div>
            </div>
        </header>
    );
}

export default Header;
