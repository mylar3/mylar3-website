---
title: Frequently Asked Questions (FAQ)
---

- Using DDL, Mylar can't find a comic even though it's there
- Enabling year removal doesn't give me the results I want
- The series is named something different than what mylar says - how can I fix it?

**- Mylar can't find a comic with DDL as a provider, even though the comic name, when searched via browser on GetComics.info gives 1 result with a Direct Download link**

Searches done by Mylar using DDL iterate over various combinations of the comicname, issue number, year and the book type.  Sometimes changing the comic type can make it get snatched and downloaded. For example, from One-Shot to TPB, : `Edit Settings` --> `Force-Type (original:One-Shot)` --> `TPB`. Or sometimes checking `Accept all booktype search matches` can make it work.

![158106353-f380d201-a3f7-4b52-b1c9-8f695e27d398](https://user-images.githubusercontent.com/909424/158455173-fb89e6e3-2593-4f37-82cd-2ce76f42cebc.png)

---


**- I selected `Year Removal` on `Edit Settings` on my comic, yet it didn't do anything when searching for downloads.**

`Year Removal` only works for `print` volumes. If it's a non print, usually there's no issue number so it uses the year to help determine if it's provided.

---

**- The _ComicVine_ name of my comic yields no results from DDL. But if I could change the name of the comic it would get a match on DDL**

You can use the `Alternate Search Name` on `Edit Settings` to set up an alternative name to be used when searching for that issue on DDL. You can have multiple Alternate Search Names by separating each with ``##``. If you would like one name in particular to be used first above everything else (even the CV name), put ``!!`` in front of the name in the Alternate Search Names field. 
