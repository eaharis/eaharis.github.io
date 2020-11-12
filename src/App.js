import './App.css';
import Home from './containers/Home';
import Browse from './containers/Browse';
import DineIn from './containers/DineIn';
import Promotions from './containers/Promotions';
import SignIn from './containers/SignIn';
import Stories from './containers/Stories';



import { Component } from "react";
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';
import * as pages from './store/pageNames';

class App extends Component {
  render() {
      return (
        <HashRouter basename='testRepo'>
            <div className="App">
                <Home />
            </div>
       </HashRouter>
      );
    }
  }

export default App;
