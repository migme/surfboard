import html from 'app/templates/mig/button.html!'

class Button extends HTMLElement {
  createdCallback () {
    let root = this.createShadowRoot()
    root.innerHTML = html

    root.querySelector('button')
      .addEventListener('click', event => {
        console.log('login!')
      })
  }
}

export default document.registerElement('mig-button', Button)
