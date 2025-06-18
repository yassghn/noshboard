/**
 * config.ts
 */

import type { CONFIG } from './types'

async function _fetchConfigJson(): Promise<object> {
    const jsonPath = 'resources/config.json'
    const jsonObj = (await (await (fetch(jsonPath))).json())
    return jsonObj
}

async function _hewConfig(): Promise<CONFIG> {
    const configJSON = await _fetchConfigJson()
    const config = { ...configJSON } as CONFIG
    return config
}

async function _getConfig(): Promise<CONFIG> {
    const config = _hewConfig()
    return config
}

const config = {
    async get(): Promise<CONFIG> {
        return _getConfig()
    }
}

export default config
