/*global HTMLElement CustomEvent */
import insertCss from 'insert-css'
import html from './menu.jade'
import css from './menu.styl'

class Menu extends HTMLElement {
  createdCallback () {
    let root = this.createShadowRoot()
    root.innerHTML = html()
    insertCss(css, {parent: this.shadowRoot})

    root.querySelector('button')
      .addEventListener('click', event => {
        this.dispatchEvent(new CustomEvent('navigate', {
          detail: { tagName: 'mig-login' },
          bubbles: true
        }))
      })
  }
}

export default document.registerElement('mig-menu', Menu)
