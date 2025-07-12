/**
 * wrapper.ts
 *
 * @memberof noshboard/api
 * @module noshboard/api/wrapper
 * @property {noshboard.module:noshboard/api/wrapper} wrapper canvas 2d rendering context 2d api wrapper
 */

import state from '@noshboard/state'

/**
 * no clip debug
 *
 * @param {CanvasRenderingContext2D} ctx canvas 2d rendering context
 */
function _clip(ctx: CanvasRenderingContext2D) {
    if (!state.debug) {
        ctx.clip()
    }
}

const wrapper = {
    clip: _clip
}

export default wrapper