import { SearchResults } from "@/components/SearchResults";
import { FormEvent, useState, useCallback } from "react";
import styles from "@/styles/Home.module.css";

type Product = {
  id: number;
  title: string;
  price: number;
  priceFormatted: string;
};

type Results = {
  totalPrice: number;
  data: Product[];
};

export default function Home() {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [results, setResults] = useState<Results>({
    totalPrice: 0,
    data: [],
  });

  async function handleSearch(event: FormEvent) {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    const formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    try {
      const response = await fetch(
        `http://localhost:3333/products?q=${encodeURIComponent(search)}`
      );

      if (!response.ok) {
        throw new Error("Não foi possível buscar os produtos.");
      }

      const data = (await response.json()) as Array<{
        id: number;
        title: string;
        price: number;
      }>;

      const products = data.map((product) => {
        return {
          id: product.id,
          title: product.title,
          price: product.price,
          priceFormatted: formatter.format(product.price),
        };
      });

      const totalPrice = data.reduce((total, product) => {
        return total + product.price;
      }, 0);

      setResults({ totalPrice, data: products });
    } catch (error) {
      setResults({ totalPrice: 0, data: [] });
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Ocorreu um erro ao buscar produtos."
      );
    } finally {
      setIsLoading(false);
    }
  }

  const addToWishlist = useCallback(async (id: number) => {
    console.log(id);
  }, []);

  return (
    <main className={styles.page}>
      <div className={styles.bgGlowA} aria-hidden="true" />
      <div className={styles.bgGlowB} aria-hidden="true" />

      <section className={styles.hero}>
        <p className={styles.kicker}>PERFREACT UI LAB</p>
        <h1>Busca turbo com visual de nova geração</h1>
        <p>
          Explore produtos com renderização virtualizada, feedback instantâneo e
          uma interface com energia futurista.
        </p>
      </section>

      <section className={styles.searchPanel}>
        <form onSubmit={handleSearch} className={styles.searchForm}>
          <label htmlFor="search" className={styles.searchLabel}>
            O que você quer encontrar?
          </label>
          <div className={styles.searchRow}>
            <input
              id="search"
              type="text"
              placeholder="Ex.: mouse, teclado, monitor"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Buscando..." : "Buscar produtos"}
            </button>
          </div>
        </form>

        {errorMessage && <p className={styles.error}>{errorMessage}</p>}

        <SearchResults
          results={results.data}
          totalPrice={results.totalPrice}
          onAddToWishlist={addToWishlist}
        />
      </section>
    </main>
  );
}
