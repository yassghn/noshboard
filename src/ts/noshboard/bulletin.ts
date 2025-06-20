/**
 * bulletin.ts
 *
 * @memberof noshboard
 * @module noshboard/bulletin
 * @property {noshboard.module:noshboard/bulletin}
 */

import storage from '@noshboard/storage'
import type { NEWS_GIST } from './types'

/**
 * hew news gist from storage
 *
 * @returns {NEWS_GIST} news.json news gist
 */
function _hewNewsGist(): NEWS_GIST {
    return storage.bulletin.news.today
}

/**
 * get news gist
 *
 * @returns {NEWS_GIST} news.json news gist
 */
function _getNewsGist(): NEWS_GIST {
    return _hewNewsGist()
}

const bulletin = {
    get newsGist(): NEWS_GIST {
        return _getNewsGist()
    }
}

export default bulletin
