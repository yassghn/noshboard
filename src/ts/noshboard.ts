/**
 * noshboard.ts
 */

import config from '@noshboard/config'

// extend Window interface, DOM api window, adding noshboard
declare global {
    interface Window {
        noshboard: any
    }
}

(() => {

    /**
     * noashboard main
     */
    function noshboard() {
        const conf = config.obj
        console.log('welcome to noshboard!')
        console.log(`config.debug = ${conf.debug}`)
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
