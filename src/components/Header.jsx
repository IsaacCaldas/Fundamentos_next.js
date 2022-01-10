import React from "react";

export default function Header(props){

  return (

    <header>
      <h1>Fundamentos de Next.js & React</h1>
      <p>Seja bem vindo <b>{props.name}.</b></p>
    </header>

  );

}