export default function Jsx(){

  const title = <p>JSX é um conceito <b>central</b>.</p> 
  // snippet JSX in const

  const human = {
    name: 'Isaac',
    age: 18,
    favouriteColors: {
      black: 'black',
      yellow: 'yellow'
    }
  }

  function subtitle(){
    return <h3>{'jsx é muito legal'.toUpperCase()}</h3>
  }

  function content(){
    return (
      <div>
        <p>Eu sou <b>{human.name}</b> e tenho <b>{human.age}</b> anos.</p>
        <p>Minhas cores favoritas são:</p>
        <p>- <b>{human.favouriteColors.yellow}</b></p>
        <p>- <b>{human.favouriteColors.black}</b></p>
        <div>
          <p>Apenas um JSON</p>
          <span>
            {JSON.stringify({
              name: 'Isaac',
              age: 18,
              favouriteColors: {
                black: 'black',
                yellow: 'yellow'
              }
            })}
          </span>
        </div>
      </div>
    );
  }

  return (

    <div>
      <p>{title}</p>
      {subtitle()}
      {content()}
    </div>

  );

}