/*global HTMLElement */
import insertCss from 'insert-css'
import html from './panel.jade'
import css from './panel.styl'

class Panel extends HTMLElement {
  createdCallback () {
    let root = this.createShadowRoot()
    root.innerHTML = html()
    insertCss(css, {parent: this.shadowRoot})
  }
  attachedCallback () {
    this.style.display = 'none'
  }
}

export default document.registerElement('mig-panel', Panel)
