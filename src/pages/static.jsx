import Layout from '../components/Layout';

/* Com essa function, os códigos serão 
gerados uma única vez. sem ela serão gerados no: client side e no server side */
export async function getStaticProps(){
  
  return {
    props: {
      number: Math.random()
    }
  }

}

export default function Static(props){

  return (

    <Layout title='Static content'>
      <div>
        {props.number}
      </div>
    </Layout>

  );

}