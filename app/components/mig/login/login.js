/*global HTMLElement */
import insertCss from 'insert-css'
import html from './login.jade'
import css from './login.styl'

class Login extends HTMLElement {
  createdCallback () {
    let root = this.createShadowRoot()
    root.innerHTML = html()
    insertCss(css, {parent: this.shadowRoot})

    for (let element of root.querySelectorAll('button')) {
      element.addEventListener('click', event => {
        const suffix = /.*_(.*)/
        const method = event.target.id.replace(suffix, '$1')
        this.beachball.Session.login(method)
      })
    }
  }
}

export default document.registerElement('mig-login', Login)
