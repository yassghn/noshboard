/**
 * browserWindow.ts
 *
 * @memberof noshboard/api
 * @module noshboard/api/browserWindow
 * @property {noshboard.module:noshboard/api/browserWindow}
 */

import type { COORD } from '@noshboard/types'

function _calcCenter(): COORD {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.floor(width/2)
    const y = Math.floor(height/2)
    const center = {x: x, y: y}
    return center
}

function _getCenter(): COORD {
    const center = _calcCenter()
    return center
}

const browserWindow = {
    get center(): COORD {
        return _getCenter()
    }
}

export default browserWindow