function carryGifts(gifts, maxWeight) {
    if (!gifts.every(gift => maxWeight >= gift.length)) {
        return [];
    }
    const bags = [];
    gifts
        .filter( gift => gift.length <= maxWeight)
        .forEach( item => {
            ( bags.length > 0 ) && 
            ( bags[bags.length - 1].replace(/ /g,'').length 
            + item.length <= maxWeight )
            ? bags[bags.length - 1] += ` ${item}`
            : bags[bags.length] = item;
        });
    return bags;
}