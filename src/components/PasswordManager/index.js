import {Component} from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

import PasswordItem from '../PasswordItem'

class PasswordManager extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    passwordsList: [],
    isShow: false,
    searchInput: '',
  }

  onWebsite = event => {
    this.setState({website: event.target.value})
  }

  onUsername = event => {
    this.setState({username: event.target.value})
  }

  onPassword = event => {
    this.setState({password: event.target.value})
  }

  onAddButton = event => {
    event.preventDefault()
    const {website, username, password} = this.state

    const newItem = {
      id: uuidv4(),
      website,
      username,
      password,
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newItem],
      count: prevState.count + 1,
      website: '',
      username: '',
      password: '',
    }))
  }

  onCheckbox = () => {
    this.setState(prevState => ({isShow: !prevState.isShow}))
  }

  onSearch = event => {
    const {passwordsList} = this.state
    this.setState({
      searchInput: event.target.value,
    })
  }

  deleteItem = id => {
    const {passwordsList} = this.state
    const filteredResults = passwordsList.filter(eachItem => eachItem.id !== id)
    this.setState({passwordsList: filteredResults})
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  render() {
    const {passwordsList, isShow, searchInput} = this.state

    const searchResults = passwordsList.filter(eachItem =>
      eachItem.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo"
        />
        <div className="top-container">
          <form className="details-container">
            <h1>Add New Password</h1>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
              />
              <input placeholder="Enter Website" onChange={this.onWebsite} />
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
              />
              <input placeholder="Enter Username" onChange={this.onUsername} />
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
              />
              <input
                placeholder="Enter Password"
                type="password"
                onChange={this.onPassword}
              />
            </div>
            <div>
              <button onClick={this.onAddButton}>Add</button>
            </div>
          </form>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="image"
            />
          </div>
        </div>
        <div className="bottom-container">
          <h1>Your Passwords</h1>
          <p>{searchResults.length}</p>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
            />
            <input type="search" onChange={this.onSearch} />
          </div>

          <div className="no-passwords-container">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-passwords"
              />
              <p>No Passwords</p>
            </div>

            <div>
              <label htmlFor="checkbox">Show passwords</label>
              <input id="checkbox" type="checkbox" onChange={this.onCheckbox} />
            </div>
          </div>

          <ul>
            {searchResults.map(eachItem => (
              <PasswordItem
                itemDetails={eachItem}
                isShow={isShow}
                deleteItem={this.deleteItem}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default PasswordManager
