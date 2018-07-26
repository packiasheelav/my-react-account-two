import React, { Component } from 'react';
import './style.css';
let click=true;
class ResponsiveHeader extends Component {
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
            <div id="headerId" className="header">
                <a href="#default" className="logo">MyAccountant</a>
                <div className={this.state.menuStyle} >
                    <a href="/home">Home</a>
                    <a className="active" href="/mytransaction">myTransaction</a>
                    <a href="#about">Settings</a>
                    <a href="#about">Logout</a>
                    <a className="icon" onClick={() => this.showMenu()} >
                        <i class="fa fa-bars"></i>
                    </a>
                </div>
            </div>
        );
    }
}
export default ResponsiveHeader;