import 'bootstrap/dist/css/bootstrap.min.css';
import './components/NavbarClass'
import './components/Stream'
import NavbarClass from "./components/NavbarClass";
import Stream from "./components/Stream";
import People from "./components/People";
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {Button, ButtonGroup} from "react-bootstrap";
import InClass from "./components/InClass";

function App() {
    return (
        <Router>
            <div className="App">
                <NavbarClass classname="AP_7B"/>
                <InClass/>
            </div>
        </Router>
    );
}

export default App;
