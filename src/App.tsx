import ListGroup from "./components/ListGroup";
let area = ['Dhaka', 'Rangpur', 'Barishal', 'Rajshahi', 'Khulna', 'Sylhet', 'Mymenshingh'];

function App() {
  return <div><ListGroup area={area} heading="Cities" /></div>
}

export default App;