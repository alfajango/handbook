---
layout: page
title: "Setting Up Google Apps Email"
description: ""
---
{% include JB/setup %}
1. Verify domain ownership in Google Apps settings.
2. Set up email for domain.
  1. Create MX host records
     ![MX Records DNS](/assets/images/mx-records-dns.png)
  2. Set up authentication with DKIM key
     ![Google Apps Gmail DKIM Settings](/assets/images/google-apps-gmail-dkim-settings.png)
  3. [Set up SPF record](https://support.google.com/a/answer/178723?hl=en)
     ![Email DKIM SPF TXT DNS](/assets/images/email-dkim-spf-txt-dns.png)

3. Set up SPF with server (SendGrid, Mailgun, etc.)
  1. If using Sendgrid, use smtpapi header to bypass subscription list email
     features for new user (confirm and reset_password) emails
  2. Update SPF record to allow for sending from server
     Note that only one SPF record should exist, may need to update it
     with multiple domains, e.g.:
     `v=spf1 include:_spf.google.com include:sendgrid.net ~all`
     ![Email DKIM SPF TXT DNS](/assets/images/email-dkim-spf-txt-dns.png)
  3. Set up DKIM authentication key with server.
     On SendGrid, [see DNS Records section](http://sendgrid.com/docs/User_Guide/whitelabel_wizard.html).
     Also for SendGrid, from Apps > DKIM Settings, click "Set the DKIM domain to match the FROM
     domain", or enter "sendgrid.me" as the domain and set the appropriate CNAME DNS records.
     ![SendGrid DKIM Settings](/assets/images/sendgrid-dkim-settings.png)
     ![Email DKIM CNAME DNS](/assets/images/email-dkim-cname-dns.png)
