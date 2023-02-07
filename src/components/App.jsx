import './App.css'
import Navbar from "./Navbar/Navbar";
import { ItemCount } from "./ItemCount/ItemCount";
import { ItemListContainer } from "./ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';

const App = () => {
  
  return (
    <>
      <Navbar/>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </>
  );
}

export default App;
