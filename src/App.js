import { Route, Switch } from "react-router-dom";
import { DetalheTema } from "./DetalheTema";
import { Header } from "./Header";
import { Tabs } from "./Tabs";

function App() {
  return (
    <div className="App">
      <Header />
      <br />

      <div style={{ width: "100%" }}>
        <div style={{ width: "25%" }}>
          <Tabs />
        </div>
        <div style={{ width: "74%", float: "right" }}>
          <h1>Detalhe do item</h1>
          <Switch>
            <Route path="/temas/:id">
              <DetalheTema />
            </Route>
            <Route path="/conteudos-complementares/:id">
              <h1> Detalhe Conteudo Complementar</h1>
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
