/**
 * noshboard.ts
 */

import config from '@noshboard/config'

function noshboard() {
    const conf = config.obj
    console.log('welcome to noshboard!')
    console.log(`config.debug = ${conf.debug}`)
}

window.noshboard = noshboard
