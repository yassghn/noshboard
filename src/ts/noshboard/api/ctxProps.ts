/**
 * ctxProps.ts
 *
 * @memberof noshboard/api
 * @module noshboard/api/ctxProps
 * @property {noshboard.module:noshboard/api/ctxProps}
 */

import type { CTX_PROPS } from '@noshboard/types'

/**
 * hew 2d rendering context properties
 *
 * @returns {CTX_PROPS} 2d rendering context properties
 */
function _hewCtxProps(): CTX_PROPS {
    const ctxProps = {
        globalAlpha: undefined as unknown as number,
        globalCompositeOperation: undefined as unknown as GlobalCompositeOperation,
        strokeStyle: undefined as unknown as string | CanvasGradient | CanvasPattern,
        fillStyle: undefined as unknown as string | CanvasGradient | CanvasPattern,
        filter: undefined as unknown as string,
        imageSmoothingEnabled: undefined as unknown as boolean,
        lineWidth: undefined as unknown as number,
        lineCap: undefined as unknown as CanvasLineCap,
        lineJoin: undefined as unknown as CanvasLineJoin,
        miterLimit: undefined as unknown as number,
        lineDashOffset: undefined as unknown as number,
        shadowOffsetX: undefined as unknown as number,
        shadowOffsetY: undefined as unknown as number,
        shadowBlur: undefined as unknown as number,
        shadowColor: undefined as unknown as string,
        font: undefined as unknown as string,
        textAlign: undefined as unknown as CanvasTextAlign,
        textBaseline: undefined as unknown as CanvasTextBaseline,
        direction: undefined as unknown as CanvasDirection,
        letterSpacing: undefined as unknown as string,
        fontKerning: undefined as unknown as CanvasFontKerning,
        fontStretch: undefined as unknown as CanvasFontStretch,
        fontVariantCaps: undefined as unknown as CanvasFontVariantCaps,
        textRendering: undefined as unknown as CanvasTextRendering,
        wordSpacing: undefined as unknown as string
    }
	return ctxProps
}

const ctxProps = {
    get fresh(): CTX_PROPS {
        return _hewCtxProps()
    }
}

export default ctxProps
