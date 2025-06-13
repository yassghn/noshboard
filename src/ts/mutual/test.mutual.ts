/**
 * test.mutual.ts
 */

import config from '@noshboard/config'

function _mutual() {
    console.log(config.obj)
}

const test = {
    mutaul: () => {
        _mutual()
    }
}

export default test