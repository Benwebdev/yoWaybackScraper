const wayback = require('wayback-downloader');
const fs = require('fs');


class yoWaybackScraper {
    url: string; 
    /**
     * 
     * @param url 
     */
    constructor(url) {
        this.url = url;
    }

    /**
     * init WaybackScraper
     */
    public getTimeMap(options?) {
        let getTimeMapOptions = {
            url: this.url, 
            name: this.url.split('.')[0]
        }

        if (options){
            getTimeMapOptions.url = options.url;
            getTimeMapOptions.name = options.name; 
        }

        wayback.getTimeMap(getTimeMapOptions.url, async (err, data) => {
            data.mementos.map(wayBackPage => { 
                fs.appendFileSync(`./${getTimeMapOptions.name}.txt`, wayBackPage.url + ' \n ')
              })
        })
    }
}
