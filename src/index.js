import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Register service worker for PWA
serviceWorkerRegistration.unregister();

// Performance monitoring
if (process.env.NODE_ENV === 'production') {
  // Report web vitals
  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    // Web vitals can be sent to analytics service
    getCLS(console.error);
    getFID(console.error);
    getFCP(console.error);
    getLCP(console.error);
    getTTFB(console.error);
  });
}
