/**
 * config.ts
 *
 * @memberof noshboard
 * @module noshboard/config
 * @property {noshboard.module:noshboard/config} config fetch noshboard config json
 */

import type { CONFIG } from './types'

/**
 * fetch config.json
 *
 * @returns {Promise<object>} configuration json object
 */
async function _fetchConfigJson(): Promise<object> {
    const jsonPath = 'resources/config.json'
    const jsonObj = (await (await (fetch(jsonPath))).json())
    return jsonObj
}

/**
 * get noshboard configuration object from json object
 *
 * @returns {Promise<CONFIG>} noshboard configuration object
 */
async function _hewConfig(): Promise<CONFIG> {
    const configJSON = await _fetchConfigJson()
    const config = { ...configJSON } as CONFIG
    return config
}

/**
 * get noshboard configuration object
 *
 * @returns {Promise<CONFIG>} noshboard configuration object
 */
async function _getConfig(): Promise<CONFIG> {
    const config = await _hewConfig()
    return config
}

const config = {
    async get(): Promise<CONFIG> {
        return await _getConfig()
    }
}

export default config
