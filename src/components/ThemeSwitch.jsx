import { useContext } from 'react'
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs'
import UserContext from '../UserContext'

const ThemeSwitch = () => {
const { theme, setTheme } = useContext(UserContext)
    const handleThemeChange = ( ) =>{

        setTheme(theme === 'dark'? 'light': 'dark')
    }
  return (
    <div className='headerRight'>
        <div className='themeSwitcher'>
        <button className='themeBtn' onClick={()=>{handleThemeChange()}}>
            {theme === 'dark'?  <BsSunFill className='icon'/>: <BsMoonStarsFill className='icon'/>} 
           
            
        </button>
        <p className='switchThemeText'>SWITCH TO <span className={`themeSpan ${theme === 'dark'? 'lightSpan': 'darkSpan'}`}>{theme === 'dark'? 'LIGHT': 'DARK'} </span>MODE</p>
        </div>
    </div>
  )
}

export default ThemeSwitch