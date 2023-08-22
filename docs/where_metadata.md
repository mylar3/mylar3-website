---
title: Where does the metadata come from?
---
Mylar uses ComicVine (CV) for it's metadata (series, issues, etc) and for subsequent updates to said metadata.

When CV updates their data for a particular series/issue, it's also updated within Mylar shortly thereafter. For new issues (ie. weekly pullist) this occurs every 4 hours. For 
issues that are outside of a 2 week window (previous week + current week) window, it updates only the items that have been updated by CV every 24hrs. 

However there are times when CV does not update the issue information that are new for the given week's pullist in a timely manner. When this happens, it may seem that Mylar is 
not post-processing issues, or that it doesn't know what to do with said files if they've already been manually downloaded and/or exist on indexers and Mylar isn't retrieving 
them. 

Because Mylar relies on CV for issue information, it can't handle anything until the relevant issue information has been posted (lately this has become increasingly later in the 
week, sometimes even on the Sunday following the Wednesday new releases). In these cases Mylar knows that an issue is due out for that specific week, but can't verify anything 
against CV - so it changes the status of it to Wanted on the weekly pullist, but does not mark it as Wanted for the actual series (as there is nothing to link it to yet). 

It does create an entry under the Upcoming section in the Wanted tab (at the bottom of the page) to indicate that it's awaiting more information. Once that information has been 
retrieved from CV (by either refreshing the series manually or by letting the pullist refresh every 4 hours automatically), Mylar will move the issue out of the Upcoming 
section and into the Wanted section whereby it can be searched for, post-processed against, etc.

Basically, patience. Sometimes it can take a few extra days for issue information to populate due to CV...

