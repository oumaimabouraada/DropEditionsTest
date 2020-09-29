import React, { useState } from 'react';
import '../views/Main.css';
import Modal from "react-modal";
Modal.setAppElement("#root");
function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const [username, setUser] = useState('')
    const [password, setPass] = useState('')
    function toggleModal() {
        setIsOpen(!isOpen);
    }
    function auth() {
    
        console.log('we are here\nuser: ' + username + '\npass: ' + password)
        var xhr = new XMLHttpRequest()
        xhr.open('GET', 'http://localhost:3001/auth?username=' + username + '&password=' + password, true)

        xhr.send()

        console.log({ username: username, password: password })
    }
    return (
        <header className="App-header">
            <div className="logo">
                <div className="App-logo" alt="logo" >
                    <p>logo</p>
                </div>
            </div>
            <button className="normal"  >
                <p className="text">Home</p>
            </button>
            <button className="normal"  >
                <a href="http://api.marketstack.com/v1/eod/2020-01-03?access_key=12ac580eb8866bc63ee5e561aa32d5d9&symbols=AAPL" className="text">Private section 1</a>
            </button>
            <button className="normal"  >
                <a href="http://api.marketstack.com/v1/eod/2020-05-20?access_key=12ac580eb8866bc63ee5e561aa32d5d9&symbols=AAPL" className="text">Private section 2</a>
            </button>
            <button className="normal"  >
                <a href="https://www.youtube.com/watch?v=KWcFhVQ13Bc&fbclid=IwAR3kmA6OzlFHuOelfjcUM9LmZhtUYkM7k_Ab2ljsJ1VFHnAQ4uX7AxDAhHI&ab_channel=InfographicCharts&t=63s" className="text">Private section 3</a>
            </button>
            <div className="logo">

                <button className="normal" alt="logo" onClick={toggleModal}>
                    <p className="text">Authentification</p>

                </button>

            </div>
            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
            >
                <div style={{ justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <p>Identifiez-vous</p>
                    <label >Username</label>
                    <p> </p>
                    <input onChange={event => setUser(event.target.value)} /> <p>   </p>
                    <label >Password</label>
                    <p> </p>
                    <input onChange={event => setPass(event.target.value)} />
                    <p>


                    </p>
                </div>
                <button className="normal" onClick={toggleModal}><p className="text">Annuler</p></button>
                <button className="normal" onClick={auth}><p className="text">Valider</p></button>
            </Modal>
        </header>
    );
}


export default Header;
