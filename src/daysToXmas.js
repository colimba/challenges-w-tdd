export const REFERENCE_DATE = new Date('Dec 25, 2021')
const MILISECONDS_REFECENCE_DATE = REFERENCE_DATE.getTime()

const milisecondsToDays = miliseconds => {
    // 1000*60*60*24 = 86400000 👉🏼 mili*sec*min*hour
    return Math.ceil(miliseconds/86400000)
}

export const daysToXmas = date => {
    if(typeof date !== 'object') throw new Error('parameter should be a date')
    return milisecondsToDays(MILISECONDS_REFECENCE_DATE - date.getTime())
}