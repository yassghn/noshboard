/**
 * news.ts
 *
 * @memberof noshboard
 * @module noshboard/news
 * @property {noshboard.module:noshboard/news} news fetch noshboard news json
 */

import type { NEWS_JSON } from './types'

/**
 * fetch news.json
 *
 * @returns {Promise<object>} news json object
 */
async function _fetchNewsJson(): Promise<object> {
    const jsonPath = 'resources/news.json'
    const jsonObj = (await (await (fetch(jsonPath))).json())
    return jsonObj
}

/**
 * get noshboard news object from json object
 *
 * @returns {Promise<NEWS_JSON>} noshboard news object
 */
async function _hewNews(): Promise<NEWS_JSON> {
    const newsJSON = await _fetchNewsJson()
    const news = { ...newsJSON } as NEWS_JSON
    return news
}

/**
 * get noshboard news object
 *
 * @returns {Promise<NEWS_JSON>} noshboard news object
 */
async function _getNews(): Promise<NEWS_JSON> {
    const news = _hewNews()
    return news
}

const news = {
    async get(): Promise<NEWS_JSON> {
        return _getNews()
    }
}

export default news
