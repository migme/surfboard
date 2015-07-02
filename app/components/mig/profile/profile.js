/* global HTMLElement */
import { closest } from 'parasol'
import insertCss from 'insert-css'
import html from './profile.jade'
import css from './profile.styl'

class Profile extends HTMLElement {
  createdCallback () {
    this.createShadowRoot()
    this.shadowRoot.innerHTML = html()
    insertCss(css, { parent: this.shadowRoot })
  }
  attachedCallback () {
    this::closest('mig-me').beachball.API.url('me')
      .then(profile => {
        // console.log({profile})
      })
  }
}

export default document.registerElement('mig-profile', Profile)
