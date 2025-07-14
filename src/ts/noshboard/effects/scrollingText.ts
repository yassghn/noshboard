/**
 * scrollingText.ts
 *
 * @memberof noshboard/effects
 * @module noshboard/effects/scrollingText
 * @property {noshboard.module:noshboard/effects/scrollingText}
 */

import type { SCROLLING_TEXT_OPTS } from '@noshboard/types'

const _state = {
    textWidth: null as unknown as number,
    x: null as unknown as number,
    y: null as unknown as number,
    lastUpdate: null as unknown as number
}

/**
 * update timestamp for last state update
 *
 * @param {number} timestamp time
 */
function _updateLastUpdate(timestamp: number) {
    _state.lastUpdate = timestamp
}

/**
 * determine if effect state needs update
 *
 * @param {SCROLLING_TEXT_OPTS} opts scrolling text options
 * @returns {boolean} flag indicating if effect state needs update
 */
function _needsUpdate(opts: SCROLLING_TEXT_OPTS) {
    // get scroll speed in miliseconds
    const limit = opts.scrollSpeed
    // timestamps/limit predicate
    const update = opts.timestamp - _state.lastUpdate >= limit
    return update
}

/**
 * render scrolling text
 *
 * @param {SCROLLING_TEXT_OPTS} opts scrolling text options
 */
function _render(opts: SCROLLING_TEXT_OPTS) {
    const ctx = opts.ctx
    ctx.fillText(opts.text, _state.x, _state.y)
}

/**
 * update effect state
 *
 * @param {SCROLLING_TEXT_OPTS} opts scrolling text options
 */
function _update(opts: SCROLLING_TEXT_OPTS) {
    if (_needsUpdate(opts)) {
        _state.x -= 2
        const reset = _state.x < -_state.textWidth
        if (reset) {
            _state.x = opts.maxWidth
        }
        _updateLastUpdate(opts.timestamp)
    }
}

/**
 * set initial effect state
 *
 * @param {SCROLLING_TEXT_OPTS} opts scrolling text options
 */
function _setState(opts: SCROLLING_TEXT_OPTS) {
    _state.textWidth = opts.ctx.measureText(opts.text).width
    _state.x = opts.maxWidth
    _state.y = opts.fontSize
    _state.lastUpdate = opts.timestamp
}

/**
 * scrolling text effect
 *
 * @param {SCROLLING_TEXT_OPTS} opts scrolling text options
 */
function _scrollingText(opts: SCROLLING_TEXT_OPTS) {
    if (_state.lastUpdate) {
        _update(opts)
    } else {
        _setState(opts)
    }
    _render(opts)
}

function scrollingText(opts: SCROLLING_TEXT_OPTS) {
    _scrollingText(opts)
}

export default scrollingText
