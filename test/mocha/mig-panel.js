/* global describe before it expect CustomEvent */
import app from '../..' // eslint-disable-line no-unused-vars

describe('panel', () => {
  let widget
  before(() => {
    widget = document.querySelector('mig-me')
  })
  it('is hidden by default', () => {
    let panel = widget.shadowRoot.querySelector('mig-panel')
    expect(panel).to.not.exist
  })
  it('is visible when opened', () => {
    widget.dispatchEvent(new CustomEvent('toggle'))
    let panel = widget.shadowRoot.querySelector('mig-panel')
    const rect = panel.getBoundingClientRect()
    expect(rect.width).to.be.above(0)
    expect(rect.height).to.be.above(0)
    widget.dispatchEvent(new CustomEvent('toggle'))
  })
})
