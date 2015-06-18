/* global describe before it */

import app from '../..' // eslint-disable-line no-unused-vars
import {expect} from 'chai'

describe('panel', () => {
  let widget
  before(() => {
    widget = document.querySelector('mig-me')
  })
  it('is hidden by default', () => {
    let panel = widget.shadowRoot.querySelector('mig-panel')
    const rect = panel.getBoundingClientRect()
    expect(rect.width).to.equal(0)
    expect(rect.height).to.equal(0)
  })
})
