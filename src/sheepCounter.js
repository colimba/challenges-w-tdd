export const sheepCounter = (sheeps) => {
    if (!Array.isArray(sheeps)) throw new Error('sheeps should be an array')
  
    return sheeps
      .filter((s) => s.color === 'rojo')
      .filter((s) => s.name.toLowerCase().includes('n'))
      .filter((s) => s.name.toLowerCase().includes('a'))
  }