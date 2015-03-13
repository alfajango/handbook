---
layout: page
title: "Git Commit Guidelines"
description: ""
category: workflow
---
{% include JB/setup %}

## Why do we need a defined format?

The idea is that, if we were to bring in someone new to the team, they should be able to look through the git log and get a good idea of what's been happening. Also, if the project were to transition to another team entirely, then the next team should have no problem continuing where we left off.

The person reading through the git log may not have access to our issue tracker. Even if they do, it's a pain to have to switch back and forth between the git log and the issue tracker to figure out what a commit does. For these reasons, it's not enough to simply include a ticket number as the entire git message.

## Sample commit message

If the issue ticket is this:

```
+-------+-------+------------------------+----------+------------------------------------------------------------+
|  254  |  Bug  |  Pushed to Production  |  Normal  |  Importer is not importing timezones for events correctly  |
+-------+-------+------------------------+----------+------------------------------------------------------------+
```

Then the git commit that fixes the bug would be something like this:

```
git commit -m "AJ-254 Added timezone support for importer."
```

In the above commit message:

* We start with the ticket identifier - "AJ" if the ticket is from Alfa Jango's redmine tracker; Venturit's redmine tracker would be "VT".

* Then a short description of what we did, separated from the ticket identifier with a space.

* The first line should be no more than 50 characters. We can then include more detail in new lines in the commit message. 

* Every line after the first should be no longer than 72 characters.

The last two points are simply due to common practice in the open-source git community. However, we won't obsess over it, so don't worry too much if your first line is 62 characters. Just keep these in mind.

## Sample commit message *with description*

```
git commit -m "AJ-110 Made content model deleteable when one left.\
\
Remove logic that prevents delete widget from being drawn."
```

* Notice that we'd include one blank line between the first line (the summary of the commit) and the next lines (the description).

This format will allow us to reference the tickets in our commits without leaving someone clueless if they don't have access to our issue tracker.

## What is a commit?

Each commit should be a self-contained unit of code. This means we should not include code for more than one ticket in a commit. Also, if we can help it, we should try not to have partially working code in a commit.

### A note about "partially working code" in a commit

A commit should be an atomic unit of code. "Atomic" means that checking out that commit should be mostly functional. Of course this won't always be practical.

For example, a task may be most easily broken down into two steps: completely ripping some piece out, and then inserting some other piece. In this case, it's okay to break this into two commits (the first would leave the code in a broken state, the second would fix it) as long as the commit messages are clear about what they did.

Usually things can be broken down into discrete units, which usually becomes somewhat clear when doing test-driven-development (a couple tests written and then made to pass would easily qualify as a discrete unit).

### Still commit often

This doesn't mean you should wait a long time before committing. If you're on a topic branch (which you should be), then it doesn't matter what the commits do or say until they're going to be pulled into master. Therefore, you can commit and push as often as you'd like (push at least once a day).

When it comes time to prepare the branch for a merge, you can do an interactive rebase ([`git rebase -i`](http://gitready.com/advanced/2009/02/10/squashing-commits-with-rebase.html)) to rearrange and squash commits together and edit the commit messages. *Pro-tip, check out a new temporary branch from your current topic branch before doing an interactive rebase; this gives you a backup in case you mess things up in the interactive rebase (which you often will)*.

If you make a commit, and then need to make a quick change and haven't yet pushed your commit to github, consider using [`git commit --amend`](http://nathanhoad.net/git-amend-your-last-commit) to append your new code to the last commit. We should *not* end up with commits in the final git log that say "oops, fixing last commit".

## Edit a git commit

As mentioned above, if you need to edit your last commit, you can use `git commit --amend`. But what if you're not just re-adding a changed file to the commit; what if you added a bunch of files you didn't intend to in the last commit and need to un-add them? You may need to undo and redo the commit entirely (taken from [this StackOverflow post](http://stackoverflow.com/a/927386/366381)):

```
Undo a commit and redo

$ git commit ...
$ git reset --soft HEAD^      (1)
$ edit                        (2)
$ git add ....                (3)
$ git commit -c ORIG_HEAD     (4)

(1) This is most often done when you remembered what you just committed is incomplete, or you misspelled your commit message, or both. Leaves working tree as it was before "reset".

(2) Make corrections to working tree files.

(3) Stage changes for commit.

(4) "reset" copies the old head to .git/ORIG_HEAD; redo the commit by starting with its log message. If you do not need to edit the message further, you can give -C option instead.
```

What if you need to make changes further back in the history, maybe 2 or 3 commits ago? As long as you haven't pushed those commits to the central repo where others may have already pulled them, you can use git rebase interactive ([`git rebase -i`](http://git-scm.com/book/en/Git-Tools-Rewriting-History#Changing-Multiple-Commit-Messages)).

**Note that any time you change a commit, even if just changing the message, it changes the commit SHA, which can cause conflicts if someone else has already pulled or cloned the original commit to their local repo. If you have to do a forced git push (`git push -f`) to the central repo, then that's probably not good.**

## Other git commit message resources:

* [A note about Git commit
  messages](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)

* [Goot git commit message format
  guidelines](http://stackoverflow.com/questions/43598/suggestions-for-a-good-commit-message-format-guideline)

* [Git Flight Rules - what to do when something goes
  wrong](https://github.com/k88hudson/git-flight-rules)
