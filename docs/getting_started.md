---
title: Getting Started
description: let's get the party started!
---

## Requirements
- At least Python version 3.8.1 - most heavily tested with 3.9.4 (2.x is not supported). If you don't want to bork your system (ie. *nix), read about [pyenv](https://github.com/pyenv/pyenv).
- Unrar (linux/MacOS) or unRaR/winRaR (windows) are required for ComicTagger integration to work. If Unrar/winRaR is not in the system path, the full path to the binary must be specified in the `rar_exe_path` field in **.ComicTagger/settings** located in either the root of Mylar or the user's home directory.
- ComicVine API key (found [here](https://comicvine.gamespot.com/api/)) - program will have limited to no functionality without it

## Installation
- from the root of the mylar installation (the location where you installed Mylar to), run the following command `pip3 install -r requirements.txt` to install all required dependencies not included. 
- Note Windows users may need to run `py -m pip install -r requirements.txt` if the above fails.
- Prefer Docker? Take a look over [here](https://docs.linuxserver.io/images/docker-mylar3)! 

## How to start Mylar
Depending on your version of python, and how many different versions you have installed on your machine - executing the python command itself may be different than normal. 

Typically this is either ``python`` or ``python3`` - however in some cases, ``python3.9`` or ``python39`` may also work (as an example if you had python3.9 installed, other versions you would just change out the 3.9/39 for that version). Note that this will normally coincide with the pip command above - _python3 = pip3_, _python3.9 = pip3.9_, _python = pip_, etc

From a command prompt/shell, and from within the Mylar program directory - type in ``<python executable> Mylar.py`` where _python executable_ is ``python``, ``python3``,etc as previously mentioned above

Once it's started, check out the wiki entry on [Basic Usage](https://github.com/mylar3/mylar3/wiki/Usage#basic-usage)
