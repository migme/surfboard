/* global describe before it */

import app from '../..' // eslint-disable-line no-unused-vars
import {expect} from 'chai'

describe('mig-me', () => {
  it('should auto-inject', () => {
    const elements = document.getElementsByTagName('mig-me')
    expect(elements).to.exist
    expect(elements).to.have.length(1)
  })
  describe('visibility', () => {
    it('should not affect page flow', () => {
      let widget = document.querySelector('mig-me')
      const rect = widget.getBoundingClientRect()
      expect(rect.width).to.equal(0)
      expect(rect.height).to.equal(0)
    })
    it('opens and closes the panel', () => {
      let panel
      let widget = document.querySelector('mig-me')

      widget.dispatchEvent(new CustomEvent('toggle'))
      panel = widget.shadowRoot.querySelector('mig-panel')
      expect(panel).to.exist

      widget.dispatchEvent(new CustomEvent('toggle'))
      panel = widget.shadowRoot.querySelector('mig-panel')
      expect(panel).not.to.exist
    })
  })
})
