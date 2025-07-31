/**
 * messageCvs.ts
 *
 * @memberof noshboard/cvs
 * @module noshboard/cvs/messageCvs
 * @property {noshboard.module:noshboard/cvs/messageCvs}
 */

import pallete from '@noshboard/pallete'
import state from '@noshboard/state'
import type { RENDER_OPTS } from '@noshboard/types'

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
 * @param {number} timestamp time in milliseconds
 * @param {RENDER_OPTS} renderOpts render options
 */
function _render(timestamp: number, renderOpts: RENDER_OPTS) {
    const cvs = state.messageCvs
    _clear()
    pallete.news(cvs, timestamp, renderOpts)
}

const messageCvs = {
    clear: () => {
        _clear()
    },

    render: (timestamp: number, renderOpts: RENDER_OPTS) => {
        _render(timestamp, renderOpts)
    }
}

export default messageCvs
