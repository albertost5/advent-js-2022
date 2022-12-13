function distributeGifts(packOfGifts, reindeers) {
    const totalWeight = packOfGifts.reduce((acc, gift) => acc + gift.length, 0);
    const totalGifts = reindeers.reduce((acc, reindeer) => acc + reindeer.length * 2, 0);

    return Math.floor(totalGifts / totalWeight);
}