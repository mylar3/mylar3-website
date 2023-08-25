# [API] seriesjsonListing

**action**:  A listing of all series containing a series.json file.

**restrictions**: argument provided will restrict the data-set.

**arguments allowed** :
- ```missing```-> will perform _action_ on all series that do not currently have a series.json file.

**response Type**: json

**response Schema**:
```
{
 "$schema": "https://json-schema.org/draft/2020-12/schema",
 "title": "seriesjsonListing",
 "type": "object",
 "properties": {
   "success": {
     "type": "boolean",
     "description": "success status of API job."
   },
   "data: {
     "type": "object",
     "properties": {
       "ComicID": {
         "type": "string",
         "description": "the comicid of the series."
       },
       "ComicLocation": {
         "type": "string",
         "description": "the folder path to the specific series."
       },
   },
 },
}
```
**example call**: `http://localhost:8090/api?cmd=seriesjsonListing&apikey=<apikey>`

**example response**:

```JSON
{
 "success": true, 
 "data": [
   {
     "ComicID": "3727", 
     "ComicLocation": "/comics/Superhero_Name-(2012)"
   },
   {
     "ComicID": "63681",
     "ComicLocation": "/comics/Bigger_Supehero_Name-(2013)"
   },
   {
     "ComicID": "83922",
     "ComicLocation": "/Comics/Shorty-(2012)"
   },
   {
     "ComicID": "37781",
     "ComicLocation": "/Comics/Faith-(2021)"
   }
 ]
}
```
