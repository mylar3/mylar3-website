# [API] delProvider

**action**:  will delete the specified provider (```name```) or (```prov_id```) from the provider list.

**restrictions**: ```providertype```, (```name``` and/or ```prov_id```) are required arguments

**arguments (_required_)**: 
- ```providertype``` --> ```newznab``` or ```torznab```
- ```name``` or ```prov_id``` ( at least one must be provided )

**response Type**: json

**example call**: 

[using name argument] `http://localhost:8090/api?cmd=delProvider&providertype=newznab&name=MySite&apikey=<apikey>`

[using prov_id argument] `http://localhost:8090/api?cmd=delProvider&providertype=newznab&prov_id=5&apikey=<apikey>`

**example response**:

```JSON
{
  "success": true,
  "data": "Successfully removed newznab provider MySite [prov_id:5]"
}
```
