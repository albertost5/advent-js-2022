function checkPart(part) {
    let isPalindrome = false;
    const partArr = part.split('');
    const partReverse = partArr.reverse().join('');
    if( part == partReverse ) return true;

    for( let i = 0; i < part.length; i++ ) {
        const partEdited = part.replace(part[i], '');
        const partArrEdited = partEdited.split('');
        const partReverseEdited = partArrEdited.reverse().join('');
        if( partEdited == partReverseEdited ) isPalindrome = true;
    }

    return isPalindrome;
}