/**
 * ctxState.ts
 *
 * @memberof noshboard/api
 * @module noshboard/api/ctxState
 * @property {noshboard.module:noshboard/api/ctxState}
 */

import ctxProps from '@noshboard/api/ctxProps'
import type { CTX_PROPS, CTX_STATE, CVS } from '@noshboard/types'

/**
 * set 2d rendering context properties on 2d rendering context
 *
 * @param {CTX_PROPS} props 2d rendering context properties
 * @param {CVS} cvs 2d canvas rendering object
 */
function _setProps(props: CTX_PROPS, cvs: CVS) {
    Object.assign(cvs.ctx, ...[props])
}

/**
 * apply 2d rendering context properties to rendering lambda with save and restore
 *
 * @param {CTX_PROPS} props 2d rendering context properties
 * @param {function} lambda rendering function
 * @param {CVS} cvs 2d canvas rendering object
 * @returns {any}
 */
function _apply(props: CTX_PROPS, lambda: (cvs: CVS) => any, cvs: CVS) {
    cvs.ctx.save()
    _setProps(props, cvs)
    const ret = lambda(cvs)
    cvs.ctx.restore()
    return ret
}

/**
 * hew context state for rendering
 *
 * @returns {CTX_STATE} fresh context to render
 */
function _hewCtxState(): CTX_STATE {
    const obj: CTX_STATE = {
        props: { ...ctxProps.fresh },

        get apply(): (lambda: (cvs: CVS) => any, cvs: CVS) => any {
            return (lambda: (cvs: CVS) => any, cvs: CVS) => {
                return _apply(this.props, lambda, cvs)
            }
        }
    }
    return obj
}

const ctxState = {
    get fresh(): () => CTX_STATE {
        return _hewCtxState
    }
}

export default ctxState
