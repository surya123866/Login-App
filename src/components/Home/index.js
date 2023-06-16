import {Component} from 'react'

import Message from '../Message'
import LogIn from '../Login'
import LogOut from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  onClickButton = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="app-container">
        <div className="home-container">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <LogOut logOut={this.onClickButton} />
          ) : (
            <LogIn logIn={this.onClickButton} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
