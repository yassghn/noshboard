/**
 * storage.ts
 *
 * @memberof noshboard
 * @module noshboard/storage
 * @property {noshboard.module:noshboard/storage} storage noshboard storage
 */

import config from '@noshboard/config'
import strings from '@noshboard/strings'
import news from '@noshboard/news'
import type { CONFIG, NEWS_JSON, STRINGS } from './types'

const _state = {
    config: null as unknown as CONFIG,
    strings: null as unknown as STRINGS,
    news: null as unknown as NEWS_JSON
}

/**
 * add config to state
 */
async function _setConfig() {
    const conf = await config.get()
    _state.config = conf
}

/**
 * get config from state
 *
 * @returns {CONFIG} noshboard configuration object
 */
function _getConfig() {
    return _state.config
}

/**
 * add strings to state
 */
async function _setStrings() {
    const strs = await strings.get() as STRINGS
    _state.strings = strs

}

/**
 * get noshboard string constants
 *
 * @returns {STRINGS} noshboard string constants
 */
function _getStrings(): STRINGS {
    return _state.strings
}

/**
 * add news to state
 */
async function _setNews() {
    const newsJSON = await news.get()
    _state.news = newsJSON
}

/**
 * get news from state
 *
 * @returns {NEWS_JSON} news json object
 */
function _getNews(): NEWS_JSON {
    return _state.news
}

/**
 * initialize storage
 */
async function _init() {
    await _setConfig()
    await _setStrings()
    await _setNews()
}

const storage = {
    init: async () => {
        await _init()
    },

    get config(): CONFIG {
        return _getConfig()
    },

    get strings(): STRINGS {
        return _getStrings()
    },

    get bulletin(): NEWS_JSON {
        return _getNews()
    }
}

export default storage
