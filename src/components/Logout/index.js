import './index.css'

const LogOut = props => {
  const {logOut} = props

  return (
    <button className="LogIn" onClick={logOut} type="button">
      LogOut
    </button>
  )
}

export default LogOut
