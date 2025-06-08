/**
 * noshboard.ts
 */

import config from '@noshboard/config'

function noshboard() {
    const conf = config.obj
    console.log('welcome to noshboard!')
    console.log(`config.debug = ${conf.debug}`)
}

declare global {
    interface Window { noshboard: any }
}

window.noshboard = window.noshboard || {}

window.noshboard = noshboard
