const sendgrid = require("sendgrid");
const helper = sendgrid.mail;
const keys = require("../config/keys");

class Mailer extends helper.Mail {
  constructor({ subject, recipients }, content) {
    super();

    this.sgApi = sendgrid(keys.sendGridKey);
    this.from_email = new helper.Email("tijana.ilic@iths.se");
    this.subject = subject;
    this.body = new helper.Content("text/html", content);
    this.recipients = this.formatAddresses(recipients);

    this.addContent(this.body);
    this.addClickTracking();
    this.addRecipients();
  }
}

formatAddresses = (recipients) =>
  recipients.map(({ email }) => new helper.Email(email));

addClickTracking = () => {
  const trackingSettings = new helper.TrackingSettings();
  const clickTracking = new helper.ClickTracking();

  trackingSettings.setClickTracking(clickTracking);
  this.addTrackingSettings(trackingSettings);
};

addRecipients = () => {
  const personalize = new helper.Personalization();
  this.recipients.forEach((recipient) => {
    personalize.addTo(recipient);
  });
  this.addPersonalization(personalize);
};

const send = async () => {
  const request = this.sgApi.emptyRequest({
    method: "POST",
    path: "/v3/mail/send",
    body: this.toJson(),
  });

  const response = this.sgApi.API(request);
  return response;
};

module.exports = Mailer;
