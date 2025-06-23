/**
 * strings.ts
 *
 * @memberof noshboard
 * @module noshboard/strings
 * @property {noshboard.module:noshboard/strings} strings fetch noshboard strings json
 */

/**
 * fetch strings.json
 *
 * @returns {Promise<object>} strings json object
 */
async function _fetchStringsJson(): Promise<object> {
    const jsonPath = 'resources/strings.json'
    const jsobObj = (await (await (fetch(jsonPath))).json())
    return jsobObj
}

/**
 * get noshboard strings object from json object
 *
 * @returns {Promise<object>} noshboard strings object
 */
async function _hewStrings(): Promise<object> {
    const stringsJSON = await _fetchStringsJson()
    const strings = { ...stringsJSON }
    return strings
}
/**
 * get noshboard strings object
 *
 * @returns {Promise<object>} noshboard strings object
 */

async function _getStrings(): Promise<object>  {
    return await _hewStrings()
}

const strings = {
    async get(): Promise<object> {
        return await _getStrings()
    }
}

export default strings
