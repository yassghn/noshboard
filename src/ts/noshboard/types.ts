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

export type { CVS }
