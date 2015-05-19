import MigMenu from './menu'
import html from '../../templates/mig/button.jade'
import css from '../../styles/mig/button.css'

class Button extends HTMLElement {
  createdCallback () {
    let root = this.createShadowRoot()
    root.innerHTML = html()

    root.querySelector('button')
      .addEventListener('click', event => {
        document.body.appendChild(new MigMenu())
      })
  }
  attachedCallback () {
    this._css = css.insert(this.shadowRoot)
  }
  detachedCallback () {
    this._css.remove()
  }
}

export default document.registerElement('mig-button', Button)
