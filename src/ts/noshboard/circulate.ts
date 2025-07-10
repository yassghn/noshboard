/**
 * circulate.ts
 *
 * @memberof noshboard
 * @module noshboard/circulate
 * @property {noshboard.module:noshboard/circulate}
 */

import verbose from '@noshboard/verbose'
import html from '@noshboard/html'
import render from '@noshboard/render'

/**
 * verbose greeting
 */
function _greet() {
    verbose.greet()
}

/**
 * append bulletin to html
 */
function _appendBulletin() {
    html.appendBulletin()
}

/**
 * initiate rendering
 */
function _render() {
    const currentTime = document.timeline.currentTime
    if (currentTime) {
        const timeStr = currentTime.toString()
        const timestamp = parseFloat(timeStr)
        render(timestamp)
    } else {
        throw new Error('cannot get currentTime')
    }
}

/**
 * do noshboard
 */
function _noshboard() {
    _greet()
    _appendBulletin()
    _render()
}

const circulate = {
    noshboard: () => {
        _noshboard()
    }
}

export default circulate
