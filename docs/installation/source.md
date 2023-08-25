---
title: Installation
description: Install mylar3 using the source
---
# Install From Source

## Requirements

Besides the [base requirements](base_requirements), this method optionally depends on [git](https://www.git-scm.com) and using a [virtualenv](https://docs.python.org/3/library/venv.html)

## Using a Download {#install-source-download}

1. Download a zip of the source
    * [stable](https://github.com/mylar3/mylar3/archive/refs/heads/master.zip)
    * [development](https://github.com/mylar3/mylar3/archive/refs/heads/python3-dev.zip)
1. Unpack in a directory of choice
1. 

## Using git
1. Clone the repository
    * stable - ```git clone -b master git@github.com:mylar3/mylar3.git```
    * development - ```git clone -b python3-dev git@github.com:mylar3/mylar3.git```

## Install requirements

Install the requirements with pip ```pip3 install -r requirements.txt```

**WINDOWS USERS** - If the above fails, run ```py -m pip install -r requirements.txt```.

## Done. What now?

See the [starting](running) instructions!