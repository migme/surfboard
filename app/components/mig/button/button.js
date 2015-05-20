/*global HTMLElement */
import MigMenu from '../menu'
import html from './button.jade'
import css from './button.css'

class Button extends HTMLElement {
  createdCallback () {
    let root = this.createShadowRoot()
    root.innerHTML = html()
    css.insert(root)

    root.querySelector('button')
      .addEventListener('click', event => {
        document.body.appendChild(new MigMenu())
      })
  }
}

export default document.registerElement('mig-button', Button)
