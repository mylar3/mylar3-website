Example: Print series with Continuing Status
```JSON
{
    "metadata": {
        "type": "comicSeries",
        "publisher": "DC Comics",
        "imprint": null,
        "name": "Batman/Fortnite: Zero Point",
        "comicid": 135499,
        "year": 2021,
        "description_text": "Six issue crossover mini-series",
        "description_formatted": null,
        "volume": null,
        "booktype": "Print",
        "collects": null,
        "ComicImage": "https://comicvine.gamespot.com/a/uploads/scale_large/6/67663/7921530-01.jpg",
        "total_issues": 1,
        "publication_run": "June 2021 - Present",
        "status": "Continuing"
    }
}
```
Example: TPB with collects values
```JSON
{
   "metadata": {
         "type":"comicSeries",
         "publisher":"DC Comics",
         "imprint":null,
         "name":"Superman: Zero Hour",
         "comicid":111701,
         "year":2018,
         "description_text":"Trade paperback collecting Action Comics #0 & 703, Adventures of Superman #0 & 516, Steel #0 & 8, Superman: Man of Steel #0 & 37 and Superboy #0 & 8",
         "description_formatted":"Trade paperback collecting Action Comics #0 & 703, Adventures of Superman #0 & 516, Steel #0 & 8, Superman: Man of Steel #0 & 37 and Superboy #0 & 8",
         "volume":null,
         "booktype":"TPB",
         "collects":[
           {
             "series": "Action Comics",
             "comicid": "4050-18005", 
             "issueid": null,
             "issues": "#0 & 703"
           },
           {
             "series": "Adventures of Superman",
             "comicid": "4050-3778",
             "issueid": null,
             "issues": "#0 & 516"
           },
           {
             "series": "Steel",
             "comicid": "4050-5260",
             "issueid": null,
             "issues ": "#0 & 8"
           },
           {
             "series": "Superman: Man of Steel",
             "comicid": "4050-4571",
             "issueid": null,
             "issues": "#0 & 37"
           },
           {
             "series": "Superboy",
             "comicid": "4050-5261",
             "issueid": null,
             "issues": "#0 & 8"
           }
         ],
         "ComicImage":"https://comicvine1.cbsistatic.com/uploads/scale_large/6/67663/6477329-01.jpg",
         "total_issues":1,
         "publication_run":"June 2018 - June 2018",
         "status":"Ended"
      }
}
```
Example: Ended status with print booktype and volume present
```JSON
{
   "metadata":{
         "type":"comicSeries",
         "publisher":"DC Comics",
         "imprint":null,
         "name":"Aquaman",
         "comicid":43022,
         "year":2011,
         "description_text":"A \"New 52\" initiative title starring Aquaman and Mera as they strive to find a new life on the surface.",
         "description_formatted":null,
         "volume":5,
         "booktype":"Print",
         "collects":null,
         "ComicImage":"https://comicvine.gamespot.com/a/uploads/scale_large/6/67663/2083416-01.jpg",
         "total_issues":55,
         "publication_run":"November 2011 - July 2016",
         "status":"Ended"
      }
}
```

(all examples are using data from ComicVine)
