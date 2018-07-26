import React, { Component } from 'react';
import IncomeOrExpensesGrid from './IncomeOrExpensesGrid'

import './style.css';

class AccountingResults extends Component {
    render() {
        const incomeArray = this.props.dataArg.filter(result => { return result.incomeorexpenses === 'inc' });
        const expensesArray = this.props.dataArg.filter(result => { return result.incomeorexpenses === 'exp' });

        let totalExpenses = 0;
        expensesArray.map(function (accountResult) {
            return (totalExpenses += Number(accountResult.amount));
        });
        totalExpenses = totalExpenses.toFixed(2);

        let totalIncome = 0;
        incomeArray.map(function (accountResult) {
            return (totalIncome += Number(accountResult.amount));
        });
        totalIncome = totalIncome.toFixed(2);

        return (
            <div className="form-result-grid">
                <div>
                    <div className="expences-grid">
                        <h3>Expences</h3><div className="empty">&nbsp;</div><div className="empty-last">&nbsp;</div>
                        <IncomeOrExpensesGrid inputArray={expensesArray} />
                        <div className="empty-total-text-first">&nbsp;</div><div className="empty-total-text">Total expenses</div><div className="total">{totalExpenses}</div>
                    </div>
                </div>
                <div>
                    <div className="income-grid">
                        <h3>Income</h3><div className="empty">&nbsp;</div><div className="empty-last">&nbsp;</div>
                        <IncomeOrExpensesGrid inputArray={incomeArray} />
                        <div className="empty-total-text-first">&nbsp;</div><div className="empty-total-text">Total income</div><div className="total">{totalIncome}</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default AccountingResults;
