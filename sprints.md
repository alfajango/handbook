---
layout: page
title: "Sprints"
description: ""
category: workflow
---
{% include JB/setup %}

## Why is this needed?

Developing with a sprint-based development process will allow us to have more clearly defined goals for a given period of time,
which will help us plan tasks so that we can know what's realistic when planning new tasks.
It also allows us to see if we're getting behind, as soon as we start falling back rather than down the road when it's too late to do anything about it;
if we can know ahead of time when we may need to push out the deadlines for future functionality,
then we can discuss it with the clients then and figure out the best plan.

This helps us plan and manage timelines and
expectations while allowing us to maintain flexibility over the course
of the software development cycle while we build the initial MVP and
beyond for our startups.

## Versions/Sprints in Redmine and Client Dashboard

We use Redmine "versions" as sprints. To allow visibility into sprints,
our Client Tech Status Dashboard shows open tasks grouped by sprint.
Here's what the open tasks and sprints look like in the Dashboard:

![Sprints Client Dashboard](/assets/images/sprints-client-dashboard.png)

Any issue not assigned to a sprint, will show up at the bottom in a section labeled "Backlog".

To add a sprint to a project in Redmine (and thus in the Client Dashboard), go to the "Settings" tab on the left for the project, and then the "Versions" sub-tab, and click "New version".

![Sprints Redmine Manage](/assets/images/sprints-redmine-manage.png)

Give the sprint a name, preferably something that makes it easy to understand the order with other sprints, and also include the date in the name, so that it shows up in drop-down menus and in the Client Dashboard. Also select the date (probably a Monday) for the sprint.

![Sprints Redmine Create](/assets/images/sprints-redmine-create.png)

Now, when creating or editing an issue, you can assign it to a sprint by selecting it's "Target version":

![Sprints Redmine Assign Issue](/assets/images/sprints-redmine-assign-issue.png)

Issues can also be assigned to sprints in bulk via the context menu:

![Sprints Redmine Mass-assign Issue](/assets/images/sprints-redmine-mass-assign-issue.png)

We also have a new Redmine tab for each project called "Dashboard", which gives us a sort of Kanban board that makes it easy to view tasks assigned to any given sprint.
