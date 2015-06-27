/*global HTMLElement */
import { on } from 'bubbly'
import closest from '../../../utils/closest'
import insertCss from 'insert-css'
import html from './panel.jade'
import css from './panel.styl'
import MigMenu from '../menu'

/*eslint-disable no-unused-vars */
import MigLogin from '../login'
/*eslint-enable no-unused-vars */

class Panel extends HTMLElement {
  createdCallback () {
    let root = this.createShadowRoot()
    root.innerHTML = html()
    insertCss(css, { parent: this.shadowRoot })

    this.appendChild(new MigMenu())

    root.querySelector('button')::on('click', event => {
      this.remove()
    })

    this::on('navigate', event => {
      while (this.lastChild) {
        this.lastChild.remove()
      }
      var tagName = event.detail.tagName
      var view = document.createElement(tagName)
      this.appendChild(view)
    })
  }
  attachedCallback () {
    this::closest('mig-me').beachball
      .Session::on('change', event => {
        console.log('session changed', event.detail)
      })
  }
}

export default document.registerElement('mig-panel', Panel)
