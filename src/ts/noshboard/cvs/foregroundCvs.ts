/**
 * foregroundCvs.ts
 *
 * @memberof noshboard
 * @module noshboard/foreground
 * @property {noshboard.module:noshboard/foreground}
 */

import state from '@noshboard/state'

/**
 * clear canvas
 */
function _clear() {
    const cvs = state.foregroundCvs
    cvs.ctx.clearRect(0, 0, cvs.width, cvs.height)
}

/**
 * render canvas
 *
 * @param {number|null} timestamp time in milliseconds
 */
function _render(timestamp: number | null) {

}

const foregroundCvs = {
    clear: () => {
        _clear()
    },

    render: (timestamp: number | null) => {
        _render(timestamp)
    }
}

export default foregroundCvs
