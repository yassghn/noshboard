/**
 * news.ts
 *
 * @memberof noshboard/pallete
 * @module noshboard/pallete/news
 * @property {noshboard.module:noshboard/pallete/news}
 */

import theme from '@noshboard/theme'
import storage from '@noshboard/storage'
import type { CVS } from '../types'

function _news(ctx: CanvasRenderingContext2D, timestamp: number, width: number, height: number) {
    const font = storage.config.noshboard.newsTicker.font
    const fontSize = storage.config.noshboard.newsTicker.fontSize
    const fs = fontSize.split('px')[0] ?? '0'
    const size = parseInt(fs)
    const scrollSpeed = parseFloat(storage.config.noshboard.newsTicker.scrollSpeed)
    const fontColor = theme.obj.primaryColor
    ctx.font = `${fontSize} ${font}`
    ctx.textAlign = 'left'
    ctx.textBaseline = 'middle'
    ctx.fillStyle = fontColor
    ctx.fillText('test test test', 0, size)
}

function _newsBox(cvs: CVS, timestamp: number) {
    const ctxState = cvs.api.ctxState.fresh()
    ctxState.props.lineWidth = 5
    ctxState.props.fillStyle = theme.obj.secondaryColor
    ctxState.apply((cvs) => {
        const ctx = cvs.ctx
        const primaryColor = theme.obj.primaryColor
        const secondaryColor = theme.obj.secondaryColor
        const center = cvs.api.browserWindow.center
        const width = 600
        const blurEdgeWidth = 75
        const widthTotal = width + blurEdgeWidth
        const height = 75
        const halfWidth = Math.floor(widthTotal / 2)
        const halfHeight = Math.floor(height / 2)
        // translate to center of window
        ctx.translate(center.x, center.y)
        // translate so news box is centered when draw
        ctx.translate(-halfWidth, -halfHeight)
        // draw news box
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(widthTotal, 0)
        ctx.lineTo(widthTotal, height)
        ctx.lineTo(0, height)
        ctx.lineTo(0, 0)
        ctx.fill()
        ctx.closePath()
        // add edge blurs
        const leftBlur = ctx.createLinearGradient(0, halfHeight, blurEdgeWidth, halfHeight)
        leftBlur.addColorStop(0.7, primaryColor)
        leftBlur.addColorStop(1, secondaryColor)
        ctx.fillStyle = leftBlur
        ctx.fillRect(0, 0, blurEdgeWidth, height)
        const rightBlur = ctx.createLinearGradient(
            widthTotal,
            halfHeight,
            widthTotal - blurEdgeWidth,
            halfHeight
        )
        rightBlur.addColorStop(0.7, primaryColor)
        rightBlur.addColorStop(1, secondaryColor)
        ctx.fillStyle = rightBlur
        ctx.fillRect(widthTotal, 0, -blurEdgeWidth, height)
        // add news
        _news(ctx, timestamp, widthTotal, height)
    }, cvs)
}

function _newsPallete(cvs: CVS, timestamp: number) {
    _newsBox(cvs, timestamp)
}

function newsPallete(cvs: CVS, timestamp: number) {
    _newsPallete(cvs, timestamp)
}

export default newsPallete
