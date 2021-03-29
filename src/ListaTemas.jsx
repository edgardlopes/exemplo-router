import { Link } from "react-router-dom";

export const ListaTemas = () => {
  return (
    <div>
      <h4>Lista de temas</h4>

      <ul>
        <li>
          <Link to="/temas/1">Detalhe 1</Link>
        </li>
        <li>
          <Link to="/temas/2">Detalhe 2</Link>
        </li>
        <li>
          <Link to="/temas/3">Detalhe 3</Link>
        </li>
      </ul>
    </div>
  );
};
