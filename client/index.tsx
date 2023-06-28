import { createRoot } from 'react-dom/client'

import App from './components/AppLayout/AppLayout'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(<App />)
})
