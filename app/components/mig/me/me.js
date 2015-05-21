/*global HTMLElement */
import Beachball from 'migme-beachball'
import MigButton from '../button'
import MigPanel from '../panel'
import css from './me.css'
import html from './me.jade'

class Me extends HTMLElement {
  createdCallback () {
    this.beachball = new Beachball()
    let root = this.createShadowRoot()
    root.innerHTML = html()
    root.appendChild(new MigPanel())
    root.appendChild(new MigButton())
  }
  attachedCallback () {
    this._css = css.insert(this.shadowRoot)
  }
  detachedCallback () {
    this._css.remove()
  }
}

export default document.registerElement('mig-me', Me)
