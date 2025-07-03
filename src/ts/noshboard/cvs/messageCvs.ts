/**
 * messageCvs.ts
 *
 * @memberof noshboard/cvs
 * @module noshboard/cvs/messageCvs
 * @property {noshboard.module:noshboard/cvs/messageCvs}
 */

import newsPallete from '@noshboard/pallete/news'
import state from '@noshboard/state'
import type { CVS } from '@noshboard/types'

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
function _render(timestamp: number | null, cvs: CVS) {
    _clear()
    newsPallete(cvs)
}

const messageCvs = {
    clear: () => {
        _clear()
    },

    render: (timestamp: number | null) => {
        const cvs = state.messageCvs
        _render(timestamp, cvs)
    }
}

export default messageCvs
