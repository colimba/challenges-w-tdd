export const sumPairs = (numbers, result) => {
    if (!Array.isArray(numbers) || typeof result !== 'number') {
        throw new Error('an array and a number should be provided')
    }

    let response = null

    for (let n of numbers) {
        let numberToFind = result - n
        if (numbers.includes(numberToFind)) {
            if((n === numberToFind && numbers.filter(e => e === n).length > 1) 
                || n!==numberToFind) {
                // element should be repeat in the array
                response = new Array(n, numberToFind)
                break
            }
        }
    }
    return response
}