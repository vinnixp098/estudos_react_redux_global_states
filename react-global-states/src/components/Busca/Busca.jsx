import styles from './Busca.module.scss'

export function BuscaComponent() {
  return (
    <div className={styles.busca}>
      <input className={styles.input} 
      type="text" 
      placeholder='Buscar'
      />
    </div>
  );
}
