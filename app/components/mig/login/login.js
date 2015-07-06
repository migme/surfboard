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
    const iframe = this.shadowRoot.query('iframe')
    const spinner = this.shadowRoot.query('svg g')
    iframe.setAttribute('hidden', 'hidden')
    iframe::once('load').then(() => {
      spinner::once('animationiteration').then(() => {
        spinner.style.animationIterationCount = 1
        spinner.style.animationName = 'fadeOut'
        spinner::once('animationend').then(() => {
          spinner.closest('header').remove()
          iframe.removeAttribute('hidden')
        })
      })
    })
  }
}

export default document.registerElement('mig-login', Login)
