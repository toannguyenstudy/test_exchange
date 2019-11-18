/**
 * Random number from between min <-> max
 * @param min minimum number to random
 * @param max maximum number to random
 * @param fix number of decimal - default 6 decimal
 */
function randomNumberInRange(min, max, fix = 6) {
    // min and max included
    return (Math.random() * (max - min) + min).toFixed(fix);
}

function roundNumberNearest(value, nearest = 1) {
    return Math.ceil(value / nearest) * nearest;
}

export { randomNumberInRange, roundNumberNearest };
