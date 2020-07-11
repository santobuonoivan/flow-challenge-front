/*
 * Get weather icon based on id.
 *
 * @param {Number} id - Weather ID.
 */
const getWeatherIcon = id => {
    if (isThunderstorm(id)) {
        return require("../assets/icons/weather/thunderstorm.svg");
    }

    if (isDrizzle(id) || isRain(id)) {
        return require("../assets/icons/weather/rain.svg");
    }

    if (isSnow(id)) {
        return require("../assets/icons/weather/snow.svg");
    }

    return require("../assets/icons/weather/cloud.svg");
}


/*
 * Check if under Thunderstorm category.
 *
 * @param {Number} id - Weather ID.
 */
function isThunderstorm(id) {
    return id > 199 && id < 233;
}

/*
 * Check if under Drizzle category.
 *
 * @param {Number} id - Weather ID.
 */
function isDrizzle(id) {
    return id > 299 && id < 322;
}

/*
 * Check if under Rain category.
 *
 * @param {Number} id - Weather ID.
 */
function isRain(id) {
    return id > 499 && id < 532;
}

/*
 * Check if under Snow category.
 *
 * @param {Number} id - Weather ID.
 */
function isSnow(id) {
    return id > 599 && id < 623;
}

export default getWeatherIcon