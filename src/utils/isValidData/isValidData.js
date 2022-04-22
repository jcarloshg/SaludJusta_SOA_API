
/**
 * check that the properties from object ata is not null or void
 * @param {object} data
 * @returns
 */
const isValidData = (data) => {

    const isEmpty = Object.keys(data).length === 0;
    if (isEmpty) return false;

    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
            const element = data[key];
            if (element == null || element == "") return false;
        }
    }

    return true;

}

module.exports = isValidData;