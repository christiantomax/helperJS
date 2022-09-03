# helperJS
Helper For JS Function

## api.js
```	
	from axios function
	const fetchData = async () => {
	    const res = await APIGET(CAR_URL, param)
	    setCar(res[0])
	    setCarPictures(res[0].pictures)
	}
	fetchData()
```
## helper.js
```
	normalizeErrorMessage (seperate with : or _)
	getDateTimeFormat (14 Apr 2022 | 4 : 27 AM)
	getDateFormat (14 Apr 2022)
	getCurrencyFormat (Rp 30.000,00)
	getEmbedYoutube (get embed with parameter v)
	postEventGA (google analytics post event)
```