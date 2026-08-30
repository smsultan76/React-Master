import ListGroup from "./components/ListGroup";
import { area } from "./config/data";
import useRouter from "./hooks/useRoute";
import AboutPage from "./pages/about";

function App() {
  const { path } = useRouter();
  const selectHandler = (item: string) => {
    console.log(item);
  }
  if (path == "/") return <div>
    <a href="about">about</a>
    <ListGroup area={area} heading="Cities" onSelectItem={selectHandler} />
  </div>
  if (path.startsWith("/area/")) return <AreaPage />
  if (path == '/about') return <AboutPage />
  return <NotFound />
}
function AreaPage() {
  const { path } = useRouter();

  const name = path.split("/")[2];

  return (
    <h1>
      This is {name} area.
    </h1>
  );
}

function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

export default App;