/**
 * localFridge.ts
 *
 * @memberof noshboard
 * @module noshboard/localFridge
 * @property {noshboard.module:noshboard/localFridge}
 */

import { fridgeItems } from '@noshboard/types'

/**
 * add value for name to local storage
 *
 * @param {string} name key of target
 * @param {string} value value for target
 */
function _addToLocalFridge(name: string, value: string) {
    if (name && value) {
        localStorage.setItem(name, value)
    }
}

/**
 * get value of name from local storage
 *
 * @param {string} name key of target
 * @returns {string|null} value from local storage
 */
function _getFromLocalFridge(name: string): string | null {
    if (name) {
        return localStorage.getItem(name)
    }
    return null
}

/**
 * set boolean on local storage
 *
 * @param {string} name key of target
 * @param {boolean} value flag
 */
function _setBoolean(name: string, value: boolean) {
    const valStr = `${value}`
    _addToLocalFridge(name, valStr)
}

/**
 * convert local storage string value to boolean
 *
 * @param {string} name target key
 * @returns {boolean|undefined} flag
 */
function _getBoolean(name: string): boolean | undefined {
    const value = _getFromLocalFridge(name)
    if (value) {
        const bool = value == 'true' ? true : false
        return bool
    }
    return undefined
}

/**
 * set local storage verbose flag
 *
 * @param {boolean} value verbose flag
 */
function _setVerbose(value: boolean) {
    _setBoolean(fridgeItems.verbose, value)
}

/**
 * get verbose flag from local storage
 *
 * @returns {boolean|undefined} localStorage verbose flag
 */
function _getVerbose(): boolean | undefined {
    return _getBoolean(fridgeItems.verbose)
}

/**
 * set local storage debug flag
 *
 * @param {boolean} value debug flag
 */
function _setDebug(value: boolean) {
    _setBoolean(fridgeItems.debug, value)
}

/**
 * get local storage debug flag
 *
 * @returns {boolean|undefined} localStorage debug flag
 */
function _getDebug(): boolean | undefined {
    return _getBoolean(fridgeItems.debug)
}

const localFridge = {
    set debug(value: boolean) {
        _setDebug(value)
    },

    get debug(): boolean | undefined {
        return _getDebug()
    },

    set verbose(value: boolean) {
        _setVerbose(value)
    },

    get verbose(): boolean | undefined {
        return _getVerbose()
    },
}

export default localFridge
