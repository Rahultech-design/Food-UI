import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <main>
      <p className="eyebrow">Table & Thyme</p>
      <h1>Good food,<br /><em>slowly savored.</em></h1>
      <p className="intro">Your food UI is running. The EF Core data layer lives in <code>apps/api</code> and has no server host yet.</p>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode><App /></StrictMode>
);