/** @jsx preact.h */
import preact from 'preact'
import MyComponent from './components'

export default class MyCustomElement extends HTMLElement {
  attributeChangedCallback(name, oldValue, newValue) {
    if (this.rendered) { this.updateRendering() }
  }

  connectedCallback() {
    this.updateRendering()
  }

  updateRendering() {
    const a = preact.render(<MyComponent />, this, this.lastChild)
    this.rendered = true
  }
}
