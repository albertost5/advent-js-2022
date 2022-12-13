function createCube(size) {
    let regular = ''
    let reverted = ''
    for (let i = 1; i <= size; i++) {
        regular += `${' '.repeat(size-i)}${`/\\`.repeat(i)}${`_\\`.repeat(size)}\n`
        reverted = `${' '.repeat(size-i)}${`\\/`.repeat(i)}${`_/`.repeat(size)}\n` 
        + reverted;
    }
    return regular+reverted.substring(0, reverted.length - 1);
}