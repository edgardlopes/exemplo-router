import { Route, Switch } from "react-router-dom";
import { DetalheConteudoComplementar } from "./DetalheConteudoComplementar";
import { DetalheTema } from "./DetalheTema";
import { Header } from "./Header";
import { Tabs } from "./Tabs";

function App() {
  return (
    <div className="container">
      <Header />
      <br />

      <div className="row">
        <div className="col">
          <Tabs />
        </div>
        <div className="col">
          <h1>Detalhe do item</h1>
          <Switch>
            <Route path="/temas/:id">
              <DetalheTema />
            </Route>
            <Route path="/conteudos-complementares/:id">
              <DetalheConteudoComplementar />
            </Route>
            <Route path="/trabalhos/:id">
              <h1> Detalhe Trabalhos</h1>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
