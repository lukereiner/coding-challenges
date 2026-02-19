function avalancheRisk(snowDepth, slope) {

    if (snowDepth === 'Shallow') {
        return 'Safe'
    } else if (slope === "Gentle" && (snowDepth === "Moderate" || snowDepth === "Deep")) {
        return 'Safe'
    } else {
        return 'Risky'
    }
};