/*global HTMLElement */
import insertCss from 'insert-css'
import MigMenu from '../menu'
import html from './button.jade'
import css from './button.styl'

class Button extends HTMLElement {
  createdCallback () {
    let root = this.createShadowRoot()
    root.innerHTML = html()
    insertCss(css, {parent: this.shadowRoot})

    root.querySelector('button')
      .addEventListener('click', event => {
        var el = this.parentNode.querySelector('mig-panel')
        el.appendChild(new MigMenu())
      })
  }
}

export default document.registerElement('mig-button', Button)
