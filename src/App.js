import { Container } from "@material-ui/core";
import CardList from "./components/CardList/CardList";
import Cart from "./components/Cart/Cart";
import useAlan from "./hooks/useAlan";

function App() {
  useAlan();
  return (
    <Container maxWidth="md" style={{paddingTop: '30px'}}>
      <Cart />
      <CardList />
    </Container>
  );
}

export default App;
