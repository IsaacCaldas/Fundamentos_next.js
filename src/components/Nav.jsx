import styles from '../styles/Nav.module.css';
import Link from 'next/link'


export default function Nav(props){

  return (

    <div>
      <Link href={props.url}>
        <div className={styles.nav} style={{
          backgroundColor: props.color || '#531599'
        }}>
          {props.title}
        </div>
      </Link>
    </div>

  );

}