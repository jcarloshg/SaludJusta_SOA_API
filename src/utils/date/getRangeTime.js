
/**
 *
 * @param {Date} startTime
 * @param {Date} endTime
 */
const getRangeTime = (startTime, endTime) => {

    const timeArr = [];

    while (startTime <= endTime) {
        timeArr.push(new Date(startTime));
        startTime.setUTCMinutes(startTime.getUTCMinutes() + 30);
    }

    return timeArr;

}

module.exports = getRangeTime;