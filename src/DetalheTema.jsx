import { useParams } from "react-router-dom";

export const DetalheTema = () => {
  const { id } = useParams();

  return <div>Detalhe do tema {id}</div>;
};
