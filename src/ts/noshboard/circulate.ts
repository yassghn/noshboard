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
    render()
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
