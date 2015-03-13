---
layout: page
title: "The Tech Status Dashboard"
description: ""
category: workflow
---
{% include JB/setup %}

## Why is this needed?

As we've worked with many founders and startups over the years, we realized we were spending fair amount of time just keeping everyone synced with what we're working on and the status of everything in the dev pipeline.
This is time we're not talking about important stuff, like new ideas for the site and the company in general.
Internally, we have our own custom issue tracking software, time-tracking and invoicing software, and a few others, keeping us all synced and on top of things.
But that doesn't really help you until we send an email, or have a call, or send you an invoice.

So, we put our heads down and got to work. Our founders and startups can
now log into our Tech Status Dashboard:

https://dashboard.alfajango.com

![Client Dashboard](/assets/images/client-dashboard.png)

It's a single-page status dashboard for startup software development, which gives an up-to-date look into your startup's development cycle at a single glance.
It pulls data directly from the real-time APIs in the apps we use to manage projects internally.

## Widgets

The Dashboard is made up of widgets, each showing valuable information
that helps you stay up-to-date and involved with the development of your
startup's software:

### Open Tasks

These are open tasks from our issue tracker.
"Open" tasks are tasks that are upcoming, in progress, recently completed, or awaiting approval.
If it's not in this list, then it's probably not on our radar (unless we just discussed it, in which case, we probably just haven't added it yet).
If you see something missing that should be there, let us know!

![Client Dashboard Open Tasks](/assets/images/client-dashboard-open-tasks.png)

### Unresolved Errors

These are errors from our error tracking app (hooked into the Carcode app), which have occurred in staging or production.
Each unresolved error should correspond to an issue ticket.
If that issue ticket is "Awaiting Approval", then we should talk.
We can usually give you a good idea of the criticality of an error.

Ideally, errors don't happen in production. But when building new MVPs, it's sometimes inevitable.
The important thing is to proactively monitor for any errors so that we can easily fix those errors, often before
users have even had a chance to let you know.

![Client Dashboard Unresolved Errors](/assets/images/client-dashboard-unresolved-errors.png)

### Invoice Amount

This is the running total for the upcoming invoice, pulled directly from our time-tracking and invoicing app, so you'll never be surprised by an invoice.

![Client Dashboard Invoice Amount](/assets/images/client-dashboard-invoice-amount.png)

### Site Status

Our uptime-monitoring application monitors your site to alert us if and
when it goes down for any reason, so we can spring into action.

![Client Dashboard Site Status](/assets/images/client-dashboard-site-status.png)

### Test Suite

This tells you the current build status (passing or failing) for your
automated test suite, which programmatically tests the critical
functionality of your application.

![Client Dashboard Test Suite](/assets/images/client-dashboard-test-suite.png)

### Documents

This is a repository of all developer and user documentation for your
application, along with meeting notes. Having it all in one place makes
it easy for you to always refer back to tutorials and how-tos, even from
years ago, and to share documentation with others on your team.

![Client Dashboard Documents](/assets/images/client-dashboard-documents.png)
