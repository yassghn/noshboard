/**
 * state.ts
 */

import config from '@noshboard/config'
import type { CONFIG } from './types'

const _state = {
    config: null as unknown as CONFIG
}

function _setConfig(conf: CONFIG) {
    _state.config = conf
}

function _getConfig() {
    return _state.config
}

async function _init() {
    const conf = await config.get()
    _setConfig(conf)
}

const state = {
    init: async () => {
        await _init()
    },

    get config(): CONFIG {
        return _getConfig()
    }
}

export default state
