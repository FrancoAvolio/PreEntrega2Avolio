import Header from "./components/Header/Header"
import ItemListContainer from "./components/itemListContainer/itemListContainer"
import "./App.css"
function App() {
 
  return (
    <div>
      <Header/>
      <ItemListContainer greeting = "Descuentos exclusivos de temporada"/>
    </div>
  )
}
export default App

