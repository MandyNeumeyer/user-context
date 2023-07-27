import { useContext } from 'react';
import UserContext from '../UserContext';
import './Footer.scss'

const Footer = () => {
    const { theme} = useContext(UserContext)
  return (
    <div className={`Footer ${theme !== 'dark' && 'lightMode'}`}>
        <h3>FOOTER</h3>
    </div>
  )
}

export default Footer