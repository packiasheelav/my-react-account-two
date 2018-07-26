import React, { Component } from 'react';
import './style.css';

class IncomeOrExpenses extends Component {
    render() {

        return (
            <div className="inc-exp-heading"><h2>{this.props.incomeOrExpensesHeading}</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>Description</th>
                            <th>Amount</th>
                        </tr>
                        {
                            this.props.inputArray.map(function (accountResult) {
                                return (
                                    <tr key={accountResult.id}>
                                        <td>{accountResult.desc}</td>
                                        <td>{accountResult.amount}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>

                    <tfoot>
                        <tr>
                            <th id="total" colSpan="1">Total :</th>
                            <td>{this.props.total}</td>
                        </tr>
                    </tfoot>

                </table>
            </div>
        );
    }
}
export default IncomeOrExpenses;
