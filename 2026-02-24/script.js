function countBusinessDays(start, end) {
    const [yearStart, monthStart, dayStart] = start.split('-')
    const [yearEnd, monthEnd, dayEnd] = end.split('-');
    const startDate = new Date(yearStart, monthStart - 1, dayStart);
    const endDate = new Date(yearEnd, monthEnd - 1, dayEnd);

    let dayCount = 0;
    const currentDate = new Date(startDate.getTime());
    
    while (currentDate <= endDate) {
        const dayOfWeek = currentDate.getDay();
        console.log(dayOfWeek, currentDate);
        
        // Check for Sunday (index of 0) and Saturday (index of 6)
        if (dayOfWeek !== 0 && dayOfWeek !== 6) {
            dayCount++;
        };
        currentDate.setDate(currentDate.getDate() + 1);
    }
    console.log(dayCount);
    
    return dayCount;
}

countBusinessDays("2026-02-24", "2026-02-26")