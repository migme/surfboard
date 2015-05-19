import html from '../../templates/mig/panel.jade'
import css from '../../styles/mig/panel.css'

class Panel extends HTMLElement {
  createdCallback () {
    let root = this.createShadowRoot()
    root.innerHTML = html()
  }
  attachedCallback () {
    this._css = css.insert(this.shadowRoot)
  }
  detachedCallback () {
    this._css.remove()
  }
}

export default document.registerElement('mig-panel', Panel)
