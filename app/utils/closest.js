import parentHost from './parentHost'

export default function closest (selector) {
  const match = this.closest(selector)
  if (match) {
    return match
  }
  const host = this::parentHost()
  if (host) {
    return host::closest(selector)
  }
}
