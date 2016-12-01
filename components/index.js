/** @jsx preact.h */

import preact, { Component } from 'preact'

export default class MyComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        Hello, world!
      </div>
    )
  }
}

MyComponent.displayName = 'MyComponent'
