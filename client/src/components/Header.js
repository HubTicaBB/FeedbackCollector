import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google"><i className="material-icons left">login</i>Login with Google</a>
          </li>
        );
      default:
        return [
          <li key="1"><Payments /></li>,
          <li key="2"><a>Credits: <span class="new badge red" data-badge-caption="">{this.props.auth.credits}</span></a></li>,
          <li key="3"><a href="/api/logout"><i className="material-icons right">exit_to_app</i>Logout</a></li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div class="nav-wrapper">
          <Link to={this.props.auth ? "/surveys" : "/"} class="left brand-logo">
            &nbsp; Feedback Collector
          </Link>
          <ul id="nav-mobile" class="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
