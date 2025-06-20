/**
 * init.ts
 *
 * @memberof noshboard
 * @module noshboard/init
 * @property {noshboard.module:noshboard/init} init noshboard initialization
 */

import state from '@noshboard/state'
import storage from '@noshboard/storage'

/**
 * initialize state
 */
function _initState() {
    state.init()
}

/**
 * initialize storage
 */
async function _initStorage() {
    await storage.init()
}

/**
 * init noshboard
 */
async function _initNoshboard() {
    await _initStorage().then(() => {
        _initState()
    })
}

const init = {
    noshboard: async () => {
        await _initNoshboard()
    }
}

export default init
