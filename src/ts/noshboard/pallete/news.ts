/**
 * news.ts
 *
 * @memberof noshboard/pallete
 * @module noshboard/pallete/news
 * @property {noshboard.module:noshboard/pallete/news}
 */

import type { CVS } from '../types';

function _newsPallete(cvs: CVS) {
    const ctxState = cvs.api.ctxState.fresh()
    ctxState.props.lineWidth = 5
    ctxState.props.fillStyle = `rgb(185, 13, 13)`
    ctxState.apply((cvs) => {
        const ctx = cvs.ctx
        const center = cvs.api.browserWindow.center
        const size = 50
        ctx.translate(center.x, center.y)
        ctx.fillRect(0, 0, size, size)
    }, cvs)
}

function newsPallete(cvs: CVS) {
    _newsPallete(cvs)
}

export default newsPallete