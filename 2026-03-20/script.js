function getShadow(time) {
    let shadow = true;
    let shadowLength;
    let partOfDay;
    let direction;

    const timeToSeconds = (time) => {
        const timeParts = time.split(':');
        const hours = parseInt(timeParts[0],10);
        const minutes = parseInt(timeParts[1], 10);

        const totalSeconds = (hours * 3600) + (minutes * 60);

        return totalSeconds;
    };

    const secondsToTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);

        return {
            hours: hours,
            minutes: minutes
        };
    };

    const timeToHours = (seconds) => {
        const hour = (Math.abs(seconds) / 3600);
        return hour; 
    }

    const timeFromNoon = (time) => {
        const noon = timeToSeconds("12:00");
        const timeOfDay = timeToSeconds(time);

        if (timeOfDay >= timeToSeconds("06:00") && timeOfDay <= timeToSeconds("18:00")) {
            const timeSeconds = (timeOfDay - noon);

            if (timeSeconds < 0) {
                partOfDay = 'morning'
            } else {
                partOfDay = 'afternoon'
            }
            
            const timeHours = timeToHours(timeSeconds);

            return timeHours;
        } else {
            shadow = false;
        }
    };

    const calcShadowLength = (timeFromNoon) => {
        if (time === "12:00" || time === '18:00') {
            shadow = false;
            return 'No shadow'
        } else if (timeFromNoon > 0 && partOfDay === 'morning') {
            shadowLength = timeFromNoon ** 3;
            direction = 'west'
        } else if (timeFromNoon > 0 && partOfDay === 'afternoon') {
            shadowLength = timeFromNoon ** 3;
            direction = 'east'
        };
    };

    calcShadowLength(timeFromNoon(time));

    if (!shadow) {
        console.log('No shadow');
        return 'No shadow'
    } else {
        console.log(`${shadowLength}ft ${direction}`);
        return `${shadowLength}ft ${direction}`
    };
};

getShadow("12:00");