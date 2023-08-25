# [API] regenerateCovers

**action**: regenerate the image covers for series in the watchlist in a single-threaded background job.

**restrictions**: 
* 4 second pause between each individual image retrieval to try not to hammer CV with requests.
* argument provided will restrict the data-set.

**argument required**

* ``id`` --> _(only one may be chosen)_:

  * A specific comicid _(not 4050-XXXXXX, but just XXXXXX)_

  * in list format _**[ (XXXXX, XXXXX, XXXXX) ]**_

  *  ``missing`` --> will perform action on all series that do not currently have a cover image file.

  *  ``all`` --> will perform action on all series in the watchlist.

response Type: json

**example calls (with responses):**

`http://localhost:8090/api?cmd=regenerateCovers&id=missing&apikey=<apikey>`
```JSON
 {
  "success": true, 
  "data": "RegenerateCovers successfully submitted for 55 series."
 }
```
`http://localhost:8090/api?cmd=regenerateCovers&id=all&apikey=<apikey>`
```JSON
{
 "success": true, 
 "data": "RegenerateCovers successfully submitted for 1064 series."
}
```
`http://localhost:8090/api?cmd=regenerateCovers&id=38911&apikey=<apikey>`
```JSON
{
 "success": true, 
 "data": "RegenerateCovers successfully submitted for 1 series."
}
```
`http://localhost:8090/api?cmd=regenerateCovers&id=[(38911,38912,47182,83891,112191)]&apikey=<apikey>`
```JSON
{
 "success": true, 
 "data": "RegenerateCovers successfully submitted for 5 series."
}
```
