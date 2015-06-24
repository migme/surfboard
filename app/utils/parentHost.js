const NODE_DOCUMENT_FRAGMENT = 11

export default function parentHost () {
  let parent = this.parentNode
  if (!parent) return
  while (parent.parentNode) {
    parent = parent.parentNode
  }
  if (parent.nodeType === NODE_DOCUMENT_FRAGMENT && parent.host) {
    return parent.host
  }
}
