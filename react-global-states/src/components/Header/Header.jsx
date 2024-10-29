import styles from "./Header.module.scss";
import { TituloComImagem } from "./TituloComImagem/TituloComImagem";
import { TituloSemImagem } from "./TituloSemImagem/TituloSemImagem";

export default function HeaderComponent({
  titulo,
  descricao,
  className = "",
  imagem,
}) {
  return (
    <header className={styles.header}>
      {titulo && !imagem && (
        <TituloSemImagem titulo={titulo} descricao={descricao} />
      )}
      {titulo && imagem && (
        <TituloComImagem
          titulo={titulo}
          descricao={descricao}
          imagem={imagem}
          className={className}
        />
      )}
    </header>
  );
}
