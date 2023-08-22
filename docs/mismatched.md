---
title: Mismatched Status
---
## mismatched - what?
When viewing the weekly pull, one might see one or several status' that show a ```mismatched``` status.

The idea being that the ```mismatched``` status tells you that it's currently a broken match, and it is meant to show that the site that Mylar retrieves the weekly pull list information from has incorrectly linked a ComicVine ComicID to that mismatched title.

## ok, why?
This usually happens when a new volume of a series starts, or the CV name is different than what the backend has so it can't match up properly. Before the mismatch tag, Mylar would match it incorrectly, which would result in issues being redownloaded or downloaded that were for the wrong series and causing some havoc. This allows us to have a safety catch if you will, to ensure that the right issues get downloaded correctly.

## So how do I fix it?
Eventually Mylar will get it straightened out - usually when CV updates their end (or someone else reports it as a mismatch and we update it accordingly on the backend).

There are some cases however that requires manual intervention - in which case if you happen to see a Mismatched tag and it doesn't clear off after a while (~ day or so depending on if it's a Wednesday or not), it needs to be manually corrected on the backend.

In these cases, we're asking to just submit an issue on github or a forum post and we'll correct it as soon as we can (or even better, hop on discord and tag the title in the _#comicvine-mismatches_ channel).
