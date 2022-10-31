export const xmasTree = height => {
    if(typeof height !== 'number') throw new Error('provided parameter should be a number')
    if(height < 1) throw new Error('provided parameter should be a positive number greter than zero')
    
    const treeWidth = height*2-1
    let crazyTree = ''

    // leaves build
    for (let i = 1; i <= height; i++) {
        let underScore = height - i
        let leaves = treeWidth - underScore * 2
        let lineSection = '_'.repeat(underScore) + '*'.repeat(leaves) + '_'.repeat(height-i) + '\n'
        crazyTree = crazyTree + lineSection
    }
    
    // trunk build
    const trunkUnderScore = '_'.repeat(height-1)
    crazyTree = crazyTree + trunkUnderScore + '#' + trunkUnderScore + '\n'
    crazyTree = crazyTree + trunkUnderScore + '#' + trunkUnderScore

    return crazyTree
}
