import React, { Component } from 'react';
import './style.css';

class IncomeOrExpensesGrid extends Component {
    render() {
        return (
            this.props.inputArray.map(function (accountResult) {
                return (
                    [<div className="grid-cell1" key={accountResult.desc}>{accountResult.desc}</div>,
                    <div className="grid-cell2" key={accountResult.date}>{accountResult.date}</div>,
                    <div className="grid-cell3" key={accountResult.amount}>{accountResult.amount}</div>
                    ]
                );
            })
        );
    }
}
export default IncomeOrExpensesGrid;
