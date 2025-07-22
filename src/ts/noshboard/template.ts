/**
 * template.ts
 *
 * @memberof noshboard
 * @module noshboard/template
 * @property {noshboard.module:noshboard/template} template html templating
 */

import storage from '@noshboard/storage'

/**
 * check browser support for templates
 *
 * @returns {boolean} flag indicating support for html templates
 */
function _templateIsSupported(): boolean {
    if ('content' in document.createElement('template')) {
        return true
    }
    return false
}

/**
 * check if bulletin template was already added
 *
 * @returns {boolean} flag indicating if bulletin template was appended
 */
function _bulletinTemplateAdded(): boolean {
    const config = storage.config
    const id = config.html.template.bulletin.templateId
    const elem = document.getElementById(id)
    if (elem) return true
    return false
}

/**
 * append bulletin template to shadow dom
 */
async function _appendBulletinTemplate() {
    if (!_bulletinTemplateAdded()) {
        const path = '/resources/templates/bulletin.html'
        const bulletinTemplate = await (await fetch(path, { cache: 'reload' })).text()
        const range = document.createRange()
        const frag = range.createContextualFragment(bulletinTemplate)
        document.body.appendChild(frag)
    }
}

/**
 * hew bulletin template
 *
 * @returns {HTMLElement|null} bulletin template
 */
function _getBulletinTempalte(): HTMLTemplateElement | null {
    const config = storage.config
    const id = config.html.template.bulletin.templateId
    const template = document.getElementById(id) as HTMLTemplateElement
    return template
}

const template = {
    isSupported: (): boolean => {
        return _templateIsSupported()
    },

    appendBulletinTemplate: async () => {
        await _appendBulletinTemplate()
    },

    get bulletinTemplate(): HTMLTemplateElement | null {
        return _getBulletinTempalte()
    }
}

export default template
