import 'normalize.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.body.appendChild(document.createElement('div'))).render(
  <StrictMode>
    <div>Hello, World!</div>
  </StrictMode>,
);
