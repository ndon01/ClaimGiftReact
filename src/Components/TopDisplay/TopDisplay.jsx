import React from 'react'
import styles from './TopDisplay.module.css'

function TopDisplay({Title, children}) {
  return (
    <div className={styles.bodyContainer}>
        <div className={styles.noteContainer}>
            <div className={styles.titleContainer}>
                <h1>{Title}</h1>
            </div>
            <div className={styles.cardBodyContainer}>
                {
                    children
                }
            </div>
        </div>
    </div>
  )
}

export default TopDisplay