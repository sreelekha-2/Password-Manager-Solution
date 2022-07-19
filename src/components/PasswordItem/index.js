import './index.css'

const PasswordItem = props => {
  const {itemDetails, isShow, deleteItem} = props

  const {website, username, password, id} = itemDetails

  const onDelete = () => {
    deleteItem(id)
  }

  const passwordOut = () => {
    if (isShow) {
      return <p>{password}</p>
    }
    return (
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
        alt="stars"
      />
    )
  }

  return (
    <li>
      <p>{website}</p>
      <p>{username}</p>
      {passwordOut()}
      <button onClick={onDelete} testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
