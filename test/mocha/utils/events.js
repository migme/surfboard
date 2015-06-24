/* global describe it expect sinon */
import {dispatch, bubble} from '../../../app/utils/events'

describe('events wrapper', () => {
  const target = { dispatchEvent: new Function() }
  sinon.stub(target, 'dispatchEvent')
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
})
