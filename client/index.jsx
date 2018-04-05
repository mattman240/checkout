import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Checkouts from './components/checkout.jsx';
import ShippingBilling from './components/shipping.jsx'
import CreateAccount from './components/account.jsx';
import Payment from './components/payment.jsx'

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/checkout">Checkout</Link></li>
      </ul>
      <hr />
      <Route path="/checkout" component={Checkouts} />
      <Route path="/billing" component={ShippingBilling} />
      <Route path="/create account" component={CreateAccount} />
      <Route path="/payment" component={Payment} />
    </div>
  </Router>
)

ReactDom.render(<App />, document.getElementById('app'));
