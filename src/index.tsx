import { createRoot } from 'react-dom/client';
import { GlobalProvider } from 'globalContext';
import App from './App';

const domNode  = document.getElementById('root')!;
const root = createRoot(domNode);

root.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>,
);
