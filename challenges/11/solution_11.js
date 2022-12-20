function getCompleted(part, total) {
    const partArr = part.split(':');
    const totalArr = total.split(':');
    let partSecs = +partArr[0] * 3600 + +partArr[1] * 60 + +partArr[2];
    let totalSecs = +totalArr[0] * 3600 + +totalArr[1] * 60 + +totalArr[2];
    const mcdEuclides = (a,b) => {
        let r = 'a';
        while ( (b % a) != 0 ) {
            r = b % a;
            b = a;
            a = r;
        }
        return a;
    }
    const mcd = mcdEuclides(partSecs, totalSecs);
    return `${partSecs/mcd}/${totalSecs/mcd}`;
}


// getCompleted('01:00:00', '03:00:00') // '1/3'
// getCompleted('02:00:00', '04:00:00') // '1/2'
// getCompleted('01:00:00', '01:00:00') // '1/1'
// getCompleted('00:10:00', '01:00:00') // '1/6'
// getCompleted('01:10:10', '03:30:30') // '1/3'
// getCompleted('03:30:30', '05:50:50') // '3/5