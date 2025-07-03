/**
 * theme.ts
 *
 * @memberof noshboard
 * @module noshboard/theme
 * @property {noshboard.module:noshboard/theme} theme css colors
 */

/**
 * get theme colors from css :root
 *
 * @returns {object} theme object containing primary and secondary css colors
 */
function _getTheme() {
    const style = getComputedStyle(document.body)
    const primaryColor = style.getPropertyValue('--primary-color')
    const secondaryColor = style.getPropertyValue('--secondary-color')
    const theme = {
        primaryColor: primaryColor,
        secondaryColor: secondaryColor
    }
    return theme
}

const theme = {
    get obj() {
        return _getTheme()
    }
}

export default theme
