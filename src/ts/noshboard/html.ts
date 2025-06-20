/**
 * html.ts
 *
 * @memberof noshboard
 * @module noshboard/html
 * @property {noshboard.module:noshboard/html} html html element processing
 */

import bulletin from '@noshboard/bulletin'
import template from '@noshboard/template'
import type { NEWS_GIST } from './types'

/**
 * get news gist from bulletin
 *
 * @returns {NEWS_GIST} bulletin news gist
 */
function _hewNewsGist(): NEWS_GIST {
    return bulletin.newsGist
}

/**
 * append bulletin news gist to html body
 */
function _appendBulletin() {
    if (template.isSupported()) {
        template.appendBulletinTemplate()
    }
}

const html = {
    appendBulletin: () => {
        _appendBulletin()
    }
}

export default html
