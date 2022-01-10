import Layout from '../../../components/Layout';
import { useRouter } from 'next/router';

//O '[]' no nome do arquivo representa um valor dinâmico

export default function CodeClient(){

  const router = useRouter();

  return (

    <Layout title="Dinamic Navigation">
      <p>Subsidiary code = <b>{router.query.subsidiary}</b></p>
      <p>Client code = <b>{router.query.code}</b></p>
    </Layout>
    
  );

}