import { ProductItem } from './ProductItem';
import styles from '@/styles/SearchResults.module.css';

interface SearchResultsProps {
  totalPrice: number;
  results: Array<{
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }>;
  onAddToWishlist: (id: number) => void;
}

export function SearchResults({
  results,
  totalPrice,
  onAddToWishlist,
}: SearchResultsProps) {
  const currencyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <strong>{results.length} resultados</strong>
        <span>Total: {currencyFormatter.format(totalPrice)}</span>
      </div>

      <div className={styles.listArea}>
        {results.map((product, index) => {
          return (
            <div key={product.id} className={styles.row}>
              <ProductItem
                index={index}
                product={product}
                onAddToWishlist={onAddToWishlist}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
