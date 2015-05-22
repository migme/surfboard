/*eslint-disable no-unused-vars */
import webcomponents from 'webcomponents.js'
import dom4 from 'dom4'
/*eslint-enable no-unused-vars */
import domready from 'domready'
import MigMe from './components/mig/me'
domready(() => {
  let me = new MigMe()
  document.body.appendChild(me)
})
