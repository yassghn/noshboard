/**
 * circulate.ts
 *
 * @memberof noshboard
 * @module noshboard/circulate
 * @property {noshboard.module:noshboard/circulate}
 */

import verbose from '@noshboard/verbose'
import html from '@noshboard/html'

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
 * do noshboard
 */
function _noshboard() {
    _greet()
    _appendBulletin()
}

const circulate = {
    noshboard: () => {
        _noshboard()
    }
}

export default circulate
