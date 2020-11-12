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
        <HashRouter basename='/'>
            <div className="App">
                <Switch>
                    <Route path='/browse' component={Browse} />
                    <Route path="/promotions" component={Promotions} />
                    <Route path="/dine-in" component={DineIn} />
                    <Route path="/stories" component={Stories} />
                    <Route path="/sign-in" component={SignIn} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </div>
       </HashRouter>
      );
    }
  }

export default App;
