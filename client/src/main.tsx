import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Set page title and meta
document.title = "Northeast Laser Restoration - Precision Laser Cleaning Services";

// Add meta description for SEO
const metaDescription = document.createElement('meta');
metaDescription.name = 'description';
metaDescription.content = 'Northeast Laser Restoration offers top-quality laser cleaning and restoration services for industrial, automotive, historical, and art conservation applications.';
document.head.appendChild(metaDescription);

// Add Open Graph tags for better social sharing
const ogTitle = document.createElement('meta');
ogTitle.setAttribute('property', 'og:title');
ogTitle.content = 'Northeast Laser Restoration - Precision Laser Cleaning Services';
document.head.appendChild(ogTitle);

const ogDescription = document.createElement('meta');
ogDescription.setAttribute('property', 'og:description');
ogDescription.content = 'Specialized laser cleaning and restoration services for diverse industries, delivering precision and eco-friendly solutions.';
document.head.appendChild(ogDescription);

const ogType = document.createElement('meta');
ogType.setAttribute('property', 'og:type');
ogType.content = 'website';
document.head.appendChild(ogType);

createRoot(document.getElementById("root")!).render(<App />);
