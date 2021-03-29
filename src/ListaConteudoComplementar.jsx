import { NavLink } from "react-router-dom";

export const ListaConteudoComplementar = () => {
  return (
    <div>
      <div class="list-group">
        <NavLink
          className="list-group-item list-group-item-action"
          activeClassName="active"
          to="/conteudos-complementares/1"
        >
          Conteudo Complementar 1
        </NavLink>
        <NavLink
          className="list-group-item list-group-item-action"
          activeClassName="active"
          to="/conteudos-complementares/2"
        >
          Conteudo Complementar 2
        </NavLink>
        <NavLink
          className="list-group-item list-group-item-action"
          activeClassName="active"
          to="/conteudos-complementares/3"
        >
          Conteudo Complementar 3
        </NavLink>
      </div>
    </div>
  );
};
