/**
 * backgroundCvs.ts
 *
 * @memberof noshboard/cvs
 * @module noshboard/cvs/backgroundCvs
 * @property {noshboard.module:noshboard/cvs/backgroundCvs}
 */

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
 * @param {number|null} timestamp time in milliseconds
 */
function _render(timestamp: number | null) {

}

const backgroundCvs = {
    clear: () => {
        _clear()
    },

    render: (timestamp: number | null) => {
        _render(timestamp)
    }
}

export default backgroundCvs
