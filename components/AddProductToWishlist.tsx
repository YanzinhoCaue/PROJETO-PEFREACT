export interface AddProductToWishlistProps {
  onAddToWishlist: () => void;
  onRequestCLose: () => void;
}

export function AddProductToWishlist({ onAddToWishlist, onRequestCLose }: AddProductToWishlistProps) {
  return (
    <span>Deseja adicionar aos favoritos
      <button onClick={onAddToWishlist}>Sim</button>
      <button onClick={onRequestCLose}>Não</button>
    </span>
  );
}