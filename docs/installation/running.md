---
title: Running Mylar3
description: Running Mylar3 
---


- from the root of the mylar installation (the location where you installed Mylar to), run the following command `pip3 install -r requirements.txt` to install all required dependencies not included. 
- Note Windows users may need to run `py -m pip install -r requirements.txt` if the above fails.
- Prefer Docker? Take a look over [here](https://docs.linuxserver.io/images/docker-mylar3)! 

## How to start Mylar
Depending on your version of python, and how many different versions you have installed on your machine - executing the python command itself may be different than normal. 

Typically this is either ``python`` or ``python3`` - however in some cases, ``python3.9`` or ``python39`` may also work (as an example if you had python3.9 installed, other versions you would just change out the 3.9/39 for that version). Note that this will normally coincide with the pip command above - _python3 = pip3_, _python3.9 = pip3.9_, _python = pip_, etc

From a command prompt/shell, and from within the Mylar program directory - type in ``<python executable> Mylar.py`` where _python executable_ is ``python``, ``python3``,etc as previously mentioned above

Once it's started, check out the wiki entry on [Basic Usage](https://github.com/mylar3/mylar3/wiki/Usage#basic-usage)
