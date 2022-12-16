function decorateTree(base) {
    const baseArr = base.split(' ');
    const chars = {
        'BB': 'B',
        'RP': 'B',
        'PR': 'B',
        'PP': 'P',
        'BR': 'P',
        'RB': 'P',
        'RR': 'R',
        'BP': 'R',
        'PB': 'R',
    } 

    let tree = [base];
    for(let i = 0; i < baseArr.length; i++) {
        const arr = tree[i].split(' ');
        let str = '';
        arr.reduce((prev, current, index) => { 
        const char = chars[`${prev}${current}`]
        str += `${char} `;
        prev = current;
        if( index + 1 == arr.length ) tree.push( str.trim() );
        return prev;
        });
    }
    return tree.reverse();
}