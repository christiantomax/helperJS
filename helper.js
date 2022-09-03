import ReactGA from 'react-ga'
const TRACKING_ID = "UA-118607830-2"
ReactGA.initialize(TRACKING_ID)

export const normalizeErrorMessage = (message) => {
    message = message.replace("_", " ")
    message = message.replace(":", "")
    message = message.replace("This field", "")
    message = message.charAt(0).toUpperCase() + message.slice(1)
    return message
}

export const getDateTimeFormat = (date_time) => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const event = new Date(date_time)
    const hour = event.getUTCHours() > 12 ? 24-12 : event.getUTCHours()
    const AMPM = event.getUTCHours() > 12 ? "PM" : "AM"
    return event.getUTCDate()+" "+monthNames[event.getUTCMonth()]+" "+event.getUTCFullYear()+" | "+hour+" : "+("0" + event.getUTCMinutes()).slice(-2)+" "+AMPM;
}

export const getDateFormat = (date_time) => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const event = new Date(date_time)
    return event.getUTCDate()+" "+monthNames[event.getUTCMonth()]+" "+event.getUTCFullYear();
}

export const getCurrencyFormat = (price) => {
    let result = 
    new Intl.NumberFormat('id-ID',  {
        style: 'currency',
        currency: 'IDR',
    }).format(price).toString()

    result = result.replace("Rp", "IDR")
    result = result.replace(",00", "")
    return result
}

export const getEmbedYoutube = (video_url = "") => {
    if(video_url === null){
        return ""
    }
    let result = video_url.toString()
    result = video_url.replace("https://www.youtube.com/watch?v=", "")
    return result
}

export const postEventGA = (dcategory, daction, dlabel) => {
    ReactGA.event({
        category: dcategory,
        action: daction,
        label: dlabel,
    })
}