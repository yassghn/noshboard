/**
 * index.ts
 */

declare function noshboard(): void

/**
 * start noshboard from global namespace
 *
 * @namespace index
 */
(function () {
    /**
     * noshboard caller
     * 
     * @memberof index
     */
    function _noshboard() {
        noshboard()
    }

    window.onload = _noshboard
})()
