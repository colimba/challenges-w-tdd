export const maxProfit = (prices) => {
    if (!Array.isArray(prices)) {
        throw new Error('provided parameter should be an array')
    }
    let margin = 0

    for (let i = 0; i < prices.length - 1; i++) {
        const intervalMargin = Math.max(...prices.slice(i + 1)) - prices[i]
        margin = Math.max(margin, intervalMargin)
    }

    return margin > 0 ? margin : -1
}
