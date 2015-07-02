/* global HTMLElement */
import { dispatch, on } from 'bubbly'
import { closest } from 'parasol'
import insertCss from 'insert-css'
import html from './panel.jade'
import css from './panel.styl'

/* eslint-disable no-unused-vars */
import MigMenu from '../menu'
/* eslint-enable no-unused-vars */

class Panel extends HTMLElement {
  createdCallback () {
    const root = this.createShadowRoot()
    root.innerHTML = html({
      title: 'Welcome'
    })
    insertCss(css, { parent: root })
    this.shadowRoot.querySelector('button')
      ::on('click', event => this::dispatch('toggle'))
    this::on('navigate', ({ detail: { tagName } }) => {
      while (this.lastChild) {
        this.lastChild.remove()
      }
      const view = document.createElement(tagName)
      this.appendChild(view)
    })
    this::dispatch('navigate', { tagName: 'mig-menu' })
  }
  attachedCallback () {
    const beachball = this::closest('mig-me').beachball
    beachball.Session.getStatus().then(session => {
      this.setTitle(session.access_token)
    })
    beachball.Session::on('change', ({ detail: session }) => {
      this.setTitle(session.access_token)
    })
  }
  setTitle (title) {
    this.shadowRoot.querySelector('.title').innerText = title
  }
}

export default document.registerElement('mig-panel', Panel)
