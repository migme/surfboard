/* global describe before it expect */
import app from '../..' // eslint-disable-line no-unused-vars

describe('mig-button', () => {
  let widget
  let button
  before(() => {
    widget = document.querySelector('mig-me')
    button = widget.shadowRoot.querySelector('mig-button')
  })
  it('is in the DOM', () => {
    expect(button).to.exist
  })
  it('shows up on screen', () => {
    const size = 50
    const fromRight = 20 + size / 2
    const fromBottom = 20 + size / 2
    const target = document.elementFromPoint(
      document.documentElement.clientWidth - fromRight,
      document.documentElement.clientHeight - fromBottom
    )
    expect(target).to.equal(widget)
  })
})
