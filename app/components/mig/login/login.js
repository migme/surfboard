/* global HTMLElement */
import { bubble, on, once } from 'bubbly'
import { closest } from 'parasol'
import insertCss from 'insert-css'
import html from './login.jade'
import css from './login.styl'

class Login extends HTMLElement {
  createdCallback () {
    this.createShadowRoot()
    this.shadowRoot.innerHTML = html()
    insertCss(css, { parent: this.shadowRoot })
    this.shadowRoot.query('button')::on('click', () => {
      this::bubble('navigate', { tagName: 'mig-menu' })
    })
  }
  attachedCallback () {
    this::closest('mig-me').beachball
      .Session.login('iframe', {
        parent: this.shadowRoot.query('article')
      })
      .then(() => this::bubble('navigate', { tagName: 'mig-menu' }))
    this.shadowRoot.query('iframe').setAttribute('hidden', 'hidden')
    this.shadowRoot.query('iframe')::once('load', () => {
      this.shadowRoot.query('header').remove()
      this.shadowRoot.query('iframe').removeAttribute('hidden')
    })
  }
}

export default document.registerElement('mig-login', Login)
