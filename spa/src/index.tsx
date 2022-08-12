import 'normalize.css';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const rootElement = document.body.appendChild(document.createElement('div'));
const root = createRoot(rootElement);

rootElement.setAttribute('id', 'root');
root.render(
  <StrictMode>
    <div>Hello, World!</div>
  </StrictMode>,
);
