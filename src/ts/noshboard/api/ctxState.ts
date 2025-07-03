/**
 * ctxState.ts
 *
 * @memberof noshboard/api
 * @module noshboard/api/ctxState
 * @property {noshboard.module:noshboard/api/ctxState}
 */

import obj from '@noshboard/obj'
import ctxProps from '@noshboard/api/ctxProps'
import type { CTX_PROPS, CTX_STATE, CVS } from '@noshboard/types'

function _setProps(props: CTX_PROPS, cvs: CVS) {
    Object.assign(cvs.ctx, ...[props])
}

function _apply(props: CTX_PROPS, lambda: (cvs: CVS) => any, cvs: CVS) {
    cvs.ctx.save()
    _setProps(props, cvs)
    const ret = lambda(cvs)
    cvs.ctx.restore()
    return ret
}

function _hewCtxState(): CTX_STATE {
    const obj: CTX_STATE = {
        props: { ...ctxProps } as CTX_PROPS,

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
