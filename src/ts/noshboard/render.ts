/**
 * render.ts
 *
 * @memberof noshboard
 * @module noshboard/render
 * @property {noshboard.module:noshboard/render}
 */

import state from '@noshboard/state'
import backgroundCvs from '@noshboard/cvs/backgroundCvs'
import messageCvs from '@noshboard/cvs/messageCvs'
import foregroundCvs from '@noshboard/cvs/foregroundCvs'

/**
 * render loop
 *
 * @param {number|null} timestamp time in milliseconds
 */
function _render(timestamp: number) {
    requestAnimationFrame((t) => _render(t))
    try {
        backgroundCvs.render(timestamp)
        messageCvs.render(timestamp)
        foregroundCvs.render(timestamp)
    } catch (e: any) {
        if (state.debug) {
            console.error(e)
            debugger
        }
    }
}

function render(timestamp: number) {
    _render(timestamp)
}

export default render