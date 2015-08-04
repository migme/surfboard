/* global HTMLElement */
import { on, dispatch } from 'bubbly'
import { closest } from 'parasol'
import insertCss from 'insert-css'
import html from './button.jade'
import css from './button.styl'

class Button extends HTMLElement {
  createdCallback () {
    let root = this.createShadowRoot()
    root.innerHTML = html()
    insertCss(css, {parent: this.shadowRoot})
    root.querySelector('button')
      ::on('click', () => this::dispatch('toggle'))
  }
  attachedCallback () {
    this::closest('mig-me')::on('toggle', event =>
      this.shadowRoot.query('button')
        .classList.toggle('close')
    )
  }
}

export default document.registerElement('mig-button', Button)
