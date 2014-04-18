1. Verify domain ownership in settings.
2. Set up email for domain.
  a. Create MX host records
  b. Set up authentication with DKIM key
  c. [Set up SPF record](https://support.google.com/a/answer/178723?hl=en)
3. Set up SPF with server (SendGrid, Mailgun, etc.)
  a. If using Sendgrid, use smtpapi header to bypass subscription list email
     features for new user (confirm and reset_password) emails
  b. Update SPF record to allow for sending from server
     Note that only one SPF record should exist, may need to update it
     with multiple domains, e.g.:
     `v=spf1 include:_spf.google.com include:sendgrid.net ~all`
  c. Set up DKIM authentication key with server.
     On SendGrid, [see DNS Records section](http://sendgrid.com/docs/User_Guide/whitelabel_wizard.html)
     Also for SendGrid, click "Set the DKIM domain to match the FROM
     domain" from Apps > DKIM Settings
