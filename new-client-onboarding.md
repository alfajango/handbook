---
layout: page
title: "New Client Onboarding"
description: ""
category: For Employees
tags:
  - workflow
---
{% include JB/setup %}

1. <label class="checkbox"><input type="checkbox"> Add Client to Cashboard.</label>
2. <label class="checkbox"><input type="checkbox"> Create new project from estimate in Cashboard.</label>
  1. Navigate to the project's estimate.
  2. Click the menu button in the upper right.
  3. In the drop-down, click "Create Project From Estimate".
  ![New Client Cashboard Create From Estimate](/assets/images/new-client-cashboard-create-from-estimate.png)
3. <label class="checkbox"><input type="checkbox"> Create new project in Redmine.</label>
4. <label class="checkbox"><input type="checkbox"> Import initial tasks in Redmine from Cashboard.</label>
  1. Navigate to the project's issues list.
  2. In the right column, click "Import from Cashboard".
  ![New Client Redmine Import From Cashboard](/assets/images/new-client-redmine-import-from-cashboard.png)
  3. Select the client/project and task list created from the estimate.
  ![New Client Redmine Import From Cashboard Select](/assets/images/new-client-redmine-import-from-cashboard-select.png)
5. <label class="checkbox"><input type="checkbox"> After importing the tasks from Cashboard into Redmine, delete the individual task descriptions from Cashboard.</label>
    The reason this must be done is because if the descriptions are left for the individual tasks in Cashboard, they then come through in the invoice, on every invoice
    that has time logged under that task. This is redundant and takes up space needlessly in the invoice.
  ![New Client Description In Invoice](/assets/images/new-client-description-in-invoice.png)
  1. Go to the project page in Cashboard to view the task list created by step 2 above.
  ![New Client Click Cashboard Task](/assets/images/new-client-click-cashboard-task.png)
  2. Click the body of a task and then click the "Edit" button.
  3. Highlight everything in the description field and delete it, then click Save.
  ![New Client Delete Cashboard Description](/assets/images/new-client-delete-cashboard-description.png)
6. <label class="checkbox"><input type="checkbox"> Create email list for projectname@alfajango.com.</label>
7. <label class="checkbox"><input type="checkbox"> Add Client and Project to Status Dashboard with the following widgets:.</label>
  * Redmine Open Issues
  * Cashboard Uninvoiced Amounts
  * Redmine Documents
8. <label class="checkbox"><input type="checkbox"> Send welcome email.</label>
