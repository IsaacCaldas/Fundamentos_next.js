import styles from '../styles/Styles.module.css';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Styles(){
    {/* Para fazer a referência a um CSS modularizado, no className será referenciado pelas {'nome dado ao import'.'classe no css'} */}

  return (

    <Layout title="CSS Module example">
      <div className={styles.purple}>
        <div className={styles.content}>
          <h1>Estilo usando CSS Módulos.</h1>
        </div>
      </div>
    </Layout>
    

  );

}