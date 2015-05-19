import html from '../../templates/mig/login.jade'

class Login extends HTMLElement {
  createdCallback () {
    let root = this.createShadowRoot()
    root.innerHTML = html()

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
