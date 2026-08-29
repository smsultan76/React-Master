import ListGroup from "./components/ListGroup";
import { area } from "./config/data";

function App() {

  const selectHandler = (item: string) => {
    console.log(item);
  }
  return <div><ListGroup area={area} heading="Cities" onSelectItem={selectHandler} /></div>
}

export default App;