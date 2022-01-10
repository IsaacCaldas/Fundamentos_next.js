import React from "react";
import Header from '../components/Header';
import Layout from '../components/Layout'

export default function app(){

  return (
    <div> 
      <Layout>
        <Header name="Isaac" />
      </Layout>
    </div>
  );

}