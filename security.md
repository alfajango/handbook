---
layout: page
title: "Security"
description: ""
---
{% include JB/setup %}

## Why this is needed

We are entrusted with clients' sensitive data and codebase. When collaborating and sharing this information, security is only as strong as the weakest link. It is thus important for every member of our team to exercise the utmost consideration for secure communication and data transmission and storage.

##  Local security

Since we access everything primarily on our own computers and personal devices, it's important to secure them first and foremost.

### Mac

On a Mac, go to System Settings => Security & Privacy, and Turn on FireVault and Firewall. Also set your computer to require a login password. FireVault encrypts your hard drive and keeps it encrypted using your system password.

### Android

Go to the Android Settings => Location & Security => Data Encryption, and check both "Device data encryption" and "Storage encryption". This will require you to enable the screen lock with a pattern, PIN, or password. Choose one and enable that as well.

### iPhone

Go to Settings => General => Passcode Lock, enable it, and make sure that Data Protection is enabled. This provides limited data encryption.

### All devices

Make sure all devices are configured with an auto-lock of a few minutes or less.

## Service-related security aspects

The two mains aspects of security to keep in mind when talking about third-party services are a) authentication, and b) data access and transmission.

### Authentication

It's important to make sure others cannot log into your account. Almost all accounts use a username (or other identifier) + password combination to authenticate a user and give access to the account.

User/password credentials can be sniffed over unsecure networks, brute-forced, reset, compromised via social engineering, or even used by stealing a computer or mobile device which has the password cached or remembered.

#### Unique, hard-to-guess passwords

Even if you're careful with your passwords and only use them over secure networks, etc., you don't necessarily know how each application stores your credentials. If just one of them stores your password insecurely or gets hacked, your other accounts could be at risk if they use the same password.

Even if an application encrypts your stored password on the back-end, if your password is made of simple words and numbers, and if the application doesn't use a strong salt, your password could be guessed with a dictionary attack.

That's why it's important to use hard-to-guess passwords that are unique for each and every application.

Of course, it'd be nearly impossible for you to remember all your unique hard-to-guess passwords. That's what password managers are for! [LastPass](https://lastpass.com/) works really well across platforms (including Windows, Linux, Mac, iOS, and Android). And the premium version is only $1/mo after a 14-day free trial.

Password managers also make it trivially easy to update and change your passwords from time to time, for added security.

#### Two-factor authentication

Unique, secure passwords are great, but what if your password is still hacked, or someone manages to reset your password to log in without your knowledge? The next easiest, most widely deployed method of securing authentication is two-factor authentication. Wherever, two-factor authentication is available, it should be enabled. [Read this great FAQ by Google's own Matt Cutts](http://www.mattcutts.com/blog/google-two-step-authentication/).

If passwords identify you by what you know, then two-factor authentication also identifies you by what you have. It does this by sending a code to some device you have, either a key fob or your mobile phone. The important thing is that the sending of this code happens "out of band", meaning *not* through the same pipes through which you're logging in. When sent to your mobile device, this can usually be done either via SMS text message or with a smart phone app. However, SMS isn't very secure, so it's recommended to use an app, such as [Google Authenticator](http://code.google.com/p/google-authenticator/) or [Duo Push](http://www.duosecurity.com/duo-push).

#### Oauth and third-party access

There are tons of 3rd-party applications which integrate with other applications you use every day. Some of them ask for your username and password in order to gain access to your account for integration. Don't do it!

They may be completely trustworthy and the new greatest thing. But if they need your username / password in order to integrate, then they must store them in plain text or with some other easily reversible encryption method, in order to be able to use your credentials to log into your account. It's not worth the risk.

This is where Oauth and other 3rd-party approval processes come in. The main characteristics is that they provide unique access to 3rd-party applications (i.e. the host application understands the difference and manages the 3rd-party app's access vs. your own direct authentication), which can be easily revoked on a per-application basis at any time. For some apps which absolutely require login credentials (such as Sparrow or Outlook for email), Gmail at least has another section under "Security => Authorizing applications and sites", which allows you to generate unique passwords for each application, which track that application's access and can easily be revoked at any time.

## Secure applications

Here are a list of applications, in decreasing importance, for which extra consideration should be taken to maximize security.

### Password Manager

Obviously, your password manager is the gateway to all other account credentials, so make sure it's secure! Use a unique, hard-to-guess password (albeit one you can actually remember since you can't use the password manager to remember it for you), and also set up two-factor authentication!

### Email

The next most important application to secure is email. Email is used as your unique account identifier across almost all other accounts, and is used as the primary vehicle by which to reset your passwords to gain access to any other account. 

If you're using Gmail or Google Apps for Domain, go to [Account Settings => Security](https://www.google.com/settings/security), and enable two-factor authentication. Also, use per-application password tokens for 3rd-party apps where Oauth isn't possible.

Furthermore, email is not an inherently secure means of communication. Between you and your recipient(s), it bounces across many different access points proxies. So never transmit any extremely sensitive data, such as social security numbers, login credentials, passwords, or files which aren't encrypted.

To transmit secure files, it's recommended to encrypt the file with a password (possible with PDFs), and then transmit the password to the recipient out-of-band, e.g. via phone or text.

Also, [PGP](http://en.wikipedia.org/wiki/Pretty_Good_Privacy).

### Hosting

Hosting accounts are important to secure, as they contain data for site user's which must be protected.

For VPS's, setup SSH on a non-standard port, configure SSH-key-pair authentication, and disable password-based SSH access.

For managed hosting accounts, such as Heroku and Amazon AWS, use unique, secure passwords and configure two-factor authentication if available.

### Source code repositories

Source-code repositories are important to secure, since they contain all the proprietary source code for our clients.

Use unique, secure passwords and configure two-factor authentication if available.

### Dropbox

Obviously, shared files are important to secure. Dropbox just released two-factor authentication.

Visit [this link](https://www.dropbox.com/try_twofactor) to add the two-factor option to your security settings. Then scroll to the bottom of the page and enable it.

### Everything else

And of course, if it's important enough to require authentication, then it should be considered important to secure. Twitter, blogs, etc., make sure you're using unique, secure passwords and not sharing any credentials via insecure communication methods.
