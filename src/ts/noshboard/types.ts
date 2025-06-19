/**
 * types.ts
 *
 * @memberof noshboard
 * @module noshboard/types
 * @property {noshboard.module:noshboard/types} types noshboard types
 */

/**
 * @type {CONFIG}
 * @typedef {object} CONFIG noshboard configuration interface
 * @property {boolean} debug debug flag
 * @property {boolean} verbose verbose flag
 * @property {object} html html elements
 */
interface CONFIG {
    debug: boolean
    verbose: boolean
    html: object
}

/**
 * @type {CVS}
 * @typedef {object} CVS 2d canvas rendering object
 * @property {CanvasRenderingContext2D} ctx canvas 2d rendering context
 * @property {object} api rendering api
 * @property {number} width canvas width in pixels
 * @property {number} height canvas height in pixels
 */
interface CVS {
    ctx: CanvasRenderingContext2D
    api: object
    width: number
    height: number
}

/**
 * @type {CVS_STACK}
 * @typedef {object} CVS_STACK canvas html elements
 * @property {CVS} background background canvas
 * @property {CVS} message message canvas
 * @property {CVS} foreground foreground canvas
 */
interface CVS_STACK {
    background: CVS
    message: CVS
    foreground: CVS
}

/**
 * @type {STRINGS}
 * @typedef {object} STRINGS noshboard string constants
 * @property {string} greet greeting string
 */
interface STRINGS {
    greet: string
}

/**
 * @type {STORAGE}
 * @typedef {object} STORAGE noshboard storage
 * @property {STRINGS} strings string constants
 */
interface STORAGE {
    strings: STRINGS
}

export type { CONFIG, CVS, CVS_STACK, STRINGS, STORAGE }
