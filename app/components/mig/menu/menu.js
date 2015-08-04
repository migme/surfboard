/* global HTMLElement */
import { bubble, on } from 'bubbly'
import insertCss from 'insert-css'
import html from './menu.jade'
import css from './menu.styl'

/* eslint-disable no-unused-vars */
import MigLogin from '../login'
import MigProfile from '../profile'
/* eslint-enable no-unused-vars */

class Menu extends HTMLElement {
  createdCallback () {
    let root = this.createShadowRoot()
    root.innerHTML = html()
    insertCss(css, { parent: this.shadowRoot })
    root.query('.login')::on('click', () => {
      this::bubble('navigate', { tagName: 'mig-login' })
    })
    root.query('.profile')::on('click', () => {
      this::bubble('navigate', { tagName: 'mig-profile' })
    })
  }
}

export default document.registerElement('mig-menu', Menu)
