/**
 * api.ts
 */

import test from "@mutual/test"

function _test() {
    test.mutaul()
}

const api = {
    apiTest: () => {
        _test()
    }
}

export default api
