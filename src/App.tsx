import ListGroup from "./components/ListGroup";

function App() {
  let area = ['Dhaka', 'Rangpur', 'Barishal', 'Rajshahi', 'Khulna', 'Sylhet', 'Mymenshingh'];

  const selectHandler = (item: string) => {
    console.log(item);
  }
  return <div><ListGroup area={area} heading="Cities" onSelectItem={selectHandler} /></div>
}

export default App;