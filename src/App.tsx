import React from 'react';
import logo from './logo.svg';
import './App.css';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import SampleAlert from "./SampleAlert";
import AlertTemplate from './SnackbarAlertTemplate';

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

function App() {
    return (
        <div className="App">
            <AlertProvider template={AlertTemplate} {...options}>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    <SampleAlert/>
                </header>
            </AlertProvider>
        </div>
    );
}

export default App;
