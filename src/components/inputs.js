import React from 'react'
import BasicTextFields from './amount'
import AutoComplateFrom from './autoComplateFrom'
import AutoComplateTo from './autoComplateTo'

import styles from './inputs.module.css'

function Inputs(props) {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <BasicTextFields amount={props.amount} handleClickConvert={props.handleClickConvert}/>
            <AutoComplateFrom valuteFrom={props.valuteFrom} setValuteFrom={props.formValute}/>
            <AutoComplateTo/>
        </div>
</div>
    
  
  )
}

export default Inputs