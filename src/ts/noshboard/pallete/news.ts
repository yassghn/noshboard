/**
 * news.ts
 *
 * @memberof noshboard/pallete
 * @module noshboard/pallete/news
 * @property {noshboard.module:noshboard/pallete/news}
 */

import theme from '@noshboard/theme'
import storage from '@noshboard/storage'
import effects from '@noshboard/effects'
import type { CVS, RENDER_OPTS } from '../types'

/**
 * render scrolling news text
 *
 * @param {CanvasRenderingContext2D} ctx rendering context
 * @param {number} timestamp time
 * @param {RENDER_OPTS} renderOpts render options
 * @param {number} width news box total width
 * @param {number} height news box height
 */
function _news(
    ctx: CanvasRenderingContext2D,
    timestamp: number,
    renderOpts: RENDER_OPTS,
    width: number,
    height: number
) {
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
    effects.scrollingText({
        ctx: ctx,
        timestamp: timestamp,
        text: renderOpts.text,
        scrollSpeed: scrollSpeed,
        fontSize: size,
        maxWidth: width,
        maxHeight: height
    })
}

/**
 * render news box with news
 *
 * @param {CVS} cvs canvas rendering object
 * @param {number}timestamp time
 * @param {RENDER_OPTS} renderOpts render options
 */
function _newsBox(cvs: CVS, timestamp: number, renderOpts: RENDER_OPTS) {
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
        // clip for news
        cvs.api.clip(ctx)
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
        _news(ctx, timestamp, renderOpts, widthTotal, height)
    }, cvs)
}

/**
 * render news pallete
 *
 * @param {CVS} cvs canvas rendering object
 * @param {number }timestamp time
 * @param {RENDER_OPTS} renderOpts render options
 */
function _render(cvs: CVS, timestamp: number, renderOpts: RENDER_OPTS) {
    _newsBox(cvs, timestamp, renderOpts)
}

/**
 * news pallete
 *
 * @param {CVS} cvs canvas rendering object
 * @param {number }timestamp time
 * @param {RENDER_OPTS} renderOpts render options
 */
function newsPallete(cvs: CVS, timestamp: number, renderOpts: RENDER_OPTS) {
    _render(cvs, timestamp, renderOpts)
}

export default newsPallete
