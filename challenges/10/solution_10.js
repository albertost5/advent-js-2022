function checkJump(heights) {
    let max = Math.max(...heights);
    let leftArr = heights.splice(0, heights.indexOf(max))
    const checkLeft = leftArr
        .slice(1) 
        .every((n,index) => n >= leftArr[index]);
    const checkRight = heights
        .slice(1)
        .every((n,i) => n <= heights[i] )
    return checkLeft && checkRight && heights.length > 1 && leftArr.length !=0
}