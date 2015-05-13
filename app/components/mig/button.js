import MigMenu from 'app/components/mig/menu'
import html from 'app/templates/mig/button.html!'

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
