import Header from "./components/Header/Header"
import ItemListContainer from "./components/itemListContainer/itemListContainer"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from "./components/Cards/Cards";
function App() {
 
  return (
    <div>
      <Header/>
      <ItemListContainer greeting = "Descuentos exclusivos de temporada"/>
      <BasicExample/>
    </div>
  )
}
export default App

