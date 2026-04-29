import { motion } from 'motion/react'
import './button.css'

const Button = ({onClick, text}) => {
  return (
    <motion.button whileTap={{ scale : 0.9 }}
      className='btn'
      onClick={onClick}>
        {text}
    </motion.button>
  )
}

export default Button