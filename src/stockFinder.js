const isPresent = (section, product) => {
    let response = false
    for (let i = 0; i < Object.keys(section).length; i++) {        
        if(response) break

        if(typeof section[Object.keys(section)[i]] === 'object') {
            response = isPresent(section[Object.keys(section)[i]], product)
        }
        if(section[Object.keys(section)[i]] === product){
            response = true
            break
        }
    }
    return response
}

export const stockFinder = (store, product) => {
    if(typeof store !== 'object' || Array.isArray(store) || Object.keys(store).length === 0 || 
        store.constructor !== Object || typeof product !== 'string' || product === '') {
        throw new Error('parameters should be and object and a string')
    }  
    return isPresent(store, product)
}