/* global describe before it expect */
import {dispatch} from 'bubbly'
import app from '../..' // eslint-disable-line no-unused-vars

describe('panel', () => {
  let widget
  before(() => {
    widget = document.querySelector('mig-me')
  })
  it('is hidden by default', () => {
    const panel = widget.shadowRoot.querySelector('mig-panel')
    expect(panel).to.not.exist
  })
  it('is visible when opened', () => {
    widget::dispatch('toggle')
    const panel = widget.shadowRoot.querySelector('mig-panel')
    expect(panel).to.exist
    const rect = panel.getBoundingClientRect()
    expect(rect.width).to.be.above(0)
    expect(rect.height).to.be.above(0)
    expect(panel.querySelector('mig-menu')).to.exist
  })
  it('goes away when pressing the Close button', () => {
    let panel = widget.shadowRoot.querySelector('mig-panel')
    panel.shadowRoot.querySelector('button').click()
    panel = widget.shadowRoot.querySelector('mig-panel')
    expect(panel).to.not.exist
  })
})
