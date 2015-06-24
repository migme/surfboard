/* global describe it expect */
import parentHost from '../../../app/utils/parentHost'

describe('parentHost', () => {
  it('finds the nearest shadow host', () => {
    const grandparent = document.createElement('h3')
    const parent = document.createElement('h2')
    const child = document.createElement('h1')
    parent.appendChild(child)
    grandparent.createShadowRoot()
    grandparent.shadowRoot.appendChild(parent)
    expect(child::parentHost()).to.equal(grandparent)
  })
  it('finds nothing for detached elements', () => {
    const child = document.createElement('h1')
    expect(child::parentHost()).to.be.undefined
  })
  it('finds nothing for light DOM elements', () => {
    const parent = document.createElement('h2')
    const child = document.createElement('h1')
    parent.appendChild(child)
    expect(child::parentHost()).to.be.undefined
  })
})
