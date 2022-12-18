function dryNumber(dry, numbers) {
    const numbersArr = Array.from({ length: numbers} , (_,i) => i+1);
    return numbersArr.filter( n => `${n}`.includes(dry) );
}