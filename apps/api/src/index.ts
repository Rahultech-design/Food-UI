import cors from 'cors';
import express from 'express';

const app = express();
const port = Number(process.env.PORT ?? 4000);

app.use(cors());
app.use(express.json());

const menu = [
  {
    id: 'harissa-bowl',
    name: 'Harissa Chicken Bowl',
    description: 'Charred chicken, couscous, herbs, and a bright lemon tahini drizzle.',
    category: 'Mains',
    price: 16.5,
    rating: 4.9,
    prepTime: '15 min',
    accent: '#e87743'
  },
  {
    id: 'green-goddess',
    name: 'Green Goddess Salad',
    description: 'Crisp greens, avocado, toasted seeds, and creamy basil dressing.',
    category: 'Fresh',
    price: 12,
    rating: 4.8,
    prepTime: '10 min',
    accent: '#87a878'
  },
  {
    id: 'miso-noodles',
    name: 'Miso Sesame Noodles',
    description: 'Silky noodles, roasted mushrooms, snap peas, and chili crisp.',
    category: 'Mains',
    price: 14.75,
    rating: 4.7,
    prepTime: '12 min',
    accent: '#c99b5a'
  },
  {
    id: 'berry-cloud',
    name: 'Berry Cloud Parfait',
    description: 'Vanilla yogurt, macerated berries, pistachio, and honey crunch.',
    category: 'Sweet',
    price: 8.5,
    rating: 4.9,
    prepTime: '5 min',
    accent: '#c98291'
  }
];

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', service: 'food-ui-api' });
});

app.get('/api/menu', (_request, response) => {
  response.json({ items: menu });
});

app.listen(port, () => {
  console.log(`Food UI API listening on http://localhost:${port}`);
});
