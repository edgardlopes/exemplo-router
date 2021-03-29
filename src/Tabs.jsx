import { Link, NavLink, Route, Switch } from "react-router-dom";
import { ListaConteudoComplementar } from "./ListaConteudoComplementar";
import { ListaTemas } from "./ListaTemas";

export const Tabs = () => {
  return (
    <div>
      <ul class="nav nav-tabs nav-justified">
        <li class="nav-item">
          <NavLink
            className="nav-link"
            as="a"
            to="/temas"
            activeClassName="active"
          >
            Temas
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink
            className="nav-link"
            as="a"
            to="/conteudos-complementares"
            activeClassName="active"
          >
            Cont Complementar
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink
            className="nav-link"
            as="a"
            to="/trabalhos"
            activeClassName="active"
          >
            Trabalhos
          </NavLink>
        </li>
      </ul>

      <Switch>
        <Route path="/temas">
          <ListaTemas />
        </Route>
        <Route path="/conteudos-complementares">
          <ListaConteudoComplementar />
        </Route>
        <Route path="/trabalhos">
          <h1>Trabalhos</h1>
          <Link to="/trabalhos/detalhe">detalhes</Link>
        </Route>
      </Switch>
    </div>
  );
};
