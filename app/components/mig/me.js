import Migme from 'migme'
import MigButton from 'app/components/mig/button'
import html from 'app/templates/mig/me.html!'

class Me extends HTMLElement {
  createdCallback () {
    let root = this.createShadowRoot()
    root.innerHTML = html

    this.migme = new Migme()

    this.appendChild(new MigButton())
  }
}

export default document.registerElement('mig-me', Me)
