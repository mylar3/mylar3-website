# [API] changeStatus

**action**: Change the status of a specific series, or all series from one status to another.

**restrictions**: 
* action will be restricted based on options used.

**argument required**

* ``id`` --> _(only one may be chosen)_:

  * A specific comicid _(not 4050-XXXXXX, but just XXXXXX)_

  *  ``All`` --> will perform action on all series in the watchlist.

* ``status_from`` --> status' to change from

* ``status_to`` --> what the status' will be upon completion

response Type: json

**example call (with response):**

`http://localhost:8090/api?cmd=changeStatus&id=All&status_from=Skipped&status_to=Wanted&apikey=<apikey>`
```JSON
 {
  "success": true, 
  "data": "Updated 55 Issues from a status of Skipped to Wanted."
 }
```
