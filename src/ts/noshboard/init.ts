/**
 * init.ts
 *
 * @memberof noshboard
 * @module noshboard/init
 * @property {noshboard.module:noshboard/init} init noshboard initialization
 */

import state from '@noshboard/state'

async function _initState() {
    await state.init()
}

/**
 * init noshboard
 */
async function _initNoshboard() {
    await _initState()
}

const init = {
    noshboard: async () => {
        await _initNoshboard()
    }
}

export default init
