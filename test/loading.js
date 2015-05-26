/* global describe before it */

import app from '..' // eslint-disable-line no-unused-vars
import {expect} from 'chai'

describe('loading', () => {
  it('should auto-inject', () => {
    const elements = document.getElementsByTagName('mig-me')
    expect(elements).to.exist
    expect(elements).to.have.length(1)
  })
})

describe('visibility', () => {
  let widget
  before(() => {
    widget = document.querySelector('mig-me')
  })
  it('should not affect page flow', () => {
    const rect = widget.getBoundingClientRect()
    expect(rect.width).to.equal(0)
    expect(rect.height).to.equal(0)
  })

  describe('button', () => {
    let button
    before(() => {
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

  describe('panel', () => {
    let panel
    before(() => {
      panel = widget.shadowRoot.querySelector('mig-panel')
    })
    it('is in the DOM', () => {
      expect(panel).to.exist
    })
    it('is hidden by default', () => {
      const rect = panel.getBoundingClientRect()
      expect(rect.width).to.equal(0)
      expect(rect.height).to.equal(0)
    })
  })
})
