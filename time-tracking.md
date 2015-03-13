---
layout: page
title: "Time Tracking"
description: ""
category: workflow
---
{% include JB/setup %}

## Why this is needed

Invoices go out to clients with itemized time entries, meaning clients see your time entry notes. The notes should clearly and succinctly describe how the time was spent.

## Logging time from git commits

If following the Git Commit Guidelines, you could simply copy/paste your git commit messages into your time-tracking notes. For this, I've created a script which automatically outputs your git commit messages in bullet-point format, for easy copy/paste.

Put this in your bash profile:

```
alias gitsum='git log --pretty=format:"* %s" --author `git config user.email`'
```

Then, from the git repo in your command line:

```
gitsum --since 1.day
```

This will output all short-version git commit messages you authored in the past day. You'll get an output like this:

```
* AJ-229 Updated style for new login form label
* AJ-229 Changed goal view to show name instead of login_name
* AJ-229 Added email to admin member list and passwd_change.
* AJ-229 Converted site to use primary_email as register/login identifier
* AJ-229 Refactored user_mailer.sendConfirmation to user mailer view
```

Note that you can change the `--since` parameter with whatever you want, e.g. `--since=2.hours`, or whatever. Or you can also just limit the number of commits if you know you're logging only your last 2 commits: instead of `--since`, you could do `-n 2`.

And you can use the `pbcopy` command to pipe the output to your clipboard automatically: `gitnotes -n 3 | pbcopy` or `gitnotes --since=1.day | pbcopy`
