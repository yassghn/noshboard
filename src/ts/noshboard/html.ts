/**
 * html.ts
 *
 * @memberof noshboard
 * @module noshboard/html
 * @property {noshboard.module:noshboard/html} html html element processing
 */

import bulletin from '@noshboard/bulletin'
import template from '@noshboard/template'
import storage from '@noshboard/storage'
import type { BULLETIN_POST, NEWS_GIST } from './types'

/**
 * @type {BULLETIN_POST_HTML}
 * @typedef {object} BULLETIN_POST_HTML
 * @property {HTMLElement} heading html element heading
 * @property {HTMLElement} paragraph html element paragraph
 */
interface BULLETIN_POST_HTML {
    heading: HTMLElement
    paragraph: HTMLElement
}

/**
 * get news gist from bulletin
 *
 * @returns {NEWS_GIST} bulletin news gist
 */
function _hewNewsGist(): NEWS_GIST {
    return bulletin.newsGist
}

/**
 * set ids of bulletin html elements
 *
 * @param {BULLETIN_POST} post bulletin post
 * @param {HTMLElement} heading html element heading
 * @param {HTMLElement} paragraph html element paragraph
 */
function _setIds(post: BULLETIN_POST, heading: HTMLElement, paragraph: HTMLElement) {
    if (heading && paragraph) {
        const _hId = heading.getAttribute('id')
        const _pId = paragraph.getAttribute('id')
        if (_hId && _pId) {
            const hId = _hId.replace('_', post.title.replaceAll(' ', '-'))
            const pId = _pId.replace('_', post.title.replaceAll(' ', '-'))
            console.log(hId, pId)
            if (hId && pId) {
                heading.setAttribute('id', hId)
                paragraph.setAttribute('id', pId)
            }
        }
    }
}

/**
 * set text content of bulletin html elements
 *
 * @param {BULLETIN_POST} post bulletin post
 * @param {string} dateStr news gist date string
 * @param {HTMLElement} heading html element heading
 * @param {HTMLElement} paragraph html element paragraph
 */
function _setTextContent(
    post: BULLETIN_POST,
    dateStr: String,
    heading: HTMLElement,
    paragraph: HTMLElement
) {
    if (heading && paragraph) {
        heading.textContent = dateStr + ': ' + post.title
        paragraph.textContent = post.message
    }
}

/**
 * set bulletin html elements hidden attribute
 *
 * @param {HTMLElement} heading html element heading
 * @param {HTMLElement} paragraph html element paragraph
 */
function _setHIdden(heading: HTMLElement, paragraph: HTMLElement) {
    if (heading && paragraph) {
        heading.setAttribute('hidden', '')
        paragraph.setAttribute('hidden', '')
    }
}

/**
 * get bulletin post html elements
 *
 * @param {BULLETIN_POST} post bulletin post
 * @param {string} dateStr news gist date string
 * @param {HTMLTemplateElement} bulletinTemplate bulletin post html template
 * @returns {BULLETIN_POST_HTML} bulletin post html elements
 */
function _hewBulletinPost(
    post: BULLETIN_POST,
    dateStr: string,
    bulletinTemplate: HTMLTemplateElement
): BULLETIN_POST_HTML {
    const clone = bulletinTemplate.content.cloneNode(true)
    const heading = clone.firstChild?.nextSibling as HTMLElement
    const paragraph = heading?.nextSibling?.nextSibling as HTMLElement
    _setIds(post, heading, paragraph)
    _setTextContent(post, dateStr, heading, paragraph)
    _setHIdden(heading, paragraph)
    const postHtml = { heading: heading, paragraph: paragraph } as BULLETIN_POST_HTML
    return postHtml
}

/**
 * get html elements for all bulletin posts
 *
 * @param {NEWS_GIST} newsGist news gist from news.json
 * @param {HTMLTemplateElement} bulletinTemplate bulletin post html template
 * @returns {BULLETIN_POST_HTML[]} array of bulletin post html elements
 */
function _hewBulletinPosts(
    newsGist: NEWS_GIST,
    bulletinTemplate: HTMLTemplateElement
): BULLETIN_POST_HTML[] {
    const dateStr = newsGist.date
    const bulletinPosts = [] as BULLETIN_POST_HTML[]
    newsGist.bulletin.forEach((post: BULLETIN_POST) => {
        const postHtml = _hewBulletinPost(post, dateStr, bulletinTemplate)
        bulletinPosts.push(postHtml)
    })
    return bulletinPosts
}

/**
 * append all bulletin post html elements
 * 
 * @param {BULLETIN_POST_HTML[]} bulletinPostsarray of bulletin post html elements
 */
function _appendBulletinHtml(bulletinPosts: BULLETIN_POST_HTML[]) {
    const config = storage.config
    const parentId = config.html.elems.section.id
    const parent = document.getElementById(parentId)
    if (parent) {
        bulletinPosts.forEach((post: BULLETIN_POST_HTML) => {
            parent.insertBefore(post.heading, parent.firstChild)
            parent.insertBefore(post.paragraph, parent.firstChild)
        })
    }
}

/**
 * append bulletin news gist to html body
 */
function _appendBulletin() {
    if (template.isSupported()) {
        template.appendBulletinTemplate().then(() => {
            const newsGist = _hewNewsGist()
            const bulletinTemplate = template.bulletinTemplate
            if (bulletinTemplate) {
                const bulletinPosts = _hewBulletinPosts(newsGist, bulletinTemplate)
                _appendBulletinHtml(bulletinPosts)
            }
        })
    }
}

const html = {
    appendBulletin: () => {
        _appendBulletin()
    }
}

export default html
