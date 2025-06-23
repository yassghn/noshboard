/**
 * messageCvs.ts
 *
 * @memberof noshboard
 * @module noshboard/message
 * @property {noshboard.module:noshboard/message}
 */

import state from '@noshboard/state'

/**
 * clear canvas
 */
function _clear() {
    const cvs = state.messageCvs
    cvs.ctx.clearRect(0, 0, cvs.width, cvs.height)
}

/**
 * render canvas
 *
 * @param {number|null} timestamp time in milliseconds
 */
function _render(timestamp: number | null) {
    _clear()
}

const messageCvs = {
    clear: () => {
        _clear()
    },

    render: (timestamp: number | null) => {
        _render(timestamp)
    }
}

export default messageCvs
