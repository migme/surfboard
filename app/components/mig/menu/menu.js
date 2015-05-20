/*global HTMLElement */
import html from './menu.jade'
import css from './menu.css'

class Menu extends HTMLElement {
  createdCallback () {
    let root = this.createShadowRoot()
    root.innerHTML = html()
    css.insert(root)
  }
}

export default document.registerElement('mig-menu', Menu)
