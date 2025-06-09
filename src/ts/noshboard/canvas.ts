/**
 * canvas.ts
 */

import api from '@noshboard/api'
import type { CVS, CVS_STACK } from '@noshboard/types'
import configJSON from '../../../resources/config.json' with { type: 'JSON' }

function _hewCvsCtx(id: string): CanvasRenderingContext2D {
    const cvsElem = document.getElementById(id) as HTMLCanvasElement
    const ctx = cvsElem.getContext('2d') as CanvasRenderingContext2D
    return ctx
}

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

function _hewBackgroundCvs(): CVS {
    const id = configJSON.html.cvs.background.id
    const cvs: CVS = _hewCvs(id)
    return cvs
}

function _hewMessageCvs(): CVS {
    const id = configJSON.html.cvs.message.id
    const cvs: CVS = _hewCvs(id)
    return cvs
}

function _hewForegroundCvs(): CVS {
    const id = configJSON.html.cvs.foreground.id
    const cvs: CVS = _hewCvs(id)
    return cvs
}

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
