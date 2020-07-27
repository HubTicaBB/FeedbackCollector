import React from "react";

const Landing = () => {
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <img src="./banner.jpg" alt="banner" />
          <span className="card-title">Transform feedback into growth for your organization</span>
        </div>
        <div className="card-content" style={{textAlign:"center"}}>
          <h4>Powerful features built for business, designed for people, loved by teams</h4>
          <div className="row" style={{margin:"3rem"}}>
            <div className="col s12 m4">
              <div className="center promo">
                <i className="large material-icons red-text text-lighten-2">business</i>
                <h5 className="red-text text-lighten-2">Administration and governance</h5>
                <p className="light ceneter">Gain visibility and control over data and users with centralized administration; use global settings to establish and maintain standards</p>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="center promo">
                <i className="large material-icons red-text text-lighten-2">lock</i>
                <h5 className="red-text text-lighten-2">Enhanced security and compliance</h5>
                <p className="light ceneter">Secure sensitive survey data with SSO, data encryption, and access controls; keep data compliant with HIPAA, and GDPR features</p>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="center promo">
                <i className="large material-icons red-text text-lighten-2">api</i>
                <h5 className="red-text text-lighten-2">Integrations and APIs</h5>
                <p className="light ceneter">Bring survey data into 100+ business-critical apps you already use, including Salesforce, Marketo, PowerBI, Tableau, and more</p>
              </div>
            </div>
          </div>
          <div className="row" style={{margin:"3rem"}}>
            <div className="col s12 m4">
              <div className="center promo">
                <i className="large material-icons red-text text-lighten-2">group_add</i>
                <h5 className="red-text text-lighten-2">Collaboration at scale</h5>
                <p className="light ceneter">Design surveys together, share multiple surveys to a Workgroup, and easily set roles and permissions to promote collaboration</p>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="center promo">
                <i className="large material-icons red-text text-lighten-2">lock</i>
                <h5 className="red-text text-lighten-2">Enhanced security and compliance</h5>
                <p className="light ceneter">Secure sensitive survey data with SSO, data encryption, and access controls; keep data compliant with HIPAA, and GDPR features</p>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="center promo">
                <i className="large material-icons red-text text-lighten-2">api</i>
                <h5 className="red-text text-lighten-2">Integrations and APIs</h5>
                <p className="light ceneter">Bring survey data into 100+ business-critical apps you already use, including Salesforce, Marketo, PowerBI, Tableau, and more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
