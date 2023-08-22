---
title: Download Options
---

## Post-processing
It is imperative that you enable the post-processing option if you require post-processing (_Configuration --> Quality & Post-Processing --> Enable Post-Processing_)

### DDL
When using DDL, post-processing will be initiated immediately upon successful completion. By default the items are downloaded to the cache directory location and removed after post-processing. However, if you wish to change the default directory location, specify the full directory location in the config.ini `ddl_location` field.

### Newsgroups
There are 2 ways to perform post-processing within Mylar (CDH & ComicRN detailed [here](https://github.com/mylar3/mylar3/wiki/CDH-or-ComicRN)), however you cannot use both options simultaneously. 

### Torrents
There is no completed processing for torrents. There are methods available however:

**Torrent client on same machine as Mylar installation**
- _Configuration tab --> Quality & Post-Processing --> Post-Processing_
- set the post-processing action to copy if you want to seed your torrents, otherwise move
  - Enable Folder Monitoring
  - Folder location to monitor: set to the full location where your finished torrents are downloaded to.
  - Folder Monitor Scan Interval: do NOT set this to < 1 minute. Anywhere from 3-5 minutes should be ample.

**Torrent client on different machine than Mylar**
- Use [harpoon](https://github.com/evilhero/harpoon/) to retrieve items back to your local install as soon as they are completed and have post-processing occur immediately (also works with other automated solutions).
- Any other method that involves having the files localized and then have Folder Monitor monitor the location for files.

**Torrent client (rtorrent/deluge) on different machine than Mylar**
- a built-in option for these clients that will monitor for completion and then perform post-processing on the given items.
- files are located in the `post-processing/torrent-auto-snatch` location within the mylar directory.
- read the read.me therein for configuration / setup.
