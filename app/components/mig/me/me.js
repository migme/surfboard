/*global HTMLElement */
import insertCss from 'insert-css'
import Beachball from 'migme-beachball'
import MigButton from '../button'
import MigPanel from '../panel'
import css from './me.styl'
import html from './me.jade'

class Me extends HTMLElement {
  createdCallback () {
    this.beachball = new Beachball()
    let root = this.createShadowRoot()
    root.innerHTML = html()
    root.appendChild(new MigPanel())
    root.appendChild(new MigButton())
    insertCss(css, {parent: this.shadowRoot})
  }
}

export default document.registerElement('mig-me', Me)
