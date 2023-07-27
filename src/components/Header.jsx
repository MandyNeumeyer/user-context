import { useContext } from 'react';
import UserContext from '../UserContext';
import ThemeSwitch from './ThemeSwitch';
import Login from './Login'
import './Header.scss'

const Header = () => {

    const { theme } = useContext(UserContext)
   
  return (
    <div className={`Header ${theme !== 'dark' && 'lightMode'}`}>
        <h3>HEADER</h3>
        <div className='headerRight'>
        <ThemeSwitch/>
        <Login/>
        </div>
    </div>
  )
}

export default Header