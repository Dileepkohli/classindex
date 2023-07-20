import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class signin extends Component {
  render() {
    return (
      <div>signin
        <button><Link to='/signup'>signup</Link></button>
      </div>
    )
  }
}
