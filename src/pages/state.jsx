import Layout from '../components/Layout';
import style from '../styles/State.module.css'
import React, { useState } from 'react';

export default function State(){

  const [number, setNumber] = useState(0);

  function clickToChange(){
    setNumber(number = 100000);
  }

  return (

    <Layout title="Component with State">
      <h2>{number}</h2>
      <button className={style.btn} onClick={() => setNumber(number - 1)}>-1</button>
      <button className={style.btn} onClick={() => setNumber(number + 1)}>+1</button>
      <button className={style.btn} onClick={clickToChange}>Clique aqui!</button>
    </Layout>

  );

}