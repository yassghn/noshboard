/**
 * news.ts
 *
 * @memberof noshboard/pallete
 * @module noshboard/pallete/news
 * @property {noshboard.module:noshboard/pallete/news}
 */

import theme from '@noshboard/theme'
import type { CVS } from '../types'

function _newsPallete(cvs: CVS) {
    const ctxState = cvs.api.ctxState.fresh()
    ctxState.props.lineWidth = 5
    ctxState.props.fillStyle = theme.obj.secondaryColor
    ctxState.apply((cvs) => {
        const ctx = cvs.ctx
        const center = cvs.api.browserWindow.center
        const size = 50
        const halfSize = 25
        ctx.translate(center.x, center.y)
        ctx.fillRect(-halfSize, -halfSize, size, size)
    }, cvs)
}

function newsPallete(cvs: CVS) {
    _newsPallete(cvs)
}

export default newsPallete