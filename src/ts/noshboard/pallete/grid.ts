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

function _xGrid(cvs: CVS) {
    const color = storage.config.noshboard.grid.lines.baseColor
    const width = storage.config.noshboard.grid.lines.baseWidth
    const state = ctxState.fresh()
    state.props.fillStyle = `rgb(${color})`
    state.props.lineWidth = parseInt(width)
    state.apply((cvs) => {
        for (let i = 0; i <= cvs.width; i++) {

        }
    }, cvs)
}

function _yGrid(cvs: CVS) {}

function _centerHighlight(cvs: CVS) {}

function _gridPallete(cvs: CVS) {
    _xGrid(cvs)
    _yGrid(cvs)
    _centerHighlight(cvs)
}

function gridPallete(cvs: CVS) {
    _gridPallete(cvs)
}

export default gridPallete
