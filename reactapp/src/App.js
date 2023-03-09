import './App.css';
import BasicExample from './components/createNavBar/NavBar';
import Counter from './components/counter/counter';
import ItemListContainer from './components/ItemListCont/ItemList';

function App() {
  return (
    <div className="App" >
      <BasicExample/>
      <Counter/>
      <ItemListContainer greeting={"Bienvenido a la primera preentrega"}/>
    </div>
  );
}

export default App;
