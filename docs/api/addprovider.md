# [API] addProvider

**action**:  will add a provider (```name```) into the provider list.

**restrictions**: _Optional_ arguments do not need to part of the call

**arguments (_required_)**: 
- ```providertype``` --> ```newznab``` or ```torznab```
- ```name``` 
- ```host``` 
- ```apikey```

**arguments (_optional_)**:
- ```uid``` --> is only required for rss utilisation on some indexers.
- ```categories``` --> default is ```7030``` for comics. If requiring multiple categories can be separated by commas.
- ```enabled``` --> default is ```false```. Acceptable values are: ```true```, ```false``` (as per example call, can also be ```enabled``` or ```disabled```)

**response Type**: json

**example call**: 

`http://localhost:8090/api?cmd=addProvider&providertype=newznab&name=MySite&host=https://test.site.com&prov_apikey=something&uid=3711&enabled&apikey=<apikey>`

**example response**:

```JSON
{
  "success": true,
  "data": "Successfully added newznab provider MySite to the provider list [prov_id: 6]"
}
```


