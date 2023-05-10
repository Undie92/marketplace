import NoResult from '../assets/no-results.png'
import styles from '../styles/NotFound.module.css'

import React from 'react'
import Asset from './Asset'

const NotFound = () => {
  return (
    <div className={styles.errorFound}>
        <Asset src={NoResult} message="Sorry, this page doesn't exist. Please go back and try again!" />
    </div>
  )
}

export default NotFound