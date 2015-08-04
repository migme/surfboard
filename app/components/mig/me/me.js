/* global HTMLElement */
import { on } from 'bubbly'
import insertCss from 'insert-css'
import Beachball from 'migme-beachball/src'
import MigButton from '../button'
import MigPanel from '../panel'
import css from './me.styl'

class Me extends HTMLElement {
  createdCallback () {
    this.beachball = new Beachball()
    let root = this.createShadowRoot()
    root.appendChild(new MigButton())
    insertCss(css, { parent: this.shadowRoot })
    this::on('toggle', event => {
      var panel = root.querySelector('mig-panel')
      if (panel) {
        panel.remove()
      } else {
        panel = new MigPanel()
        root.appendChild(panel)
      }
    })
  }
}

export default document.registerElement('mig-me', Me)
