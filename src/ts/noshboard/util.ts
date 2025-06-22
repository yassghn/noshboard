/**
 * util.ts
 *
 * @memberof noshboard
 * @module noshboard/util
 * @property {noshboard.module:noshboard/window} util utility functions
 */

import html from '@noshboard/html'

// extend Window interface, DOM api window, adding noshboard
declare global {
    interface Window {
        noshboard: any
    }
}

/**
 * add noshboard function to DOM global space
 */
function _addToWindow(lambda: () => void) {
    window.noshboard = window.noshboard || {}
    window.noshboard = lambda
}

/**
 * set resize function
 */
function _setResize() {
    window.onresize = html.fitCvsStack
}

const util = {
    addToWindow: (lambda: () => void) => {
        _addToWindow(lambda)
    },

    setResize: () => {
        _setResize()
    }
}

export default util
