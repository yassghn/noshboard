/**
 * grid.ts
 *
 * @memberof noshboard
 * @module noshboard/pallete/grid
 * @property {noshboard.module:noshboard/pallete/grid} grid 2d canvas grid lines
 */

import ctxState from '@noshboard/api/ctxState'
import storage from '@noshboard/storage'
import type { CVS } from '@noshboard/types'

/**
 * render horizontal grid labels
 *
 * @param {CVS} cvs 2d canvas rendering object
 */
function _xLabels(cvs: CVS) {
    const color = storage.config.noshboard.grid.labels.color
    const width = storage.config.noshboard.grid.labels.width
    const font = storage.config.noshboard.grid.labels.font
    const fontSize = storage.config.noshboard.grid.labels.fontSize
    const state = ctxState.fresh()
    state.props.strokeStyle = color
    state.props.lineWidth = parseInt(width)
    state.props.font = `${fontSize} ${font}`
    state.apply((cvs) => {
        const ctx = cvs.ctx
        const spacing = parseInt(storage.config.noshboard.grid.labels.spacing)
        const textColor = storage.config.noshboard.grid.labels.textColor
        const fs = storage.config.noshboard.grid.labels.fontSize.split('px')[0] ?? '0'
        const size = parseInt(fs)
        for (let i = 0; i < cvs.width; i += spacing) {
            // draw grid line
            ctx.beginPath()
            ctx.moveTo(i, 0)
            ctx.lineTo(i, cvs.height)
            ctx.stroke()
            ctx.closePath()
            // draw label
            ctx.save()
            ctx.strokeStyle = textColor
            ctx.strokeText(`${i}`, i, size)
            ctx.restore()
        }
    }, cvs)
}

/**
 *  render vertical grid lines
 *
 * @param {CVS} cvs 2d canvas rendering object
 */
function _xGrid(cvs: CVS) {
    const color = storage.config.noshboard.grid.lines.baseColor
    const width = storage.config.noshboard.grid.lines.baseWidth
    const state = ctxState.fresh()
    state.props.strokeStyle = color
    state.props.lineWidth = parseInt(width)
    state.apply((cvs) => {
        const height = cvs.height
        const ctx = cvs.ctx
        const spacing = parseInt(storage.config.noshboard.grid.lines.baseSpacing)
        for (let i = 0; i <= cvs.width; i += spacing) {
            ctx.beginPath()
            ctx.moveTo(i, 0)
            ctx.lineTo(i, height)
            ctx.stroke()
            ctx.closePath()
        }
    }, cvs)
}

/**
 * render vertical grid labels
 *
 * @param {CVS} cvs 2d canvas rendering object
 */
function _yLabels(cvs: CVS) {
    const color = storage.config.noshboard.grid.labels.color
    const width = storage.config.noshboard.grid.labels.width
    const font = storage.config.noshboard.grid.labels.font
    const fontSize = storage.config.noshboard.grid.labels.fontSize
    const state = ctxState.fresh()
    state.props.strokeStyle = color
    state.props.lineWidth = parseInt(width)
    state.props.font = `${fontSize} ${font}`
    state.apply((cvs) => {
        const ctx = cvs.ctx
        const spacing = parseInt(storage.config.noshboard.grid.labels.spacing)
        const textColor = storage.config.noshboard.grid.labels.textColor
        for (let i = 0; i < cvs.height; i += spacing) {
            // draw grid line
            ctx.beginPath()
            ctx.moveTo(0, i)
            ctx.lineTo(cvs.width, i)
            ctx.stroke()
            ctx.closePath()
            // draw label
            ctx.save()
            ctx.strokeStyle = textColor
            ctx.strokeText(`${i}`, 0, i)
            ctx.restore()
        }
    }, cvs)
}

/**
 *  render horizontal grid lines
 *
 * @param {CVS} cvs 2d canvas rendering object
 */
function _yGrid(cvs: CVS) {
    const color = storage.config.noshboard.grid.lines.baseColor
    const width = storage.config.noshboard.grid.lines.baseWidth
    const state = ctxState.fresh()
    state.props.strokeStyle = color
    state.props.lineWidth = parseInt(width)
    state.apply((cvs) => {
        const width = cvs.width
        const ctx = cvs.ctx
        const spacing = parseInt(storage.config.noshboard.grid.lines.baseSpacing)
        for (let i = 0; i <= cvs.width; i += spacing) {
            ctx.beginPath()
            ctx.moveTo(0, i)
            ctx.lineTo(width, i)
            ctx.stroke()
            ctx.closePath()
        }
    }, cvs)
}

/**
 *  highlight grid center
 *
 * @param {CVS} cvs 2d canvas rendering object
 */
function _centerHighlight(cvs: CVS) {
    const color = storage.config.noshboard.grid.lines.centerColor
    const width = storage.config.noshboard.grid.lines.centerWidth
    const state = ctxState.fresh()
    state.props.strokeStyle = color
    state.props.lineWidth = parseInt(width)
    state.apply((cvs) => {
        const ctx = cvs.ctx
        const center = cvs.api.browserWindow.center
        ctx.beginPath()
        ctx.moveTo(center.x, 0)
        ctx.lineTo(center.x, cvs.height)
        ctx.stroke()
        ctx.closePath()
        ctx.beginPath()
        ctx.moveTo(0, center.y)
        ctx.lineTo(cvs.width, center.y)
        ctx.stroke()
        ctx.closePath()
    }, cvs)
}

/**
 *  grid pallete to render
 *
 * @param {CVS} cvs 2d canvas rendering object
 */
function _gridPallete(cvs: CVS) {
    _xGrid(cvs)
    _yGrid(cvs)
    _xLabels(cvs)
    _yLabels(cvs)
    _centerHighlight(cvs)
}

function gridPallete(cvs: CVS) {
    _gridPallete(cvs)
}

export default gridPallete
