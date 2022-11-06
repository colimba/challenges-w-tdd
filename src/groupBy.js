export const groupBy = (collection, it) => {
    if(!Array.isArray(collection) || !(typeof it === 'string' || typeof it === 'function')) {
        throw new Error('parameters provided should be an array and a string or a function')
    }

    let fnToApply
    if(typeof it === 'string') {
        fnToApply = it === 'length' 
            ? fnToApply = w => w.length
            : fnToApply = e => e[it]
    } else {
        fnToApply = it
    }

    let response = {}
    const responseSet = new Set()
    collection.forEach( e => {
        const temp = fnToApply(e)
        if(responseSet.has(temp)) {
            response[temp].push(e)
        } else {
            responseSet.add(temp)
            response[temp] = [e]
        }
    })

    return response
}
