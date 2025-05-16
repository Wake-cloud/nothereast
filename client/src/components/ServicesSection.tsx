import { 
  Factory, Car, Landmark, Palette, Building, ClipboardList 
} from "lucide-react";

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  features: string[] 
}) => {
  return (
    <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg shadow-primary/10 hover:shadow-primary/20 transition">
      <div className="w-14 h-14 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-secondary">{title}</h3>
      <p className="mb-4 text-muted-foreground">{description}</p>
      <ul className="space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-primary mr-2 mt-1">✓</span>
            <span className="text-foreground">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: Factory,
      title: "Industrial Laser Cleaning",
      description: "Remove rust, paint, coatings, and contaminants from industrial equipment and machinery with precision and efficiency.",
      features: [
        "Rust and oxidation removal",
        "Paint and coating removal",
        "Surface preparation"
      ]
    },
    {
      icon: Car,
      title: "Automotive Restoration",
      description: "Specialized cleaning and restoration for automotive parts, removing rust, old paint, and preparing surfaces for refinishing.",
      features: [
        "Vehicle frame restoration",
        "Parts cleaning and refurbishment",
        "Rust removal from classic cars"
      ]
    },
    {
      icon: Landmark,
      title: "Historical Restoration",
      description: "Gentle and precise cleaning for historical artifacts, monuments, and buildings, preserving their original integrity and value.",
      features: [
        "Monument and sculpture cleaning",
        "Artifact preservation",
        "Architectural feature restoration"
      ]
    },
    {
      icon: Palette,
      title: "Art Restoration",
      description: "Delicate cleaning services for artwork, sculptures, and other valuable pieces requiring meticulous attention to detail.",
      features: [
        "Metal sculpture cleaning",
        "Art conservation",
        "Frame restoration"
      ]
    },
    {
      icon: Building,
      title: "Construction & Renovation",
      description: "Effective cleaning solutions for building materials and surfaces during renovation and construction projects.",
      features: [
        "Concrete surface preparation",
        "Graffiti removal",
        "Metal fixture restoration"
      ]
    },
    {
      icon: ClipboardList,
      title: "Consultation Services",
      description: "Expert assessments to determine the most effective laser cleaning methods for your specific projects and needs.",
      features: [
        "On-site evaluations",
        "Custom solution development",
        "Project scoping and planning"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">Our Specialized Services</h2>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            We utilize precision laser technology to effectively and safely remove contaminants 
            from various surfaces without damaging the underlying substrate.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
