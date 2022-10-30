const verify = (arr) => {
    let openParenthesis = 0
    let error = false
    let parenthesisContent = ''

    arr.forEach((element) => {
        if (element === '(') {
            openParenthesis++
        } else if (element === ')') {
            if (openParenthesis === 0) {
                error = true
                return
            }
            openParenthesis--
            if (parenthesisContent.length === 0) {
                error = true
                return
            }
            parenthesisContent = ''
        } else if (openParenthesis > 0) {
            parenthesisContent = parenthesisContent.concat(element)
        }
    })

    return !error && openParenthesis === 0
};

export const grinchPrankDetector = (letter) => {
    if (typeof letter !== 'string')
        throw new Error('parameter letter must be a string')
    if (letter === '' || letter.includes('{') || letter.includes('['))
        return false
    return verify(letter.split(''))
}
