function wrapping(gifts) {
  return gifts.reduce((arr, gift) => {
    const addChars = '*'.repeat( gift.length + 2 );
    arr.push(`${addChars}\n*${gift}*\n${addChars}`);
    return arr; 
  }, []);
}
  