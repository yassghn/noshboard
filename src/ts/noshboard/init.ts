/**
 * init.ts
 *
 * @memberof noshboard
 * @module noshboard/init
 * @property {noshboard.module:noshboard/init} init noshboard initialization
 */

import state from '@noshboard/state'
import storage from '@noshboard/storage'
import localFridge from '@noshboard/localFridge'
import html from '@noshboard/html'
import audio from '@noshboard/audio'

/**
 * initialize state
 */
function _initState() {
    state.init()
}

/**
 * initialize storage
 */
async function _initStorage() {
    await storage.init()
}

/**
 * add debug flag to local storage if not present. if present,
 * use local storage value for noshboard config.
 */
function _updateDebug() {
    const debug = localFridge.debug
    if (debug == undefined) {
        localFridge.debug = storage.config.debug
    } else {
        storage.config.debug = debug
    }
}

/**
 * add verbose flag to local storage if not present. if present,
 * use local storage value for noshboard config.
 */
function _updateVerbose() {
    const verbose = localFridge.verbose
    if (verbose == undefined) {
        localFridge.verbose = storage.config.verbose
    } else {
        storage.config.verbose = verbose
    }
}

/**
 * update local storage or noshboard config
 */
function _updateLocalFridgeOrStorage() {
    _updateDebug()
    _updateVerbose()
}

/**
 * fit cvs stack to view
 */
function _fitCvsStack() {
    html.fitCvsStack()
}

/**
 * init noshboard
 */
async function _initNoshboard() {
    await _initStorage().then(() => {
        audio.playAudio()
        _initState()
        _updateLocalFridgeOrStorage()
        _fitCvsStack()
    })
}

const init = {
    noshboard: async () => {
        await _initNoshboard()
    }
}

export default init
