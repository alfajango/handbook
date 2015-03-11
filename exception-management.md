---
layout: page
title: "Exception Management"
description: ""
---
{% include JB/setup %}

## Why this is needed

Exceptions, when they happen in production or staging, are a big deal. Furthermore, being the experts, it's up to us to relay to the client when they happen, what they mean, how critical they are, and what it's going to take to fix them.

Furthermore, with our client Tech Status Dashboard, the client has a real-time list of all unresolved exceptions, so it's important for us to keep them managed as soon as they come in to Errbit or Airbrake, merging them when appropriate and marking them resolved when we push the fix to staging (for staging exceptions) or production (for production exceptions).

## Exception management process

### Merging exceptions

When a new exception is logged in Errbit, we must first merge it with any existing instances of the same exception. For our purposes, an exception shall be considered "the same as" another exception if they arise from a common point in the codebase. For example, if two different controller actions result in an error, both due to the same line in the same method of some model, those two exceptions should be merged.

To merge an exception:

1. Log into Errbit.
2. Click the app link from the "Apps" list.
3. Check any unmerged instances of the new exception, along with the existing exception to be merged with.
4. Click the "Merge" button.

![Errbit merge exceptions screenshot](/assets/images/errbit-merge-exceptions-screenshot.png)

### Creating a Redmine ticket

Next, a ticket should be created in Redmine to schedule and track the progress in resolving the ticket. This can be done from the exception page in Errbit.

From the app page in Errbit, click the exception from the "Errors" list. If the exception is new and does not yet have any related ticket in Redmine, click the "create issue" button at the top with the Redmine icon. A new ticket will automatically be added to Redmine with a link back to the Errbit exception page.

If the exception already has an associated ticket in Redmine, then type the issue ticket number in the text field next to the "link issue" button, and then click the "link issue" button.

![Errbit add ticket to Redmine](/assets/images/errbit-add-ticket-to-redmine.png)

### Notifying the client

Once the ticket is in Redmine, we should set it to "Awaiting Approval" status, and notify the client. It's important to have a cursory understanding of what caused the issue, how critical the issue is, and what it'll take to fix it, so that we can relay this to the client when notifying them. We need to get approval to prioritize and resolve this ticket like any other ticket.

### Resolving an exception

Once the fix for the ticket has been pushed to staging (for staging exceptions) or production (for production exceptions), log back into Errbit and mark the exception as resolved, by clicking the "resolve" button, either from the Errors page or the specific exception page itself.

**The exception should not be marked as resolved in Errbit until the fix is actually pushed to the environment in which the exception occurred.**
