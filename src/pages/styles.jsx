import styles from '../styles/Styles.module.css'

export default function Styles(){
    {/* Para fazer a referência a um CSS modularizado, no className será referenciado pelas {'nome dado ao import'.'classe no css'} */}

  return (

    <div className={styles.purple}>
      <h1>Estilo usando CSS Módulos.</h1>
    </div>

  );

}