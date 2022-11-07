export const FIDELITY_CARD_PRICE = 250
const TICKET_VALUE = 12

export const shouldBuyFidelity = times => {
    // easy way 👉 return times > 23
    if(typeof times !== 'number') {
        throw new Error('parameter provided should be a number')
    }
    return fidelityCalculation(times) < TICKET_VALUE * times
}

export const fidelityCalculation = times => {
    let amount = FIDELITY_CARD_PRICE
    for (let i = 1; i <= times; i++) {
        amount += TICKET_VALUE * Math.pow(.75, i)
    }
    return amount
}