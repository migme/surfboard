/*global HTMLElement */
import html from './panel.jade'
import css from './panel.css'

class Panel extends HTMLElement {
  createdCallback () {
    let root = this.createShadowRoot()
    root.innerHTML = html()
    css.insert(root)
  }
  attachedCallback () {
    this.style.display = 'none'
  }
}

export default document.registerElement('mig-panel', Panel)
