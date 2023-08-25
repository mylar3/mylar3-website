# [API] refreshSeriesjson

**action**:  refresh / create the series.json files in a threaded background job.

**restrictions**: argument provided will restrict the data-set.

**arguments allowed** _(only one may be chosen)_:
- will accept values in a _list_ format, or a specific _comicid_
- will also accept specific value of:
    - ```missing```-> will perform _action_ on all series that do not currently have a series.json file.
    - ```all``` --> will perform _action_ on all series in the watchlist.
    - ```refresh-missing``` --> as per the ```missing``` value, but will refresh each series in order to make sure data is current.

**response Type**: json

**response**:
- As per [[seriesjsonListing]] API endpoint, with _missing_ either enabled or not depending on the value of _refresh_missing_
- The ```success``` field in response json is the success of the seriesjsonListing endpoint, since the background job is threaded.

**example call**: `http://localhost:8090/api?cmd=refreshSeriesjson&comicid=missing&apikey=<apikey>`
