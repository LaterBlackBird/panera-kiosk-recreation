import React from 'react'
import { motion } from 'framer-motion'

const index = () => {
  return (
    <motion.div
    // className={styles.container}
    initial={{ x: 10000 }}
    animate={{ x: 0 }}
    exit={{ x: 30000 }}
    transition={{ duration: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
    >
      Menu
  </motion.div>
  )
}

export default index