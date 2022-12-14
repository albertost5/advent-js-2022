function countTime(leds) {
    const ledsEditedArr = leds.join('').split(1);
    ledsEditedArr[0] += ledsEditedArr.pop();
    return Math.max( ...ledsEditedArr.map( led => led.length * 7) );
}