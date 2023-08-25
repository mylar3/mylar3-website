# [API] getWanted

**action**: Display all the items that are in a Wanted status dependent on query type.

**restrictions**: 
* action will be restricted based on options used.

**arguments optional**:

* ``story_arcs`` --> ``true`` / ``false`` --> will include issues in story arcs that are Wanted

**Additional Information**:

* Not including the argument assumes a value of ``false``
* If no arguments are provided, issues and annuals will be returned
* Annual response is dependent on if Annual Integration is enabled.

response Type: json

**example call (with small response - more variables are present, just listing a few for examples):**

`http://localhost:8090/api?cmd=getWanted&issues=True&apikey=<apikey>`
```JSON
{
  "success": true, 
  "data": {
    "issues": [
      {
        "ComicID": "83838",
        "IssueID": "891919",
        "ComicName": "Damage",
        "Issue_Number": "1"
      }
    ],
  }
}
```

`http://localhost:8090/api?cmd=getWanted&issues=True&annuals=True&apikey=<apikey>`
```JSON
{
  "success": true, 
  "data": {
    "issues": [
      {
        "ComicID": "83838",
        "IssueID": "891919",
        "ComicName": "Damage",
        "Issue_Number": "1"
      }
    ],
    "annuals": [
      {
        "ComicID": "18191",
        "IssueID": "828291",
        "ComicName": "Damage Annual",
        "Issue_Number": "1",
        "SeriesName": "Damage",
        "SeriesComicID": "83838"
       }
    ]
  }
}
```

