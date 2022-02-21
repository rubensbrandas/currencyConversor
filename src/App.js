
import './App.css';
import Conversor from './components/conversor';

function App() {
  return (
    <div className="App">
      <div className='linha'>
        <Conversor moedaA='USD' moedaB='AED'></Conversor>
        <Conversor moedaA='BRL' moedaB='USD'></Conversor>
      </div>
      <div className='linha'>
        <Conversor moedaA='AED' moedaB='BRL'></Conversor>
        <Conversor moedaA='BRL' moedaB='AED'></Conversor>
      </div>
      <div className='linha'>
        <Conversor moedaA='EUR' moedaB='AED'></Conversor>
        <Conversor moedaA='BRL' moedaB='EUR'></Conversor>
      </div>

    </div>
  );
}

export default App;
