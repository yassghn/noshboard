/**
 * backgroundCvs.ts
 *
 * @memberof noshboard/cvs
 * @module noshboard/cvs/backgroundCvs
 * @property {noshboard.module:noshboard/cvs/backgroundCvs}
 */

import pallete from '@noshboard/pallete'
import state from '@noshboard/state'

/**
 * clear canvas
 */
function _clear() {
    const cvs = state.backgroundCvs
    cvs.ctx.clearRect(0, 0, cvs.width, cvs.height)
}

/**
 * render canvas
 *
 * @param {number} timestamp time in milliseconds
 */
function _render(timestamp: number) {
    const cvs = state.backgroundCvs
    _clear()
    if (state.debug) {
        pallete.grid(cvs)
    }
}

const backgroundCvs = {
    clear: () => {
        _clear()
    },

    render: (timestamp: number) => {
        _render(timestamp)
    }
}

export default backgroundCvs
