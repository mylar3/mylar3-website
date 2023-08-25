---
title: Installation
description: github or source
---
# Installation methods

***

<center>Besides the <a href="#base_requirements">base requirements</a>, these methods can optionally depend on <a href="https://www.git-scm.com">git</a> and/or using a <a href="https://docs.python.org/3/library/venv.html">virtualenv</a></center>

<center>If you have multiple python applications on your system, using a virtualenv is recommended.</center>

***

## Source Installation

1. Download the zip of the desired source branch (master / python3-dev):
    * [stable](https://github.com/mylar3/mylar3/archive/refs/heads/master.zip)
    * [development](https://github.com/mylar3/mylar3/archive/refs/heads/python3-dev.zip)
1. Unpack in the directory of your choice
1. See [install requirements](source#installation-requirements)

***

## Git Installation
1. Open up a command prompt/shell.
1. If the directory does not exist in the location where you want the program files to be located, create it.
1. Clone the chosen repository into the given directory once you've changed into the directory:
    * stable - ```git clone -b master git@github.com:mylar3/mylar3.git```
    * development - ```git clone -b python3-dev git@github.com:mylar3/mylar3.git```
1. See [install requirements](source#installation-requirements)

***

## Installation requirements

From a command prompt/shell, change directory into the mylar installation.

Install the requirements with pip ```pip3 install -r requirements.txt```

**WINDOWS USERS** - If the above fails, run ```py -m pip install -r requirements.txt```.

## Done. What now?

See the [starting](running) instructions!
