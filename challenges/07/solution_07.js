function getGiftsToRefill(a1, a2, a3) {
    const set1 = new Set([...a1])
    const set2 = new Set([...a2])
    const set3 = new Set([...a3])
    
    return[...new Set([...set1, ...set2, ...set3])]
      .filter(item => (set1.has(item) && !set2.has(item) && !set3.has(item)) 
      || (!set1.has(item) && set2.has(item) && !set3.has(item)) 
      || (!set1.has(item) && !set2.has(item) && set3.has(item)))
}