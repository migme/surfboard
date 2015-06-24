/* global describe it expect */
import closest from '../../../app/utils/closest'

describe('closest', () => {
  it('matches parent', () => {
    const parent = document.createElement('div')
    parent.className = 'parent'
    const child = document.createElement('div')
    parent.appendChild(child)
    expect(child::closest('.parent')).to.equal(parent)
  })
  it('breaks out of the shadow root', () => {
    const grandparent = document.createElement('div')
    grandparent.className = 'grandparent'
    const parent = document.createElement('div')
    const child = document.createElement('div')
    parent.appendChild(child)
    grandparent.createShadowRoot()
    grandparent.shadowRoot.appendChild(parent)
    expect(child::closest('.grandparent')).to.equal(grandparent)
  })
  it('returns nothing when the selector does not match any ancestors', () => {
    const child = document.createElement('div')
    const parent = document.createElement('div')
    parent.appendChild(child)
    expect(child::closest('.trololo')).to.be.undefined
  })
  it('returns nothing in an orphaned element', () => {
    const child = document.createElement('div')
    expect(child::closest('.trololo')).to.be.undefined
  })
})
