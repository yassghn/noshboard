/**
 * circulate.ts
 *
 * @memberof noshboard
 * @module noshboard/circulate
 * @property {noshboard.module:noshboard/circulate}
 */

import verbose from '@noshboard/verbose'
import html from '@noshboard/html'
import render from '@noshboard/render'
import bulletin from '@noshboard/bulletin'
import storage from '@noshboard/storage'

/**
 * verbose greeting
 */
function _greet() {
    verbose.greet()
}

/**
 * append bulletin to html
 */
function _appendBulletin() {
    html.appendBulletin()
}

/**
 * get news text from bulletin
 *
 * @returns {string} news text
 */
function _hewNewsText(): string {
    const newsGist = bulletin.newsGist
    const separator = storage.bulletin.options.separator
    const text = { str: '' }
    text.str += `TODAYS NEWS @7 [${newsGist.date}]: `
    newsGist.bulletin.forEach((post, index) => {
        text.str += post.title.toUpperCase() + ' - '
        text.str += post.message.toLowerCase()
        if (index != newsGist.bulletin.length - 1) {
            text.str += ` ${separator} `
        }
    })
    return text.str
}

/**
 * initiate rendering
 */
function _render() {
    const currentTime = document.timeline.currentTime
    if (currentTime) {
        const timeStr = currentTime.toString()
        const timestamp = parseFloat(timeStr)
        const text = _hewNewsText()
        const renderOpts = { text: text.valueOf() }
        render(timestamp, renderOpts)
    } else {
        throw new Error('cannot get currentTime')
    }
}

/**
 * do noshboard
 */
function _noshboard() {
    _greet()
    _appendBulletin()
    _render()
}

const circulate = {
    noshboard: () => {
        _noshboard()
    }
}

export default circulate
