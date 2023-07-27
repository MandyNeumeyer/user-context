import ThemeContext from "../UserContext";
import { useContext } from "react";
import './Main.scss'


const Main = () => {
    const {theme, isLoggedIn} = useContext(ThemeContext)
  return (
    <div className={`Main ${theme !== 'dark' && 'lightMode'}`}>
       {!isLoggedIn ?(
        <h1>MAIN</h1>)
        :
        (<h1>Hi...👋</h1>)
       }
        
    </div>
  )
}

export default Main