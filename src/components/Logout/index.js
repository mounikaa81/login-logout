// Write your code here
import './index.css'

const Logout = props => {
  const {changeStatus} = props

  return (
    <button className="button" type="button" onClick={changeStatus}>
      Login
    </button>
  )
}

export default Logout
