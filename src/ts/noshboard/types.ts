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
 * @type {BULLETIN_TEMPLATE}
 * @typedef {object} BULLETIN_TEMPLATE
 * @property {string} templateId template html id
 * @property {string} headingId heading html id
 * @property {string} paragraphId paragraph html id
 */
interface BULLETIN_TEMPLATE {
    templateId: string
    headingId: string
    paragraphId: string
}

/**
 * @type {TEMPLATE_CONFIG}
 * @typedef {object} TEMPLATE_CONFIG
 * @property {BULLETIN_TEMPLATE} bulletin bulletin template
 */
interface TEMPLATE_CONFIG {
    bulletin: BULLETIN_TEMPLATE
}

/**
 * @type {ELEM}
 * @typedef {object} ELEM
 * @property {string} id elem html id
 */
interface ELEM {
    id: string
}

/**
 * @type {ELEMS_CONFIG}
 * @typedef {object} ELEMS_CONFIG
 * @property {ELEM} main html element main
 * @property {ELEM} section html element section
 * @property {ELEM} DIV html element div
 */
interface ELEMS_CONFIG {
    main: ELEM
    section: ELEM
    DIV: ELEM
}

/**
 * @type {HTML_CONFIG}
 * @typedef {object} HTML_CONFIG
 * @property {object} cvs canvas stack configuration
 */
interface HTML_CONFIG {
    elems: ELEMS_CONFIG
    cvs: CVS_STACK_CONFIG
    template: TEMPLATE_CONFIG
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

/**
 * @type {BULLETIN_POST}
 * @typedef {object} BULLETIN_POST
 * @property {string} title bulletin post title
 * @property {string} message bulletin post message
 */
interface BULLETIN_POST {
    title: string
    message: string
}

/**
 * @type {NEWS_GIST}
 * @typedef {object} NEWS_GIST
 * @property {string} date date of news gist
 * @property {BULLETIN_POST[]} bulletin array of bulletins
 */
interface NEWS_GIST {
    date: string
    bulletin: BULLETIN_POST[]
}

/**
 * @type {NEWS}
 * @typedef {object} NEWS
 * @property {NEWS_GIST} today the days news gist
 */
interface NEWS {
    today: NEWS_GIST
}

/**
 * @type {NEWS_OPTIONS}
 * @typedef {object} NEWS_OPTIONS
 * @property {string} separator bulletin post title/message separator
 */
interface NEWS_OPTIONS {
    separator: string
}

/**
 * @type {NEWS_JSON}
 * @typedef {object} NEWS_JSON
 * @property {NEWS_OPTIONS} options news options
 * @property {NEWS} news the news
 */
interface NEWS_JSON {
    options: NEWS_OPTIONS
    news: NEWS
}

export type {
    CVS_CONFIG,
    CVS_STACK_CONFIG,
    BULLETIN_TEMPLATE,
    TEMPLATE_CONFIG,
    ELEM,
    ELEMS_CONFIG,
    HTML_CONFIG,
    CONFIG,
    CVS,
    CVS_STACK,
    STRINGS,
    STORAGE,
    BULLETIN_POST,
    NEWS_GIST,
    NEWS,
    NEWS_OPTIONS,
    NEWS_JSON
}
