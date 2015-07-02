/* global HTMLElement */
import { on } from 'bubbly'
import { closest } from 'parasol'
import insertCss from 'insert-css'
import html from './login.jade'
import css from './login.styl'

class Login extends HTMLElement {
  createdCallback () {
    this.createShadowRoot()
    this.shadowRoot.innerHTML = html()
    insertCss(css, { parent: this.shadowRoot })
    this.shadowRoot.querySelector('button')
      ::on('click', event => {
        this::closest('mig-me').beachball
          .Session.login('iframe', {
            parent: this.shadowRoot
          })
          // .then(::this.remove)
      })
  }
}

export default document.registerElement('mig-login', Login)
