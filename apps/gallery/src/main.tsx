import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App.js';
import { CardApp } from './CardApp.js';

import './app.css';

// set by scripts/build-cards.mjs to build a single-component preview card
const card = import.meta.env.VITE_CARD as string | undefined;

createRoot(document.querySelector('#root')!).render(
	<StrictMode>{card ? <CardApp card={card} /> : <App />}</StrictMode>,
);
