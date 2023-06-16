import './index.css'

const LogIn = props => {
  const {logIn} = props

  return (
    <button className="LogIn" onClick={logIn} type="button">
      LogIn
    </button>
  )
}

export default LogIn
