/* global HTMLElement */
import { on, dispatch } from 'bubbly'
import insertCss from 'insert-css'
import html from './button.jade'
import css from './button.styl'

class Button extends HTMLElement {
  createdCallback () {
    let root = this.createShadowRoot()
    root.innerHTML = html()
    insertCss(css, {parent: this.shadowRoot})
    root.querySelector('button')::on('click', () => this::dispatch('toggle'))
  }
}

export default document.registerElement('mig-button', Button)
