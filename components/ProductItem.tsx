import { memo, useState } from "react";
// import { AddProductToWishlist } from "./AddProductToWishlist";
import dynamic from 'next/dynamic';
import { AddProductToWishlistProps } from "./AddProductToWishlist";
import styles from '@/styles/ProductItem.module.css';

const AddProductToWishlist = dynamic<AddProductToWishlistProps>(() => {
  return import ('./AddProductToWishlist')
  .then(mod => mod.AddProductToWishlist)
}, {
  loading: () => <span>Carregando...</span>
})

interface ProductItemProps {
  index: number;
  product: {
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  };
  onAddToWishlist: (id: number) => void;
}

function ProductItemComponent({ index, product, onAddToWishlist }: ProductItemProps) {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);
  const delayClass = styles[`delay${index % 8}`];

  return (
    <article className={`${styles.card} ${delayClass}`}>
      <div>
        <p className={styles.title}>{product.title}</p>
        <strong className={styles.price}>{product.priceFormatted}</strong>
      </div>

      <button
        className={styles.favButton}
        onClick={() => setIsAddingToWishlist(true)}
      >
        Favoritar
      </button>

      {isAddingToWishlist && (
        <AddProductToWishlist
          onAddToWishlist={() => {
            onAddToWishlist(product.id);
            setIsAddingToWishlist(false);
          }}
          onRequestCLose={() => setIsAddingToWishlist(false)}
        />
      )}
    </article>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);
