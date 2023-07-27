import { useContext } from "react";
import UserContext from "../UserContext";
import Avatar from "../assets/avatar.png"

const Login = () => {

    const {isLoggedIn, setIsLoggedIn} = useContext(UserContext)

  return (
    <div className="Login">
        {isLoggedIn && 
        <div className="avatarWrapper">
        <img className="avatar" src={Avatar} alt="avatar" /> 
        <span className="greenDot"></span>
        </div>
        }
        <button onClick={ () => setIsLoggedIn( !isLoggedIn )} >
            {isLoggedIn ? 'LOGOUT': 'LOGIN'}
        </button>
    </div>
  )
}

export default Login