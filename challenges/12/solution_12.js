function selectSleigh(distance, sleighs) {
    const CONSUMPTION_MAX = 20;
    const sleighsMap = sleighs
      .map(item => {
        item.consumption *= distance;
        return item;
      })
      .filter( item => item.consumption <= CONSUMPTION_MAX)
      .sort( (a,b) => {
        return b.consumption - a.consumption;
      });
    return sleighsMap.length ? sleighsMap[0].name : null;
}