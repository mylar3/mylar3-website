Metadata rules everything - but when it comes to series info it's harder for that information to get passed to individual issues transparently via the typical comicinfo.xml. 

```series.json``` allows any outside application to use the series metadata already gathered and calculated within Mylar outside of the API.

The ```series.json``` physical file resides in a given series' series directory within Mylar.

## Ok - so why do I need it?
The main benefit in using the series.json file is that it is continually being updated by Mylar when anything series related changes on CV. 

It will take any manually edited data (```description```, ```volume```, ```booktype```, and ```status```) within Mylar over what CV has. 

It will also update items dynamically as required (```total issues```, ```publication run```, ```status```).

Other applications that use it will not have to do any calculations or collating on their side, just to get the same numbers which might not be complete (readers that poll existing metadata don't know that there are 6 issues if you only have 1, if it has ended, the complete years when it was published, etc).

## Red, Yellow - what?
On the series detail page for any given series you will see a series.json tag indicator on the right hand side within the Comic Details tab.

**yellow**: a series.json file is present and detected within the series directory.

**red**: a series.json file is not present within the series directory.

Clicking on the series.json tag when it is either colour, will regenerate/create the series.json file.

The colouring will then become **yellow** to indicate that the file has been generated. 

## How do I create it ?
It can be generated (or updated) in one of 3 ways:
- manually Refreshing the series
- automated db Updater scheduled job running daily (where it checks to see if anything has changed on CV related to the series). 
- on the series detail page by clicking directly on the series.json tag.

## Other resources
[[series.json schema]]

[[series.json examples]]

