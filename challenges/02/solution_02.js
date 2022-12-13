function countHours(year, holidays) {
    let days = 0;
    holidays.forEach( day => { 
        const date = new Date(`${year}/${day}`).getDay();
        if( date > 0 && date < 6 ) days++;
    });
    return days * 2;
}
