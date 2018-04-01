// import React, { Component } from 'react';
// import './App.css';
// import {
//     Route,
//     Link,
//     Switch
// } from 'react-router-dom';
//
// import About from './About';
// import Dashboard from './Dashboard';
//
// class App extends Component {
//     render() {
//         return (
//            <header>
//                <h1>Learn Routing</h1>
//                <nav>
//                    {/* Create our nav bar links using the Link element from react router */}
//                    <ul>
//                        <li><Link to="/about">About</Link></li>
//                        <li><Link to="/stocks">Dashboard</Link></li>
//                    </ul>
//                </nav>
//
//                 {/* Create the routes. This will not appear on the page. */}
//                <div className="main">
//                   <Switch>
//                        <Route exact path="/about" component={ About } />
//                        <Route path="/stocks" component={ Dashboard } />
//                   </Switch>
//                </div>
//            </header>
//         );
//     }
// }
//
// export default App;


import React, { Component } from 'react'
import {
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom";
import axios from 'axios';
import Dashboard from "./Dashboard";
import About from "./About";
import Stock from "./Stock";
import "./App.css";

const stockData = require('./data/stock_data.json');
const stocksGainers_URL = "https://api.iextrading.com/1.0/stock/market/list/gainers";
const symbols_URL = "https://api.iextrading.com/1.0/stock/ref-data/symbols";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      stocks: []
    }
  }

  componentDidMount () {

  axios.get(stocksGainers_URL)
    .then(response => this.setState({stocks: response.data}))
    .catch(err => console.log(err))
}

  render() {
    return (
      <div>
        <div className="nav">
          <div className="nav-item"><span className="nav-logo">iStocks</span></div>
          <div className="nav-item"><Link to="/stocks">Home</Link></div>
          <div className="nav-item"><Link to="/about">About</Link></div>
        </div>

        <div className="main">
          <Switch>
            <Route path="/about" component={About} />
            <Route exact path="/stocks" render={() => <Dashboard stocks={this.state.stocks} />} />
            <Route path="/stocks/:symbol" render={(props) => <Stock {...props} stocks={this.state.stocks} />} />
            <Route path="/*" render={() => <Redirect to="/stocks" />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
