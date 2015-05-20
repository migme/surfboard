/*global HTMLElement */
import html from './login.jade'
import css from './login.css'

class Login extends HTMLElement {
  createdCallback () {
    let root = this.createShadowRoot()
    root.innerHTML = html()
    css.insert(root)

    for (let element of root.querySelectorAll('button')) {
      element.addEventListener('click', event => {
        const suffix = /.*_(.*)/
        const method = event.target.id.replace(suffix, '$1')
        this.migme.Session.login(method)
      })
    }
  }
}

export default document.registerElement('mig-login', Login)
