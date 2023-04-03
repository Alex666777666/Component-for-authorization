import React from 'react'
import Login from './Login.jsx'
import Logout from './Logout.jsx'
import Spinner from './Spinner.jsx'

class Auth extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false,
      isLoading: false,
    }
  }

  onLogin = () => {
    this.setState({
      isLoggedIn: true,
      isLoading: true,
    })
    setTimeout(() => {
      this.setState({
        isLoading: false,
      })
    }, 2000)
  }

  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    })
  }

  render() {
    const { isLoggedIn, isLoading } = this.state
    return (
      <div className='panel'>
        {isLoading ? (
          <Spinner />
        ) : isLoggedIn ? (
          <Logout onLogout={this.onLogout} />
        ) : (
          <Login onLogin={this.onLogin} />
        )}
      </div>
    )
  }
}

export default Auth
