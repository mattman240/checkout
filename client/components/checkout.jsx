import React from 'react';
import { Route, Link } from 'react-router-dom';
import CreateAccount from './account.jsx';

const Checkout = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
    <CreateAccount />
  </div>
)

const Checkouts = ({ match }) => (
  <div>
    <h2>Checkout</h2>
    <ul>
      <li>
        <Link to={`${match.url}/Create Account`}>
          Create An Account
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Checkout}/>
    <Route exact path={match.path} render={() => (
      <h3>Please create an account to get started</h3>
    )}/>
  </div>
)

export default Checkouts;
