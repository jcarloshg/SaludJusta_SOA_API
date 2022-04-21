
/**
 * check that the properties from object ata is not null or void
 * @param {object} data
 * @returns
 */
const isValidData = (data) => {

    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
            const element = data[key];
            if (element == null || element == "") return false;
        }
    }

    return true;

}

module.exports = isValidData;