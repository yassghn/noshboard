/**
 * noshboard.ts
 */

import init from '@noshboard/init'
import state from '@noshboard/state'

// extend Window interface, DOM api window, adding noshboard
declare global {
    interface Window {
        noshboard: any
    }
}

;(() => {
    /**
     * noashboard main
     */
    function noshboard() {
        init.noshboard().then(() => {
            const conf = state.config
            if (conf.debug) {
                console.log('welcome to noshboard!')
            }
        })
    }

    /**
     * add noshboard function to DOM global space
     */
    function _addToWindow() {
        window.noshboard = window.noshboard || {}
        window.noshboard = noshboard
    }

    _addToWindow()
})()
