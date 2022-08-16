import React from 'react';
import styles from "./buttonConvert.module.css"

function ButtonConvert() {
  return (
    <React.Fragment>
        <div className={styles.container}>
        <button className={styles.btnConvert}>Convert</button>
        </div>
    </React.Fragment>
  )
}

export default ButtonConvert