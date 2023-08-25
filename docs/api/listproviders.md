# [API] listProviders

**action**:  display all providers present within Mylar.

**restrictions**: no restrictions due to no arguements.

**arguments allowed**: takes no arguements

**response Type**: json

**example call**: `http://localhost:8090/api?cmd=listProviders&apikey=<apikey>`

**example response**:

```JSON
{
  "success": true,
  "data": {
    "newznabs": [
      {
        "name": "newznab site",
        "host": "https://newznab.host.address",
        "apikey": "newznab_site_apikey_here",
        "categories": null,
        "uid": "28191",
        "enabled": true,
        "id": 2
      },
      {
        "name": "testingnewznab",
        "host": "https://testing.com",
        "apikey": "testingthiswitharandomkey",
        "categories": "7030",
        "uid": "",
        "enabled": false,
        "id": 4
       }
    ],
    "torznabs": [
      {
        "name": "torznab_site",
        "host": "http://yourhost:9117/api/v2.0/indexers/torznab_site/results/torznab/",
        "apikey": "random_api_key_here",
        "categories": "7000,100027",
        "enabled": true,
        "id": 3
      },
      {
        "name": "some tracker",
        "host": "http://yourhost:9117/api/v2.0/indexers/sometracker/results/torznab/", 
        "apikey": "random_api_key_here",
        "categories": "100055",
        "enabled": false,
        "id": 5
      }
    ],
 }
}
```
