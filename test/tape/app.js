var test = require('tape')

import app from '../..' // eslint-disable-line no-unused-vars

test('loading', t => {
  const elements = document.getElementsByTagName('mig-me')
  t.ok(elements.length === 1, 'should auto-inject')
  t.end()
})

test('visibility', t => {
  const widget = document.querySelector('mig-me')
  t.ok(widget, 'exists')
  t.test('should not affect page flow', t => {
    const rect = widget.getBoundingClientRect()
    t.ok(rect.width === 0)
    t.ok(rect.height === 0)
    t.end()
  })
  t.test('button', t => {
    const button = widget.shadowRoot.querySelector('mig-button')
    t.ok(button, 'exists')
    t.test('shows up on screen', t => {
      const size = 50
      const fromRight = 20 + size / 2
      const fromBottom = 20 + size / 2
      const target = document.elementFromPoint(
        document.documentElement.clientWidth - fromRight,
        document.documentElement.clientHeight - fromBottom
      )
      t.equal(target, widget)
      t.end()
    })
    t.end()
  })
  t.test('panel', t => {
    const panel = widget.shadowRoot.querySelector('mig-panel')
    t.ok(panel, 'exists')
    t.test('is hidden by default', t => {
      const rect = panel.getBoundingClientRect()
      t.equal(rect.width, 0)
      t.equal(rect.height, 0)
      t.end()
    })
    t.end()
  })
  t.end()
})
