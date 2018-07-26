import React, { Component } from 'react';
import moment from 'moment';
import './style.css';

class AccountingInputs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDate: moment()
        };
    }

    render() {
        return (
            <div id="form-container">
                <form className="myForm" onSubmit={this.addAccounts}>
                    <label htmlFor="desc">Description :</label>
                    <input type="text" id="desc" name="desc" placeholder="Description.." required />

                    <label id="amount" name="amount" placeholder="Amount.." >Amount :</label>
                    <input type="number" id="amount" ref="amount" name="amount" placeholder="Amount.." />

                    <label htmlFor="selectDate" >Date :</label>
                    <input type="date" name="selectDate" id="selectDateId" required />

                    <label htmlFor="incomeorexpenses">Income/Expenses :</label>
                    <select id="incomeorexpenses" name="incomeorexpenses">
                        <option value="exp" selected="selected">Expenses</option>
                        <option value="inc">Income</option>
                    </select>
                    <input type="submit" value="Add" id="submitButton" />
                </form>
            </div>
        );
    }

    addAccounts = (e) => {
        e.preventDefault();
        console.log(e.target.desc.value);
        console.log(e.target.amount.value);
        console.log(e.target.incomeorexpenses.value);
        console.log(e.target.selectDate.value);
        this.props.addAccounts(e.target.desc.value, e.target.amount.value, e.target.incomeorexpenses.value,e.target.selectDate.value);
    }


}
export default AccountingInputs;
