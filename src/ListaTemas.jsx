import { NavLink } from "react-router-dom";

export const ListaTemas = () => {
  return (
    <div>
      <div class="list-group">
        <NavLink
          className="list-group-item list-group-item-action"
          activeClassName="active"
          to="/temas/1"
        >
          Detalhe 1
        </NavLink>
        <NavLink
          className="list-group-item list-group-item-action"
          activeClassName="active"
          to="/temas/2"
        >
          Detalhe 2
        </NavLink>
        <NavLink
          className="list-group-item list-group-item-action"
          activeClassName="active"
          to="/temas/3"
        >
          Detalhe 3
        </NavLink>
      </div>
    </div>
  );
};
