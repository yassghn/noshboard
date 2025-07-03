/**
 * api.ts
 *
 * @memberof noshboard
 * @module noshboard/api
 * @property {noshboard.module:noshboard/api} api canvas 2d rendering context api
 */

import browserWindow from '@noshboard/api/browserWindow'
import ctxState from '@noshboard/api/ctxState'
import type { BROWSER_WINDOW_API,  } from './types'

const api = {
    browserWindow: browserWindow as BROWSER_WINDOW_API,
    ctxState: ctxState
}

export default api
