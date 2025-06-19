/**
 * noshboard.ts
 *
 * @memberof noshboard
 * @module noshboard
 * @property {noshboard.module:noshboard}
 */

import init from '@noshboard/init'
import verbose from '@noshboard/verbose'

// extend Window interface, DOM api window, adding noshboard
declare global {
    interface Window {
        noshboard: any
    }
}

(() => {
    /**
     * noashboard main
     *
     * @memberof noshboard.module:noshboard
     */
    function noshboard() {
        init.noshboard().then(() => {
            verbose.greet()
        })
    }

    /**
     * add noshboard function to DOM global space
     *
     * @memberof noshboard.module:noshboard
     */
    function _addToWindow() {
        window.noshboard = window.noshboard || {}
        window.noshboard = noshboard
    }

    _addToWindow()
})()
