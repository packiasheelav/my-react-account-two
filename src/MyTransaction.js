import React, { Component } from 'react';
import UniqueId from 'react-html-id'
import AccountingInputs from './AccountingInputs'
import AccountingResults from './AccountingResults'
import AccountingFinalResult from './AccountingFinalResult'

import data from './data.json';
import './style.css';

class MyTransaction extends Component {

  constructor(props) {
    super(props);
    UniqueId.enableUniqueIds(this);
    this.state = {
      data: data
    };
  }

  componentDidMount() {
    
  }

  addAccounts = (desc, amount, incorexp, selectDate) => {
    console.log(desc + " " + amount + " " + incorexp);
    var accountingItem = { "id": this.nextUniqueId(), "desc": desc, "amount": amount, "incomeorexpenses": incorexp, "date" :selectDate };
    let newState = { ...this.state };//clone the state
    newState.data.push(accountingItem);
    this.setState({ data: newState.data });
  }

  render() {
    return (
      <div className="App">
        <AccountingInputs addAccounts={this.addAccounts} />
        <AccountingResults dataArg={this.state.data} />
        <AccountingFinalResult />
      </div>
    );
  }
}
export default MyTransaction;
