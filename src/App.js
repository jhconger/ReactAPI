import logo from './logo.svg';
import Axios from 'axios';
import React from 'react';
import './App.css';
import {useState} from 'react';

function App() {
    const Axios = require('axios')
    const [joke, setJoke] = useState("")

//axios
    const callApi = () => {
        Axios.get("https://catfact.ninja/fact").then(
            (response) => {
                console.log(response);
                setJoke(response.data.fact)
            }
        );
    };

    // function callApi() {
    //   alert('Button was pressed!');
    //     fetch('https://catfact.ninja/fact', { method: 'GET' })
    //         .then(data => data.json())
    //         // Parsing the data into a JavaScript object
    //         .then(json => alert(JSON.stringify(json)))
    //   // Displaying the stringified data in an alert popup
    //   }


    return (
        <div className="App">
            <header className="App-header">
                <button onClick={callApi}>Call API</button>
                {joke}
            </header>
        </div>
    );
}

export default App;
