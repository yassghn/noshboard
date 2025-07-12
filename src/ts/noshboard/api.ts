/**
 * api.ts
 *
 * @memberof noshboard
 * @module noshboard/api
 * @property {noshboard.module:noshboard/api} api canvas 2d rendering context api
 */

import browserWindow from '@noshboard/api/browserWindow'
import ctxState from '@noshboard/api/ctxState'
import wrapper from '@noshboard/api/wrapper'
import type { BROWSER_WINDOW_API,  } from './types'

const api = {
    browserWindow: browserWindow as BROWSER_WINDOW_API,
    ctxState: ctxState,
    // canvas rendering context 2d api wrapper
    clip: wrapper.clip
}

export default api
