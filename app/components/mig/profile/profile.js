/* global HTMLElement */
import insertCss from 'insert-css'
import html from './profile.jade'
import css from './profile.styl'

class Profile extends HTMLElement {
  createdCallback () {
    this.createShadowRoot()
    this.shadowRoot.innerHTML = html()
    insertCss(css, { parent: this.shadowRoot })
  }
}

export default document.registerElement('mig-profile', Profile)
