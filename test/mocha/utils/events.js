/* global describe it expect sinon */
import EventTarget from 'event-target-shim'
import {dispatch, bubble, once} from '../../../app/utils/events'

describe('events wrapper', () => {
  const target = new EventTarget()
  sinon.spy(target, 'dispatchEvent')
  const type = 'foo'
  const payload = { bar: 123 }
  it('dispatches', () => {
    target::dispatch(type, payload)
    expect(target.dispatchEvent)
      .to.have.been.calledWithMatch({ type, detail: payload })
  })
  it('bubbles', () => {
    target::bubble(type, payload)
    expect(target.dispatchEvent)
      .to.have.been.calledWithMatch({ bubbles: true })
  })
  it('listens very carefully', done => {
    target::once(type, event => {
      expect(event.type).to.equal(type)
      done()
    })
    target::dispatch(type)
  })
})
