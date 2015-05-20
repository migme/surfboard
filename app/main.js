// import webcomponents from 'webcomponents.js'
import domready from 'domready'
import MigMe from './components/mig/me'
domready(() => {
  let me = new MigMe()
  document.body.appendChild(me)
})
