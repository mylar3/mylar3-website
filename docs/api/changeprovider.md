# [API] changeProvider

**action**:  will change any provided values for an existing provider (```name``` or ```prov_id```).

**restrictions**: _Optional_ arguments do not need to part of the call but one _must_ be provided.

**arguments (_required_)**: 
- ```providertype``` --> ```newznab``` or ```torznab```
- ```name``` or ```prov_id``` (either/both may be supplied)

**arguments (_optional_)**:
- ```altername``` --> change the name of the provider from the ```name``` value
- ```host``` 
- ```prov_apikey```
- ```uid``` --> is only required for rss utilisation on some indexers.
- ```categories``` --> If requiring multiple categories can be separated by commas.
- ```enabled``` --> Enable provider. Acceptable values are: ```true```, ```false``` or just the ```enabled``` field
- ```disabled``` --> Disable provider. Acceptable values are: ```true```, ```false``` or just the ```disabled``` field

_note: if ``prov_id`` argument is used, ``name`` can be used in lieu of ``altername`` if desired._
 
**response Type**: json

**example calls**: 
(using ```name``` control argument):
- _change newznab entries of_: name of newznab, host, prov_apikey, and disable:
  `cmd=changeProvider&providertype=newznab&name=MySite&altername=MyCoolSite&host=https://testing.site.com&prov_apikey=something&disabled&apikey=<apikey>`

- _change torznab entries of_: host, categories, and enable:
  `cmd=changeProvider&providertype=torznab&name=MySite&host=https://testing.site.com&categories=5000,7000&enabled=true&apikey=<apikey>`

(using ```prov_id``` argument):
- _change newznab entries of_: name of newznab, host, prov_apikey, and disable:
  `cmd=changeProvider&providertype=newznab&prov_id=5&name=MyCoolSite&host=https://testing.site.com&prov_apikey=something&disabled&apikey=<apikey>`

- _change torznab entries of_: host, categories, and enable:
  `cmd=changeProvider&providertype=torznab&prov_id=5&host=https://testing.site.com&categories=5000,7000&enabled=true&apikey=<apikey>`

**example response**:

```JSON
{
  "success": true,
  "data": "Successfully changed ['name', 'host', 'prov_apikey', 'enabled'] for newznab provider MySite [prov_id: 5]"
}
```


