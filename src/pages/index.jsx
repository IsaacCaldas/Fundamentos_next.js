import Nav from '../components/Nav';

export default function Home(){

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      height: '100vh'
    }}>
      <Nav url='/styles' title='Styles'/>
      <Nav url='/app' title='App' color='#228B22' />
      <Nav url='/jsx' title='JSX' color='#D2691E' />
      <Nav url='/navigator' title='Navegação #1' color='#B22222' />
      <Nav url='/client/sp-1-02/001' title='Navegação #2' color='#DC143C' />
      <Nav url='/state' title='Component with State' color='#7B68EE' />
    </div>
  );

}