# Setting up Mylar as a service on Windows

1.  Download [Non-Sucking Service Manager (NSSM)](https://nssm.cc/download) (either 32 or 64-bit pre-release version), and drop the exe into your _C:/Windows/System32_ folder so it can be called from anywhere. Alternatively, you can download it to a specific location and add it to your path or just run it from that location each time.

2. Open an Elevated cmd prompt (run as administrator), then type in:``nssm install Mylar``.

   You can use another service name, but just change step 6 below accordingly. In the GUI that pops up, configure the application as follows:

   > **Path:** _C:\Program Files\Python39\python.exe_ or whatever the filepath to your Python binary

   > **Startup Directory:**  _C:\mylar3_ or whatever the folder location for mylar is.

   > **Arguments:** _Mylar.py_

3. On the Log On tab, make sure to check **Virtual Service Account** to run it as a **VSA**.

4. On the Process tab, _uncheck Console_.  Accept and confirm.

5. Right click your mylar3 folder, click Properties. Go to the Security Tab, and hit Edit.

6. To give your newly created VSA full access to the mylar directory, hit add and type in: ``NT Service\Mylar`` _(or w/e you called the service in step 2)_

   It should find that user object, and give it full permissions. Click save and ok, and it should give all the requisite permissions.

That's it - it's now setup to startup automatically with Windows.

To verify it is - you can click the Start Menu,  type in ``services.msc`` and check to see that Mylar is correctly added.

## Useful NSSM commands: 
``nssm start Mylar``
``nssm edit Mylar``
``nssm stop Mylar``
``nssm restart Mylar`` 
``nssm status Mylar``
***
_credit to @leaderdog for posting this in discord_
