---
title: Debug Logging
---

Debug (sometimes we call it Verbose) logging logs more detailed information to the log files from the point of activation. 

The point of activation is either on startup, or while Mylar is running.

## How to enable Debug logging
There are 3 ways to enable debug logging:

1) [**Activation: startup**] Use the **-v** switch on the command line when you execute Mylar (ie. _python Mylar.py -v_)

2) [**Activation: startup**] In the config.ini file, change the **log_level** to a value of **2** (ie. _log_level = 2_)

3) [**Activation: running**] In the GUI, go to the **History tab / View Logs button / Toggle Debug Logging ON**. You'll get a brief message in the logs (on that same page) indicating that verbose/debug logging has been enabled for the session.

Keep in mind that options 1 & 2 are persistent thru restarts of Mylar. Option 3 will revert back to whatever you have started Mylar with on the next restart.

Also, if you use the command line option that will over-ride whatever value you have in the config.ini.
