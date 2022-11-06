const COIN_UNIVERSE = [1, 2, 5, 10, 20, 50].reverse()

export const getCoins = change => {
    if(typeof change !== 'number') {
        throw new Error('parameter provided should be a number')
    }
    let response = [0, 0, 0, 0, 0, 0]
    let remainingChange = change
    
    while(remainingChange !== 0) {
        let coinIndex = COIN_UNIVERSE.findIndex(e => e <= remainingChange)
        response[coinIndex]++
        remainingChange -= COIN_UNIVERSE[coinIndex]
    }

    return response.reverse()
}