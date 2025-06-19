/**
 * verbose.ts
 *
 * @memberof noshboard
 * @module noshboard/verbose
 * @property {noshboard.module:noshboard/verbose} verbose verbosity
 */

import storage from '@noshboard/storage'
import state from '@noshboard/state'

function _applyVerbose(): boolean {
    return state.verbose
}

function _greet() {
    if (_applyVerbose()) {
        console.log(storage.strings.greet)
    }
}

const verbose = {
    greet: () => {
        _greet()
    }
}

export default verbose
