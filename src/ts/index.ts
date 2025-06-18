/**
 * index.ts
 */

declare function noshboard(): void

/**
 * start noshboard from global namespace
 */
(function () {
    /**
     * noshboard caller
     */
    function _noshboard() {
        noshboard()
    }

    window.onload = _noshboard
})()
