import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payments extends Component {
    render() {
      return (
        <StripeCheckout
          name="Feedback Collector"
          description="$5 for 5 survey credits"
          amount={500}
          token={token => this.props.handleToken(token)}
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
          <a className="btn red red-text lighten-5"><i className="material-icons left">add_circle_outline</i>Add Credits</a>
        </StripeCheckout>
      );
    }
}

export default connect(null, actions)(Payments);