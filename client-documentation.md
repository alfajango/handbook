---
layout: page
title: "Client Documentation"
description: ""
---
{% include JB/setup %}

Why is this needed?
---------------------------

Right now, when we build new functionality, we usually send an email to the client with a writeup, screenshots, and/or a screencast showing them how to use the functionality. This works great in the short-term for showing the client how to use their app. However, it makes it difficult if they forget how to use some particular feature in their app e.g. a year later, or if they or we need to share that knowledge with a new team member, as it becomes buried somewhere in our email history.

And yes, I see the irony in sending an email documenting our new process that replaces sending email documentation. Our own documentation lives at handbook.alfajango.com, so I’ll add all this there after we’ve used this process with our clients for a while and formalized it a bit more, as I think we’ll be able to find a few more optimizations that we can make.

Preferably, we’d be able to have a sort of documentation warehouse, where all of their documentation can be accessed in one place, where it’s easy to find, revisit, and share. So, that’s what we have now!

Creating a new Document
-----------------------------------

To create the documentation, we can use the built-in Redmine “Documents”. Each project will now have a “Documents” tab on the left side, and then click “New document”.

![Redmine Documents](/assets/images/documents-redmine.png)

Under “Category”, you can select between “User Documentation” for user and interface tutorials, “Technical Documentation” for other developers, and “Meeting Minutes”, which is where we can now keep meeting notes for every meeting as well.

![Redmine Create Document](/assets/images/documents-redmine-create.png)

If you want to add screenshots, you can browse to them in the file selector at the bottom. To add the screenshots inline in the documentation, you can use this textile markup after you upload the file (make sure to use the relative path to the file, so that it doesn’t break if we change the URL of our Redmine instance):

```
!/path/to/upload!
```

If you want to add a screencast or video, you can now embed those directly in a document (and also in issue descriptions or comments now if needed) by uploading the video (preferably to YouTube as an “Unlisted” video in our Alfa Jango YouTube account) and then using this markup in Redmine, and it will embed the video directly in the page:

```
{{video(http://youtu.be/XMsPB3fgmf8)}}
```

Both Redmine and the Client Dashboard sort documents alphabetically by title, so if we want documents to show in a certain order, we can title them accordingly. E.g. we can prepend “1., 2. etc.” to the titles, or as I’ve done with GotoProtocol, we can prepend the date to sort documents by date. I think this may be the most useful naming convention, as it also allows anyone new to the project to see the evolution of the product and gives context to help understand when certain documentation may be outdated.

Sharing Documents
---------------------------

Without giving clients direct access to Redmine, they’ll now be able to view their documents in the Client Dashboard with the new “redmine_documents” widget.

I’ve gone back through 2 years of emails to add all of the GotoProtocol documentation I could find to their Redmine documents, and I plan to do the same for all of our other clients as I get time. To see how this looks, you can check out GotoProtocol’s updated dashboard: https://dashboard.alfajango.com/?client_id=517993620f2d4f0200000009

![Client Dashboard Redmine Documents](/assets/images/documents-client-dashboard.png)

If you click on a document, a modal overlay drops down with the full document from Redmine.

![Client Dashboard Document](/assets/images/documents-client-dashboard-show.png)

It also updates the URL in the browser with a direct link to that document, so that we can send direct links to a specific document to the client, and so that they can share the links with other team members who have access to their Client Dashboard (keep in mind that when you’re logged in as an admin in the Client Dashboard, you’ll have the “?client_id=…” parameter in the URL that clients don’t have, so when you send a link to the client, be sure to delete that part from the URL):

![Client Dashboard Document URL](/assets/images/documents-client-dashboard-url.png)

In the future, we may build a back-end that allows us to just CC e.g. “documentation@alfajango.com” on an email that contains documentation or a tutorial, and our back-end app would recognize which client it’s for based on who the recipient is, and would automatically add the documentation to Redmine, and thus the Client Dashboard. Same with meetings@alfjango.com for Meeting Minutes. So, that may be a next step.

For now, we’ll just create the documentation directly in Redmine and then email the client a link to the new document in the Client Dashboard.
