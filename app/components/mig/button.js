import MigMenu from './menu'
import html from '../../templates/mig/button.jade'

class Button extends HTMLElement {
  createdCallback () {
    let root = this.createShadowRoot()
    root.innerHTML = html

    root.querySelector('button')
      .addEventListener('click', event => {
        document.body.appendChild(new MigMenu())
      })
  }
}

export default document.registerElement('mig-button', Button)
