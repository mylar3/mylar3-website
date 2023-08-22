---
title: Helpful hints
---
- Ensure `Comic Location` is specified in the configuration (_Configuration --> Web Interface --> Comic Location_)
  - Mylar auto-creates the comic series directories under the Comic Location. The directory is displayed on the Comic Detail page).
  - If you do not want directories to be created until there are issues present, set `create_folders = False` in the config.ini.
- A search provider needs to be specified to perform any search-related functions
- Enabling `Automatically Mark Upcoming Issues as Wanted` in settings will mark any **NEW** comic from the Pullist that is on your 'watchlist' as wanted
- Add a comic (series) using the Search button or via the Weekly tab (which shows the weekly Pull-list). 
- If you know the CV comicid, enter the full id into the search box (ie. `4050-XXXXX`)
- If adding a comic fails with "Error", submit a bug and it will be checked out (usually an easy fix)
- Post-Processing is for adding new issues into existing series on your watchlist, Import is for adding files for series that don't exist on your watchlist into your watchlist
- For the most up-to-date build, use the python3-dev build
  - Master doesn't get updated as frequently (> month), and python3-dev is more-or-less stable
- If your comic collection resides on a different computer than your Mylar installation and you have that location as your ComicLocation path - turn OFF enforce permissions (Mylar cannot enforce permissions across different systems).