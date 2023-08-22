## Moving to a new filesystem?
- Make sure that the Comic Location path in the Mylar GUI is pointing to the original location where the comics were previously stored
- Shutdown Mylar and edit the config.ini file
- In the config.ini, and find the [Update] section (if you're running an up-to-date version of Mylar). If you're not up-to-date on either branch, either update prior to doing this, or just search for the variables as they're mentioned
- Set the variables to the following:
  - locmove = True
  - new_comdir to the location of where the new comics will be located
  - fftonewcom_dir = True if you have special folder formatting that involves subdirectories (ie. your folder format is set to $Publisher/$Series kinda thing...)
- Now when you start up Mylar it will convert all the database locations from the original path to the new_comdir path. Once it's finished, you can verify it worked by just going into a few series and making sure they're pointing to the correct location.
- Change the Comic Location path in the GUI to the new location path. Save the config.
- Once it's converted, the locmove value will be automatically set back to a False value so that the process doesn't run on every startup sequence thereafter.

- Just keep in mind that at this stage, it's just changing the location in the database - it's not creating/moving directories at all. If however, the directories don't exist in the new location, when Mylar attempts to update the series via either a Refresh or via automated scheduling, it will create the directory in the new location. If the creation of directories is something that you don't really want/need - Mylar will only create them when it needs to put an issue in the given series directory if you have the create_folders option in the config.ini set to a value of False. Otherwise, by default it's set to True, it will create if they don't exist (when Refreshing/Adding).

