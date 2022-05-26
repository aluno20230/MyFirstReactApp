// App.js
// *******************************************************************

// importar um conteúdo e colocá-lo numa variável
import logo from './logo.svg';
// importar ficheiro CSS
import './App.css';


/* os COMPONENTES podem ser:
     - classes
     - funções
*/
function App() {
  // todo o 'componente' tem sempre que devolver alguma coisa...
  // e devolver sempre um único objeto
  return (
    <div className="App"> {/* qd quero referir 'class' do CSS,
                              tenho de usar o termo 'className'.
                              Depois o JSX, em runtime converte para 'class' */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* no REACT, acede-se ao valor das variáveis através de {} */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>Olá Mundo (2ª vez)</h1>
      <footer className='App-footer'>
        &copy; app@DW
      </footer>
    </div>
  );
}

// só se consegue aceder ao conteúdo do componente, se ele for 'exportado'
export default App;
