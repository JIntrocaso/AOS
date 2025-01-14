import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import updateLocale from 'dayjs/plugin/updateLocale'

export function fuzzyTimeStamp(timestamp) {
    dayjs.extend(relativeTime)
    dayjs.extend(updateLocale)
    dayjs.updateLocale('en', {
        relativeTime: {
            future: "in %s",
            past: "%s",
            s: '%ds',
            m: "1m",
            mm: "%dm",
            h: "1h",
            hh: "%dh",
            d: "1d",
            dd: "%dd",
            M: "1m",
            MM: "%dm",
            y: "1y",
            yy: "%dy"
        }
    })

    return dayjs(timestamp).fromNow()
}