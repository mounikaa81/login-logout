// Write your code here
import './index.css'

const Login = props => {
  const {changeStatus} = props

  return (
    <button className="button" type="button" onClick={changeStatus}>
      Logout
    </button>
  )
}

export default Login
