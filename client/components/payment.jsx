import React from 'react';
import { Link } from 'react-router-dom';
import saveData from '../saveData.js'

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creditCard: '',
      experation: '',
      cvv: '',
      zip: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, eventName) {
    this.setState({
      [eventName]: event.target.value,
    });
  }

  handleSubmit() {
    saveData(this.state, '/payments');
  }

  render() {
    return (
      <form>
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
          <input type="text" value={this.state.billingZip} onChange={(event) => { this.handleChange(event, 'zip'); }} />
        </label>
        <button onClick={this.handleSubmit}><Link to="/checkout">Purchase</Link></button>
      </form>
    );
  }
}

export default Payment;
