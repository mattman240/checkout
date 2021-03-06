import React from 'react';
import { Link } from 'react-router-dom';
import saveData from '../saveData.js'

class ShippingBilling extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address1: '',
      address2: '',
      city: '',
      state: '',
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
    saveData(this.state, '/shipping');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Address line 1:
          <input type="text" value={this.state.address1} onChange={(event) => { this.handleChange(event, 'address1'); }} /><br />
        </label>
        <label>
          Address line 2(if applicable):
          <input type="text" value={this.state.address2} onChange={(event) => { this.handleChange(event, 'address2'); }} /><br />
        </label>
        <label>
          City:
          <input type="text" value={this.state.city} onChange={(event) => { this.handleChange(event, 'city'); }} /><br />
        </label>
        <label>
          State:
          <input type="text" value={this.state.state} onChange={(event) => { this.handleChange(event, 'state'); }} /><br />
        </label>
        <label>
          Zip Code:
          <input type="text" value={this.state.zip} onChange={(event) => { this.handleChange(event, 'zip'); }} />
        </label>
        <button onClick={this.handleSubmit}><Link to="/payment">Continue</Link></button>
      </form>
    );
  }
}

export default ShippingBilling;
