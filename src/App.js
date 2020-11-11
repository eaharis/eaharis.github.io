import logo from './logo_transparent.png';

import './App.css';
import Header from './components/Header'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from  'react-bootstrap/NavDropdown'
import {Component} from "react";

class App extends Component {
  render() {
      return (
        <div className="App">
            <Header />
        </div>
      );
    }
  }

export default App;
