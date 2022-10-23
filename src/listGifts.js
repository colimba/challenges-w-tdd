export const listGifts = (letter) => {
  if (typeof letter !== 'string') throw new Error('letter should be a string')

  let response = {}
  letter
    .split(' ')
    .filter((p) => p.charAt(0) !== '_')
    .filter((p) => p !== '')
    .forEach((present) => {
      const p = present
      response = {
        ...response,
        [present]: response[p] ? response[p] + 1 : 1,
      }
    })

  return response
}
