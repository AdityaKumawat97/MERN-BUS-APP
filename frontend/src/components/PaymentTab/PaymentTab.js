import React from "react";
import Card from "react-credit-cards";
import './PaymentTab.css'
import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate,
    formatFormData
} from "./utils";

import "react-credit-cards/es/styles-compiled.css";

export default class App extends React.Component {
    state = {
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        issuer: "",
        focused: "",
        formData: null
    };

    handleCallback = ({ issuer }, isValid) => {
        if (isValid) {
            this.setState({ issuer });
        }
    };

    handleInputFocus = ({ target }) => {
        this.setState({
            focused: target.name
        });
    };

    handleInputChange = ({ target }) => {
        if (target.name === "number") {
            target.value = formatCreditCardNumber(target.value);
        } else if (target.name === "expiry") {
            target.value = formatExpirationDate(target.value);
        } else if (target.name === "cvc") {
            target.value = formatCVC(target.value);
        }

        this.setState({ [target.name]: target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { issuer } = this.state;
        const formData = [...e.target.elements]
            .filter(d => d.name)
            .reduce((acc, d) => {
                acc[d.name] = d.value;
                return acc;
            }, {});

        this.setState({ formData });
        this.form.reset();
    };

    render() {
        const { name, number, expiry, cvc, focused, issuer, formData } = this.state;

        return (

            <div className="paym">
                <div className="row">
                    <div key="Payment">
                        <div className="App-payment cl-1">
                            <p className="pPayment">Enter Credit card details</p>
                            <Card
                                number={number}
                                name={name}
                                expiry={expiry}
                                cvc={cvc}   
                                focused={focused}
                                callback={this.handleCallback}
                            />
                            <form className="credit-form" ref={c => (this.form = c)} onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input
                                        type="tel"
                                        name="number"
                                        className="frm-ctrl"
                                        placeholder="Card Number"
                                        pattern="[\d| ]{16,22}"
                                        required
                                        onChange={this.handleInputChange}
                                        onFocus={this.handleInputFocus}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        className="frm-ctrl"
                                        placeholder="Name"
                                        required
                                        onChange={this.handleInputChange}
                                        onFocus={this.handleInputFocus}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="tel"
                                        name="expiry"
                                        className="frm-ctrl"
                                        placeholder="Valid Thru"
                                        pattern="\d\d/\d\d"
                                        required
                                        onChange={this.handleInputChange}
                                        onFocus={this.handleInputFocus}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="tel"
                                        name="cvc"
                                        className="frm-ctrl"
                                        placeholder="CVC"
                                        pattern="\d{3,4}"
                                        required
                                        onChange={this.handleInputChange}
                                        onFocus={this.handleInputFocus}
                                    />
                                </div>
                                <input type="hidden" name="issuer" value={issuer} />
                                <div className="actionButton">
                                    <button className="btn btn-light btCustom">PAY</button>
                                </div>
                            </form>
                            {formData && (
                                <div className="App-highlight">
                                    {formatFormData(formData).map((d, i) => (
                                        <div key={i}>{d}</div>
                                    ))}
                                </div>
                            )}
                            <hr style={{ margin: "60px 0 30px" }} />
                        </div>
                    </div>
                    <div className="columnTwo">
                        <h1>TION</h1>
                        <div>
                            <p>BOOKING DETAILS</p>
                            <div>
                                <p>Username: ADitya</p>
                                <p>booked seats: 1a,1b,1c</p>
                                <hr/>
                                <p>total amount</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}
