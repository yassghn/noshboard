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
import type { RENDER_OPTS } from './types'

/**
 * render loop
 *
 * @param {number} timestamp time in milliseconds
 */
function _render(timestamp: number, renderOpts: RENDER_OPTS) {
    requestAnimationFrame((t) => _render(t, renderOpts))
    try {
        backgroundCvs.render(timestamp)
        messageCvs.render(timestamp, renderOpts)
        foregroundCvs.render(timestamp)
    } catch (e: any) {
        if (state.debug) {
            console.error(e)
            debugger
        }
    }
}

function render(timestamp: number, renderOpts: RENDER_OPTS) {
    _render(timestamp, renderOpts)
}

export default render