import React from 'react';
import styles from './CurrentlyInput.module.css';

function CurrencyInput(props) {
  return (
    <div className={styles.group}>
      <input className={styles.amount} type="text" value={props.amount} onChange={event => props.onAmountChange(event.target.value)} />
      <select className={styles.currencies} value={props.currency} onChange={event => props.onCurrencyChange(event.target.value)}>
        {props.currencies.map((currency => (
          <option value={currency}>{currency}</option>
        )))}
      </select>
    </div>
  );
}

export default CurrencyInput;