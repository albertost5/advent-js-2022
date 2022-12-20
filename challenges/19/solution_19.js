function sortToys(toys, positions) {
    return toys.sort((a,b) => 
        positions[toys.indexOf(a)] - positions[toys.indexOf(b)]
    );
}

// function sortToys(toys, positions) {
//     let toysOrdered = [];
//     for(let i = positions.length; i > 0; i--) {
//     const max = Math.max(...positions);
//     const indexMax = positions.findIndex(e => e === max);
//     toysOrdered.unshift(toys[indexMax]);
//     positions[indexMax] = null;
//     }
  
//     return toysOrdered;
// }