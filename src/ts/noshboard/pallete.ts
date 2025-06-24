/**
 * pallete.ts
 *
 * @memberof noshboard
 * @module noshboard/pallete
 * @property {noshboard.module:noshboard/pallete} pallete rendering palletes
 */

import type { PALLETE } from './types'

function _renderPallete() {

}

/**
 * hew a renderable pallete
 * 
 * @returns {PALLETE} ready to render pallete
 */
function _hewPallete(): PALLETE {
    const pallete: PALLETE = {
        render: _renderPallete
    }
    return pallete
}

const pallete = {
    hewPallete: (): PALLETE => {
        return _hewPallete()
    }
}

export default pallete
