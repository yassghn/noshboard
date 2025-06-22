/**
 * state.ts
 *
 * @memberof noshboard
 * @module noshboard/state
 * @property {noshboard.module:noshboard/state} state noshboard state
 */

import storage from '@noshboard/storage'
import canvas from '@noshboard/canvas'
import type { CVS, CVS_STACK } from './types'
import localFridge from './localFridge'

const _state = {
    cvsStack: null as unknown as CVS_STACK
}

/**
 * get debug flag from storage
 *
 * @returns {boolean} debug flag
 */
function _getDebug(): boolean {
    const debug = localFridge.debug
    if (debug !== undefined) return debug
    return storage.config.debug
}

/**
 * get verbose flag from storage
 *
 * @returns {boolean} verbose flag
 */
function _getVerbose(): boolean {
    const verbose = localFridge.verbose
    if (verbose !== undefined) return verbose
    return storage.config.verbose
}

/**
 * add cvs stack to state
 *
 * @param {CVS_STACK} cvsStack canvas stack
 */
function _setCvsStack(cvsStack: CVS_STACK) {
    _state.cvsStack = cvsStack
}

/**
 * get canvas stack
 *
 * @returns {CVS_STACK} canvas stack
 */
function _getCvsStack(): CVS_STACK {
    return _state.cvsStack
}

/**
 * get background canvas
 *
 * @returns {CVS} background canvas
 */
function _getBackgroundCvs(): CVS {
    return _state.cvsStack.background
}

/**
 * get message canvas
 *
 * @returns {CVS} message canvas
 */
function _getMessageCvs(): CVS {
    return _state.cvsStack.message
}

/**
 * foreground canvas
 *
 * @returns {CVS} get foreground canvas
 */
function _getForegroundCvs(): CVS {
    return _state.cvsStack.foreground
}

/**
 * init state
 */
function _init() {
    const cvsStack = canvas.cvsStack
    _setCvsStack(cvsStack)
}

const state = {
    init: () => {
        _init()
    },

    get debug(): boolean {
        return _getDebug()
    },

    get verbose(): boolean {
        return _getVerbose()
    },

    get cvsStack(): CVS_STACK {
        return _getCvsStack()
    },

    get backgroundCvs(): CVS {
        return _getBackgroundCvs()
    },

    get messageCvs(): CVS {
        return _getMessageCvs()
    },

    get foregroundCvs(): CVS {
        return _getForegroundCvs()
    }
}

export default state
