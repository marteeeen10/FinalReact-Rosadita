import './App.css'
import Navbar from "./Navbar/Navbar";
import { ItemCount } from "./ItemCount/ItemCount";
import { ItemListContainer } from "./ItemListContainer/ItemListContainer";

const App = () => {
  
  return (
    <>
      <Navbar/>
      {/* <ItemCount valInicial={1} stock={10}/> */}
      <ItemListContainer/>
    </>
  );
}

export default App;
