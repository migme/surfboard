import Migme from 'migme'
// import MigButton from './button'
import html from '../../templates/mig/me.jade'

class Me extends HTMLElement {
  createdCallback () {
    let root = this.createShadowRoot()
    root.innerHTML = html

    this.migme = new Migme()

    this.style.display = 'inline-block'
    this.style.position = 'fixed'
    this.style.bottom = '20px'
    this.style.right = '20px'

    this.appendChild(new MigButton())
  }
}

export default document.registerElement('mig-me', Me)
