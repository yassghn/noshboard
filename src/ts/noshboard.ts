/**
 * noshboard.ts
 *
 * @memberof noshboard
 * @module noshboard
 * @property {noshboard.module:noshboard}
 */

import circulate from '@noshboard/circulate'
import init from '@noshboard/init'

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
            circulate.noshboard()
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
