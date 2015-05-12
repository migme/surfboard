import html from 'app/templates/mig/menu.html!'

class Menu extends HTMLElement {
  createdCallback () {
    let root = this.createShadowRoot()
    root.innerHTML = html
  }
}

export default document.registerElement('mig-menu', Menu)
