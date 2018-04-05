import React from 'react';
import { Link } from 'react-router-dom';
import ShippingBilling from './shipping.jsx'

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
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
          First Name:
          <input type="text" value={this.state.firstName} onChange={(event) => { this.handleChange(event, 'firstName'); }} />
        </label>
        <label>
          Last Name:
          <input type="text" value={this.state.lastName} onChange={(event) => { this.handleChange(event, 'lastName'); }} />
        </label>
        <label>
          Email:
          <input type="text" value={this.state.email} onChange={(event) => { this.handleChange(event, 'email'); }} />
        </label>
        <label>
          Password:
          <input type="text" value={this.state.password} onChange={(event) => { this.handleChange(event, 'password'); }} />
        </label>
        <button><Link to="/checkout/Shipping and Billing">Continue</Link></button>
      </form>
    );
  }
}

export default CreateAccount;
