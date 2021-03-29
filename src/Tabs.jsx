import { Link, Route, Switch } from "react-router-dom";
import { ListaTemas } from "./ListaTemas";

export const Tabs = () => {
  return (
    <div>
      <Link to="/temas">Temas</Link>
      <Link to="/conteudos-complementares"> Conteudo Complementar</Link>
      <Link to="/trabalhos">Trabalhos</Link>

      <Switch>
        <Route path="/temas">
          <ListaTemas />
        </Route>
        <Route path="/conteudos-complementares">
          <h1>Conteudo Complementar</h1>
          <Link to="/conteudos-complementares/detalhe">detalhes</Link>
        </Route>
        <Route path="/trabalhos">
          <h1>Trabalhos</h1>
          <Link to="/trabalhos/detalhe">detalhes</Link>
        </Route>
      </Switch>
    </div>
  );
};
