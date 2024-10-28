import HeaderComponent from "components/Header/Header";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./CategoriaView.module.scss";
import { ItemComponent } from "components/Item/ItemComponent";

export function CategoriaView() {
  const { nomeCategoria } = useParams();
  console.log("nomeCategoria:  ", nomeCategoria);
  const { categoria, itens } = useSelector((state) => ({
    categoria: state.categorias.find(
      (categoria) => categoria.id === nomeCategoria
    ),

    itens: state.itens?.filter((item) => item.categoria === nomeCategoria),
  }));
  console.log("itens:  ", itens);
  return (
    <div>
      <HeaderComponent
        titulo={categoria.nome}
        descricao={categoria.descricao}
        imagem={categoria.header}
      />
      <div className={styles.itens}>
        {itens?.map(item => (
          <ItemComponent  key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
