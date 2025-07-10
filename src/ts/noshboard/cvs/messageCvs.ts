/**
 * messageCvs.ts
 *
 * @memberof noshboard/cvs
 * @module noshboard/cvs/messageCvs
 * @property {noshboard.module:noshboard/cvs/messageCvs}
 */

import pallete from '@noshboard/pallete'
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
function _render(timestamp: number) {
    const cvs = state.messageCvs
    _clear()
    pallete.news(cvs, timestamp)
}

const messageCvs = {
    clear: () => {
        _clear()
    },

    render: (timestamp: number) => {
        _render(timestamp)
    }
}

export default messageCvs
