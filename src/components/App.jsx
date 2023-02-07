import Navbar from "./Navbar/Navbar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import { ItemCount } from "./ItemCount/ItemCount";

const App = () => {
  
  return (
    <>
      <Navbar/>
      <ItemListContainer saludo={'Bienvenidos!'}/>
      <ItemCount valInicial={1} stock={10}/>
    </>
  );
}

export default App;
