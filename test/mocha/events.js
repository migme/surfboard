/* global describe it expect sinon */
import {dispatch, bubble} from '../../app/utils/events'

describe('events wrapper', () => {
  it('dispatches', () => {
    const target = { dispatchEvent: function () {} }
    sinon.stub(target, 'dispatchEvent')
    const type = 'foo'
    const payload = { bar: 123 }
    target::dispatch(type, payload)
    var expected = { type, detail: payload }
    expect(target.dispatchEvent).to.have.been.calledWithMatch(expected)
  })
  it('bubbles', () => {
    const target = { dispatchEvent: function () {} }
    sinon.stub(target, 'dispatchEvent')
    const type = 'foo'
    const payload = { bar: 123 }
    target::bubble(type, payload)
    var expected = { bubbles: true }
    expect(target.dispatchEvent).to.have.been.calledWithMatch(expected)
  })
})
