import React, { useState, useEffect } from "react";
import axios from 'axios';
import styles from"./App.module.css";
import ButtonConvert from "./components/buttonConvert";
import Inputs from "./components/inputs";

function App() {
  const [amount,setAmount] = useState(0);
  const [valuteFrom,setValuteFrom] = useState();
  // const [data,setData] = useState();
  

  
  useEffect(() => {
    axios.get('https://api.apilayer.com/fixer/latest?base=USD&apikey=6CdnVMjyRF9j2KaQWoqutOjcLPH3iZU2')
      .then(response => {
        setValuteFrom(response.data);
      })
  }, []);
  console.log(valuteFrom)


  function handleClickConvert(event) {
    setAmount(event.target.value);
  }
  function formValute(event) {
    setValuteFrom(event.target.value);
  }

  

  console.log(valuteFrom)

  return (
    <div className={styles.App}>
      <Inputs amount={amount} handleClickConvert={handleClickConvert}
      valuteFrom={valuteFrom} formValute={formValute}/>
      <ButtonConvert />
      <div className={styles.resultConvert}>
        {amount}
      </div>
    </div>
  );
}

export default App;
