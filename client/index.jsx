import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Checkouts from './components/checkout.jsx';

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/checkout">Checkout</Link></li>
      </ul>
      <hr />
      <Route path="/checkout" component={Checkouts} />
    </div>
  </Router>
)
export default BasicExample

ReactDom.render(<BasicExample />, document.getElementById('app'));
