import { useState, useEffect } from "react";
import ImageComparison from "./ImageComparison";

// Gallery data with before/after images
const galleryItems = [
  {
    title: "Classic Car Restoration",
    description: "Removing rust and oxidation from vintage car surfaces",
    beforeImage: "https://images.pexels.com/photos/2127037/pexels-photo-2127037.jpeg?auto=compress&cs=tinysrgb&w=600", // Classic car
    afterImage: "https://images.pexels.com/photos/2127037/pexels-photo-2127037.jpeg?auto=compress&cs=tinysrgb&w=600" // Same classic car (effect applied via CSS)
  },
  {
    title: "Coin & Jewelry Cleaning",
    description: "Precision cleaning and restoration of collectible coins",
    beforeImage: "https://images.pexels.com/photos/6328840/pexels-photo-6328840.jpeg?auto=compress&cs=tinysrgb&w=600", // Coins
    afterImage: "https://images.pexels.com/photos/6328840/pexels-photo-6328840.jpeg?auto=compress&cs=tinysrgb&w=600" // Same coins (effect applied via CSS)
  },
  {
    title: "Metal Surface Preparation",
    description: "Removing rust and corrosion from metal surfaces",
    beforeImage: "https://images.pexels.com/photos/5726837/pexels-photo-5726837.jpeg?auto=compress&cs=tinysrgb&w=600", // Metal surface
    afterImage: "https://images.pexels.com/photos/5726837/pexels-photo-5726837.jpeg?auto=compress&cs=tinysrgb&w=600" // Same metal surface (effect applied via CSS)
  },
  {
    title: "Automotive Parts Cleaning",
    description: "Precision cleaning of engine components",
    beforeImage: "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=600", // Car engine parts
    afterImage: "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=600" // Same car engine parts (effect applied via CSS)
  },
  {
    title: "Graffiti Removal",
    description: "Removing graffiti without damaging surfaces",
    beforeImage: "https://images.pexels.com/photos/1647121/pexels-photo-1647121.jpeg?auto=compress&cs=tinysrgb&w=600", // Wall with graffiti
    afterImage: "https://images.pexels.com/photos/1647121/pexels-photo-1647121.jpeg?auto=compress&cs=tinysrgb&w=600" // Same wall (effect applied via CSS)
  },
  {
    title: "Industrial Machine Maintenance",
    description: "Cleaning industrial equipment without disassembly",
    beforeImage: "https://images.pexels.com/photos/175709/pexels-photo-175709.jpeg?auto=compress&cs=tinysrgb&w=600", // Industrial equipment
    afterImage: "https://images.pexels.com/photos/175709/pexels-photo-175709.jpeg?auto=compress&cs=tinysrgb&w=600" // Same industrial equipment (effect applied via CSS)
  }
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">Before & After Gallery</h2>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            See the remarkable difference our laser cleaning technology makes. 
            Drag the slider to reveal the transformation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div key={index} className="bg-card rounded-lg shadow-md shadow-primary/10 overflow-hidden">
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 text-secondary">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
              <ImageComparison 
                beforeImage={item.beforeImage} 
                afterImage={item.afterImage}
                type={
                  item.title.toLowerCase().includes('car') ? 'car' : 
                  item.title.toLowerCase().includes('coin') ? 'coin' :
                  item.title.toLowerCase().includes('graffiti') ? 'graffiti' :
                  item.title.toLowerCase().includes('industrial') ? 'industrial' : 'metal'
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
