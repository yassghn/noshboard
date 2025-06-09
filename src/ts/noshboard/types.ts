/**
 * types.ts
 */

/**
 * @typedef {object} CVS
 * @type {CVS} 2d canvas rendering object
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
 * @typedef {object} CVS_STACK
 * @type {CVS_STACK} canvas html elements
 * @property {CVS} background background canvas
 * @property {CVS} message message canvas
 * @property {CVS} foreground foreground canvas
 */
interface CVS_STACK {
    background: CVS
    message: CVS
    foreground: CVS
}

export type { CVS, CVS_STACK }
