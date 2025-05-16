const EquipmentSection = () => {
  const equipmentItems = [
    {
      image: "https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "High-Power Industrial Laser Systems",
      description: "Our industrial-grade laser systems deliver powerful cleaning capabilities for large-scale projects and stubborn contaminants."
    },
    {
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Precision Handheld Laser Tools",
      description: "For detailed work and difficult-to-reach areas, our handheld laser tools provide exceptional precision and control."
    },
    {
      image: "https://images.pexels.com/photos/5726850/pexels-photo-5726850.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Conservation-Grade Systems",
      description: "Our specialized conservation equipment is designed for delicate historical artifacts and art restoration projects."
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">Our Advanced Equipment</h2>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            We invest in cutting-edge laser technology to deliver superior cleaning and restoration results
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipmentItems.map((item, index) => (
            <div key={index} className="bg-card rounded-lg overflow-hidden shadow-md shadow-primary/10 hover:shadow-primary/20 transition">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-secondary">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
