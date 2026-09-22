import { useEffect, useMemo, useState } from 'react';

type MenuItem = {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  prepTime: string;
  accent: string;
};

const categories = ['All', 'Mains', 'Fresh', 'Sweet'];

function App() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/menu')
      .then((response) => {
        if (!response.ok) throw new Error('The menu could not be loaded.');
        return response.json() as Promise<{ items: MenuItem[] }>;
      })
      .then(({ items: menuItems }) => setItems(menuItems))
      .catch(() => setError('We could not reach the kitchen. Is the API running?'))
      .finally(() => setIsLoading(false));
  }, []);

  const visibleItems = useMemo(
    () => activeCategory === 'All' ? items : items.filter((item) => item.category === activeCategory),
    [activeCategory, items]
  );

  return (
    <main className="app-shell">
      <nav className="topbar">
        <a className="wordmark" href="/" aria-label="Table and Thyme home">
          <span className="wordmark-mark">T</span>
          <span>Table <i>&</i> Thyme</span>
        </a>
        <div className="topbar-meta">
          <span className="open-status"><span /> Open until 10pm</span>
          <button className="bag-button" type="button" aria-label="View order bag">Bag <span>0</span></button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Your neighborhood table</p>
          <h1>Good food,<br /><em>slowly savored.</em></h1>
          <p className="hero-description">Seasonal plates made for lingering. Order a little something for wherever the day takes you.</p>
          <a className="primary-link" href="#menu">Explore today&apos;s menu <span>↘</span></a>
        </div>
        <div className="hero-art" aria-label="Illustration of a served meal" role="img">
          <div className="sun-disc" />
          <div className="plate"><div className="plate-food" /><div className="plate-leaf leaf-one" /><div className="plate-leaf leaf-two" /></div>
          <span className="art-note note-one">made with care</span>
          <span className="art-note note-two">02 / 24</span>
        </div>
      </section>

      <section className="menu-section" id="menu">
        <div className="section-heading">
          <div><p className="eyebrow">From the kitchen</p><h2>Today&apos;s table</h2></div>
          <p className="section-caption">A short menu, made fresh<br />and ready when you are.</p>
        </div>
        <div className="category-row" role="tablist" aria-label="Menu categories">
          {categories.map((category) => <button key={category} className={activeCategory === category ? 'category active' : 'category'} type="button" onClick={() => setActiveCategory(category)}>{category}</button>)}
        </div>

        {isLoading && <p className="state-message">Setting the table...</p>}
        {error && <p className="state-message error-message">{error}</p>}
        {!isLoading && !error && <div className="menu-grid">
          {visibleItems.map((item) => <article className="menu-card" key={item.id}>
            <div className="card-visual" style={{ '--accent': item.accent } as React.CSSProperties}><span>{item.category}</span><div className="dish-shape" /></div>
            <div className="card-body"><div className="card-title"><h3>{item.name}</h3><strong>${item.price.toFixed(2)}</strong></div><p>{item.description}</p><div className="card-meta"><span>★ {item.rating}</span><span>{item.prepTime}</span><button type="button" aria-label={`Add ${item.name} to bag`}>+</button></div></div>
          </article>)}
        </div>}
      </section>

      <footer><span>Table & Thyme / Est. 2024</span><span>Seasonal food for everyday rituals.</span></footer>
    </main>
  );
}

export default App;
