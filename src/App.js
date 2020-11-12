import './App.css';
import Home from './containers/Home';

import { Component } from "react";
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';
import * as pages from './store/pageNames';

class App extends Component {
  render() {
      return (
            <div className="App">
                <Home />
            </div>
      );
    }
  }

export default App;
