import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styles from './inputs.module.css'

export default function BasicTextFields(props) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' ,margin:'0px'},
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Amount" variant="outlined" className={styles.textFieldStyle} value={props.amount} onChange={props.handleClickConvert}/>
    </Box>
  );
}