/**
 * template.ts
 *
 * @memberof noshboard
 * @module noshboard/template
 * @property {noshboard.module:noshboard/template} template html templating
 */

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
 * append bulletin template to shadow dom
 */
async function _appendBulletinTemplate() {
    const path = 'resources/templates/bulletin.html'
    const bulletinTemplate = (await(await fetch(path)).text())
    const range = document.createRange()
    const frag = range.createContextualFragment(bulletinTemplate)
    document.body.appendChild(frag)
}

const template = {
    isSupported: (): boolean => {
        return _templateIsSupported()
    },

    appendBulletinTemplate: async () => {
        await _appendBulletinTemplate()
    }
}

export default template
