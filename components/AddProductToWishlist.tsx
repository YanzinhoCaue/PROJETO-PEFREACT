import styles from '@/styles/AddProductToWishlist.module.css';

export interface AddProductToWishlistProps {
  onAddToWishlist: () => void;
  onRequestCLose: () => void;
}

export function AddProductToWishlist({ onAddToWishlist, onRequestCLose }: AddProductToWishlistProps) {
  return (
    <div className={styles.overlay} role="dialog" aria-modal="true">
      <div className={styles.modal}>
        <p>Deseja adicionar este produto aos favoritos?</p>
        <div className={styles.actions}>
          <button className={styles.confirm} onClick={onAddToWishlist}>
            Sim
          </button>
          <button className={styles.cancel} onClick={onRequestCLose}>
            Não
          </button>
        </div>
      </div>
    </div>
  );
}