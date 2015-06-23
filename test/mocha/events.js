/* global describe it */

import events from '../../app/utils/events'
import {expect} from 'chai'

describe('events', () => {
  it('dispatch', () => {
    const target = sinon.stub({}, 'dispatchEvent')
    target::dispatch('foo', { bar: 123 })
    expect(target).to.have.been.called
  })
})
