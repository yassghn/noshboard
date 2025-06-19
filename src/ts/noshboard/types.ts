/**
 * types.ts
 *
 * @memberof noshboard
 * @module noshboard/types
 * @property {noshboard.module:noshboard/types} types noshboard types
 */

/**
 * @type {CVS_CONFIG}
 * @typedef {object} CVS_CONFIG
 * @property {string} name name of canvas object
 * @property {string} id canvas html element id
 */
interface CVS_CONFIG {
    name: string
    id: string
}

/**
 * @type {CVS_STACK_CONFIG}
 * @typedef {object} CVS_STACK_CONFIG
 * @property {CVS_CONFIG} background background canvas config
 * @property {CVS_CONFIG} message message canvas config
 * @property {CVS_CONFIG} foreground foreground canvas config
 */
interface CVS_STACK_CONFIG {
    background: CVS_CONFIG
    message: CVS_CONFIG
    foreground: CVS_CONFIG
}

/**
 * @type {HTML_CONFIG}
 * @typedef {object} HTML_CONFIG
 * @property {object} cvs canvas stack configuration
 */
interface HTML_CONFIG {
    cvs: CVS_STACK_CONFIG
}

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
    html: HTML_CONFIG
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

export type { CVS_CONFIG, CVS_STACK_CONFIG, HTML_CONFIG, CONFIG, CVS, CVS_STACK, STRINGS, STORAGE }
