/*global CustomEvent */

export function dispatch (type, detail, opts = {}) {
  const init = Object.assign({
    detail: detail
  }, opts)
  const event = new CustomEvent(type, init)
  this.dispatchEvent(event)
}

export function bubble (type, detail) {
  return dispatch.call(this, type, detail, { bubbles: true })
}

export function once (type, cb) {
  const eventHandler = (event) => {
    this.removeEventListener(type, eventHandler)
    return cb(event)
  }
  this.addEventListener(type, eventHandler)
}
