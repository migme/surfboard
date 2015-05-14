import html from 'app/templates/mig/menu.html!'

class Menu extends HTMLElement {
  createdCallback () {
    let root = this.createShadowRoot()
    root.innerHTML = html
    this.style.display = 'inline-block'
    this.style.position = 'fixed'
    this.style.top = '0px'
    this.style.bottom = '20px'
    this.style.right = '0px'
    this.style.width = '300px'
  }
}

export default document.registerElement('mig-menu', Menu)
