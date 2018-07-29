import React, { Component } from 'react';
import Home from './Home'
import MyTransaction from './MyTransaction'
import Settings from './Settings'
import Logout from './Logout'
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import './style.css';

let click = true;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuStyle: "header-right"
    }
  }

  showMenu = () => {
    console.log("hello " + click);
    if (click) {
      this.setState({ menuStyle: "header-right responsive" });
      click = false;
    } else {
      this.setState({ menuStyle: "header-right" });
      click = true;
    }
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div id="headerId" className="header">
            <a href="#default" className="logo">MyAccountant</a>
            <div className={this.state.menuStyle} >
              <Link to="/mytransaction">myTransactions</Link>
              <Link to="/settings">Settings</Link>
              <Link to="/logout">Logout</Link>
              <a className="icon" onClick={() => this.showMenu()} >
                <i class="fa fa-bars"></i>
              </a>
            </div>
          </div>
          <Route exact path="/mytransaction" component={MyTransaction} />
          <Route exact path="/" component={MyTransaction} />

          <Route exact path="/settings" component={Settings} />
          <Route exact path="/logout" component={Logout} />
        </div>
      </Router>
    );
  }
}
export default App;
