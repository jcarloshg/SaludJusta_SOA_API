
/**
 * get array from workdays
 * @param {Date} start
 * @param {Date} end
 * @returns
 */
const getWorkDays = (start, end) => {

    const workDaysArry = [];

    while (start <= end) {

        if (start.getUTCDay() !== 0 && start.getUTCDay() !== 6)
            workDaysArry.push(new Date(start));

        start.setUTCDate(start.getUTCDate() + 1);
    }

    return workDaysArry;
}

module.exports = getWorkDays;