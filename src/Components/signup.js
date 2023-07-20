import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class signup extends Component {
  render() {
    return (
      <div>signup
        <button><Link to='/'>Signin</Link></button>
      </div>
    )
  }
}
