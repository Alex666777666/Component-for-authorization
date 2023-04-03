import React from 'react'

import Login from './Login.jsx'
import Logout from './Logout.jsx'

class Auth extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false,
    }
  }

  onLogin = () => {
    this.setState({
      isLoggedIn: true,
    })
  }

  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    })
  }

  render() {
    return (
      <div className='panel'>
        <div>
          {this.state.isLoggedIn ? (
            <Logout onLogout={this.onLogout} />
          ) : (
            <Login onLogin={this.onLogin} />
          )}
        </div>
      </div>
    )
  }
}

export default Auth
