import style from '../styles/Integration.module.css'

import React, { useState } from 'react';
import Layout from '../components/Layout'

export default function Integration(){

  const [client, setClient] = useState({});
  const [code, setCode] = useState(1);

  // Essas são as duas formas de obter os dados

  // com o Fetch API do browser
 /* function getClient(){

    fetch(`http://localhost:3000/api/clients/${code}`)
    .then(resp => resp.json())
      .then(json => setClient(json));
  } */

  // de forma assíncrona
  async function getClient(){
    const resp = await  fetch(`http://localhost:3000/api/clients/${code}`);
    const data = await resp.json();
    setClient(data);
  }
 
  return (
    
    <Layout title="Integration">
      <div className={style.Integration}>
        <h2>Client</h2>
        <ul>
          <li>Code: <span>{client.id}</span></li>
          <li>Name: <span>{client.nameUser}</span></li>
          <li>Email: <span>{client.email}</span></li>
          <li>Admin: <span>{client.admin == true ? 'true' : 'false' }</span></li>
        </ul>
        <div>
          <input type="number" value={code} onChange={e => setCode(e.target.value)}/>
          <button className="btn" onClick={getClient}>Get client</button>
        </div>
      </div>
    </Layout>

  );

}