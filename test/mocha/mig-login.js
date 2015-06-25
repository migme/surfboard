/* global describe before it expect */
import closest from '../../app/utils/closest'
import {dispatch} from '../../app/utils/events'
import app from '../..' // eslint-disable-line no-unused-vars

describe('mig-login', () => {
  let widget
  let login
  before(() => {
    widget = document.querySelector('mig-me')
    widget::dispatch('toggle')
    document.querySelector('mig-menu /deep/ button').click()
    login = document.querySelector('mig-me /deep/ mig-login')
  })
  it('shows the login menu', () => {
    expect(login).to.exist
  })
  it('shows the login form', () => {
    login.shadowRoot.querySelector('#login_iframe')
      .dispatchEvent(new Event('click'))
    expect(login.shadowRoot.querySelector('iframe')).to.exist
  })
  after(() => {
    widget::dispatch('toggle')
    expect(login::closest('html')).to.not.exist
  })
})
