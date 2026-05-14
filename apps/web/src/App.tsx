import { useEffect, useState } from 'react';

type Product = {
  id: number;
  title: string;
  price: number;
};

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  async function loadProducts() {
    const res = await fetch('http://localhost:3000/products');
    const data = await res.json();
    setProducts(data);
  }

  async function createProduct(e: React.FormEvent) {
    e.preventDefault();

    await fetch('http://localhost:3000/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, price: Number(price) }),
    });

    setTitle('');
    setPrice('');
    loadProducts();
  }

  useEffect(() => {
    (async () => {
      await loadProducts();
    })();
  }, []);

  return (
    <main style={{ padding: 40 }}>
      <h1>Products</h1>

      <form onSubmit={createProduct}>
        <input
          placeholder="Название"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="Цена"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button type="submit">Добавить</button>
      </form>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} — {product.price}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;