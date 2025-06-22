/**
 * noshboard.ts
 *
 * @memberof noshboard
 * @module noshboard
 * @property {noshboard.module:noshboard}
 */

import circulate from '@noshboard/circulate'
import init from '@noshboard/init'
import util from '@noshboard/util'

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
     * set window properties
     *
     * @memberof noshboard.module:noshboard
     */
    (function setWindowProps() {
        util.addToWindow(noshboard)
        util.setResize()
    })()
})()
