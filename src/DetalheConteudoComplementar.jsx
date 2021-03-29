import { useParams } from "react-router-dom";

export const DetalheConteudoComplementar = () => {
  const { id } = useParams();

  return <div>Detalhe do conteudo complementar {id}</div>;
};
