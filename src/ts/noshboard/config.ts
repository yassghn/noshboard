/**
 * config.ts
 */

interface CONFIG {
    debug: boolean
}

function _hewConfig(): CONFIG {
    const config: CONFIG = {
        debug: true
    }
    return config
}

function _getConfig(): CONFIG {
    const config = _hewConfig()
    return config
}

const config = {
    get obj(): CONFIG {
        return _getConfig()
    }
}

export default config
