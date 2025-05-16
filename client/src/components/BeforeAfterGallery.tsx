import { useState } from 'react';

// Import the images
import img0165 from '../assets/IMG_0165.jpeg';
import img0166 from '../assets/IMG_0166.jpeg';
import img0167 from '../assets/IMG_0167.jpeg';
import img0168 from '../assets/IMG_0168.jpeg';

// Gallery data with individual images
const galleryItems = [
  {
    title: "Rusted Metal Component",
    description: "Heavy rust buildup on metal surface before treatment",
    image: img0165,
    status: "before"
  },
  {
    title: "Restored Metal Surface",
    description: "Clean, polished surface after precision laser cleaning",
    image: img0166,
    status: "after"
  },
  {
    title: "Oxidized Industrial Part",
    description: "Industrial component with oxidation and contamination",
    image: img0167,
    status: "before"
  },
  {
    title: "Reconditioned Component",
    description: "Component fully restored to like-new condition",
    image: img0168,
    status: "after"
  }
];

const BeforeAfterGallery = () => {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">Project Gallery</h2>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            See examples of our laser cleaning and restoration projects.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div key={index} className="bg-card rounded-lg shadow-md shadow-primary/10 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 text-secondary">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;