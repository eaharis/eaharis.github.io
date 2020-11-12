import './App.css';
import Home from './containers/Home';
import Browse from './containers/Browse';
import DineIn from './containers/DineIn';
import Promotions from './containers/Promotions';
import SignIn from './containers/SignIn';
import Stories from './containers/Stories';



import { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as pages from './store/pageNames';

class App extends Component {
  render() {
      return (
            <div className="App">
                <Switch>
                    <Route path={pages.baseURL + pages.BROWSE} component={Browse} />
                    <Route path={pages.baseURL + pages.PROMOTIONS} component={Promotions} />
                    <Route path={pages.baseURL + pages.DINEIN} component={DineIn} />
                    <Route path={pages.baseURL + pages.STORIES} component={Stories} />
                    <Route path={pages.baseURL + pages.SIGNIN} component={SignIn} />
                    <Route path={pages.baseURL + pages.HOME} component={Home} />
                </Switch>
            </div>
      );
    }
  }

export default App;
