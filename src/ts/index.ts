/**
 * index.ts
 */

declare function noshboard(): void

(function () {
    function _noshboard() {
        noshboard()
    }

    window.onload = _noshboard
})()
