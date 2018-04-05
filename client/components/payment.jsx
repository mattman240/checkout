import React from 'react';
import { Link } from 'react-router-dom';

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creditCard: '',
      experation: '',
      cvv: '',
      billingZip: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, eventName) {
    this.setState({
      [eventName]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Card Number:
          <input type="text" value={this.state.creditCard} onChange={(event) => { this.handleChange(event, 'creditCard'); }} /><br />
        </label>
        <label>
          Experation Date:
          <input type="text" value={this.state.experation} onChange={(event) => { this.handleChange(event, 'experation'); }} /><br />
        </label>
        <label>
          CVV:
          <input type="text" value={this.state.cvv} onChange={(event) => { this.handleChange(event, 'cvv'); }} /><br />
        </label>
        <label>
          Billing Zip Code:
          <input type="text" value={this.state.billingZip} onChange={(event) => { this.handleChange(event, 'billingZip'); }} />
        </label>
        <button><Link to="/checkout">Purchase</Link></button>
      </form>
    );
  }
}

export default Payment;
