/**
 * init.ts
 */

import state from '@noshboard/state'

async function _initState() {
    await state.init()
}

async function _initNoshboard() {
    await _initState()
}

const init = {
    noshboard: async () => {
        await _initNoshboard()
    }
}

export default init
