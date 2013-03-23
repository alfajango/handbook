---
layout: page
title: "Working with Amazon S3"
description: ""
---
{% include JB/setup %}

## Why this is needed

Isolation is needed between client applications to increase security and
decrease vulnerability for each client application should Amazon API
credentials be accidentally leaked or released outside of our control.

## Summary

No individual's global Amazon API credentials (the "key" and "secret")
should ever be needed to allow access to a given S3 bucket from within
an application. Instead, the [Amazon Identity and Access Management
(IAM)](http://aws.amazon.com/iam/) service should be used to create
new credentials for an application's servers (e.g. production, staging,
etc.) and for the app running locally on each developer's machine.

This requires a two-tiered approach from the Amazon IAM dashboard.

## Developer Account

A new User should be created for each developer on the team through the
IAM dashboard. This is done by clicking "Users" in the navigation and
then clicking the "Create New Users" button. Alternatively, it can be
done [via the command line
API](http://docs.aws.amazon.com/powershell/latest/userguide/pstools-iam-new-user-group.html) as well.

Once the user is created, you'll have the ability to download their
credentials which include their user name, and a new security key and
secret token.

All applications will require an Amazon key and secret token to access
the Amazon S3 buckets created for development. All developers should use
their credentials created above for all apps while developing on their
local machines. We'll show below how to give each developer's new IAM
credentials to access the buckets for each application.

![Amazon IAM New User 1](https://s3.amazonaws.com/s3.alfajango.com/aj-gollum/amazon-iam-screenshot-1-user.png)

## Application User

Each application will also need its own IAM credentials created for the
server. We can either create a new user for each server (e.g.
production, staging, continuous integration, etc.), but we find this to
be overkill. Really, we find isolation between clients to be a good
tradeoff between isolation/security and convenience.

So, for each client, create a new user by repeating the steps from above
for creating a new developer account user.

![Amazon IAM New User 2](https://s3.amazonaws.com/s3.alfajango.com/aj-gollum/amazon-iam-screenshot-2-user.png)

## Permissions (via Group)

We now have an IAM user account for each developer and each client. By
default none of these user accounts have access to anything in our
master Amazon Web Services account. So now, we need to grant the
specific S3 permissions to each account. To accomplish this, we will
create a new "Group" for each set of client applications.

To do this, click "Groups" in the IAM dashboard navigation and click the
blue "Create New Group" button. 

![Amazon IAM New Group](https://s3.amazonaws.com/s3.alfajango.com/aj-gollum/amazon-iam-screenshot-3-group.png)

After entering the group name, we'll be prompted to give the group
permissions. This is where we'll grant access to the client's S3
buckets. Select "Custom Policy" and click "Select". Give the policy a
name and in the "Policy Document" field, enter the following JSON
document, modifying with the bucket(s) relevant to the client's
applications (where the example below grants access to two S3 buckets
called "new-client" and "new-client-dev", respectively):

```
{
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "s3:*",
      "Resource": "arn:aws:s3:::new-client*"
    },
    {
      "Effect": "Allow",
      "Action": "s3:*",
      "Resource": "arn:aws:s3:::new-client-dev*"
    }
  ]
}
```

![Amazon IAM New Group](https://s3.amazonaws.com/s3.alfajango.com/aj-gollum/amazon-iam-screenshot-4-group-permissions.png)

## Attach Permissions

Finally, we'll add both the applicaiton user and developer users to the
new group in order to give each access to the buckets, by clicking the
new group, and clicking "Add Users to Group" in the properties window.

![Amazon IAM Add Users to Group](https://s3.amazonaws.com/s3.alfajango.com/aj-gollum/amazon-iam-screenshot-5-group-users.png)

## Final Result

As a result of the above steps, we have now isolated each client's
server such that they have access to their own S3 buckets, but not the
other buckets in our master Amazon AWS account (and also not EC2 and
every other service to which the servers would technically have access
if had we used our own account's global security credentials).

As an added bonus, to add a developer to a new application, we just need
to add their developer account to each new application group. They can
then simply use their same developer account credentials locally for
every app when developing locally on their machine. To remove a
developer from a client's bucket access, just remove their developer
account from that client's IAM group.

