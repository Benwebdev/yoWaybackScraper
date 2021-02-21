# yoWaybackScraper

scrapes given url on wayback and returns .txt of all saved versions. 

npm install @benline/yoWaybackScraper 


```javascript
const waybackScraper = new yoWaybackScraper("example.com")
waybackScraper.getTimeMap()
```

can override the url and filename via passing obj into getTimeMap()

```javascript
waybackScraper.getTimeMap({url: "newurl.com", name: "newfilename"})
```
