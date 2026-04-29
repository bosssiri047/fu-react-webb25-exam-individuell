import { useNavigate } from 'react-router-dom'
import Icon from '../../components/Icon/Icon'
import './homePage.css'
import { motion } from "motion/react"


const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="homepage-wrapper">
        <motion.img animate={{ rotate: 360 }} transition={{duration: 0.7, repeat: Infinity, repeatDelay: 2}} 
          src="src\assets\logo.png" 
          alt="logo"
          onClick={() => navigate('/tickets')}
        />
        <h1 className="logo-title">Where It's @</h1>
        <h2 className="logo-subtitle">Ticketing made easy</h2>
    </div>
  )
}

export default HomePage