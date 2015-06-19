/*global HTMLElement CustomEvent */
import insertCss from 'insert-css'
import html from './button.jade'
import css from './button.styl'

class Button extends HTMLElement {
  createdCallback () {
    let root = this.createShadowRoot()
    root.innerHTML = html()
    insertCss(css, {parent: this.shadowRoot})

    root.querySelector('button')
      .addEventListener('click', event => {
        this.dispatchEvent(new CustomEvent('toggle'))
      })
  }
}

export default document.registerElement('mig-button', Button)
