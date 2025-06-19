/**
 * canvas.ts
 *
 * @memberof noshboard
 * @module noshboard/canvas
 * @property {noshboard.module:noshboard/canvas} canvas canvas objects
 */

import api from '@noshboard/api'
import storage from '@noshboard/storage'
import type { CVS, CVS_STACK } from '@noshboard/types'

/**
 * get canvas redering context for a specified canvas html element
 *
 * @param {string} id id of canvas html element
 * @returns {CanvasRenderingContext2D} canvas rendering context
 */
function _hewCvsCtx(id: string): CanvasRenderingContext2D {
    const cvsElem = document.getElementById(id) as HTMLCanvasElement
    const ctx = cvsElem.getContext('2d') as CanvasRenderingContext2D
    return ctx
}

/**
 * get canvas for a specified canvas html element
 *
 * @param {string} id id of canvas html element
 * @returns {CVS} html element canvas object
 */
function _hewCvs(id: string): CVS {
    const ctx = _hewCvsCtx(id) as CanvasRenderingContext2D
    const cvs: CVS = {
        ctx: ctx,
        api: api,
        width: ctx.canvas.width,
        height: ctx.canvas.height,
    }
    return cvs
}

/**
 * get background canvas
 *
 * @returns {CVS} html element canvas object
 */
function _hewBackgroundCvs(): CVS {
    const id = storage.config.html.cvs.background.id
    const cvs: CVS = _hewCvs(id)
    return cvs
}

/**
 * get message canvas
 *
 * @returns {CVS} html element canvas object
 */
function _hewMessageCvs(): CVS {
    const id = storage.config.html.cvs.message.id
    const cvs: CVS = _hewCvs(id)
    return cvs
}

/**
 * get foreground canvas
 *
 * @returns {CVS} html element canvas object
 */
function _hewForegroundCvs(): CVS {
    const id = storage.config.html.cvs.foreground.id
    const cvs: CVS = _hewCvs(id)
    return cvs
}

/**
 * get canvas objects aggregate
 *
 * @returns {CVS_STACK} html element canvas objects aggregate
 */
function _hewCvsStack(): CVS_STACK {
    const cvsStack: CVS_STACK = {
        background: _hewBackgroundCvs(),
        message: _hewMessageCvs(),
        foreground: _hewForegroundCvs()
    }
    return cvsStack
}

const canvas = {
    get cvsStack(): CVS_STACK {
        return _hewCvsStack()
    }
}

export default canvas
