import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.pexels.com/photos/6683041/pexels-photo-6683041.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Laser cleaning technician at work" 
              className="rounded-lg shadow-lg shadow-primary/10 w-full h-auto" 
            />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">About Northeast Laser Restoration</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-primary">Our Mission</h3>
              <p className="mb-4 text-muted-foreground">
                Our mission is to deliver top-quality laser cleaning and restoration services for diverse industries, 
                ensuring precision and efficiency while preserving the integrity of our clients' assets. 
                We are committed to utilizing advanced technology and eco-friendly practices to provide superior results, 
                fostering sustainability and satisfaction in every project.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-primary">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-primary mt-1 mr-3 h-5 w-5" />
                  <span className="text-foreground"><strong className="font-semibold text-secondary">Advanced Technology:</strong> We utilize the latest laser cleaning equipment for optimal results.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mt-1 mr-3 h-5 w-5" />
                  <span className="text-foreground"><strong className="font-semibold text-secondary">Eco-Friendly:</strong> Our processes are chemical-free and environmentally sustainable.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mt-1 mr-3 h-5 w-5" />
                  <span className="text-foreground"><strong className="font-semibold text-secondary">Expertise:</strong> Our specialists are trained in precision restoration techniques.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mt-1 mr-3 h-5 w-5" />
                  <span className="text-foreground"><strong className="font-semibold text-secondary">Customized Solutions:</strong> We tailor our services to meet your specific needs.</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3 text-primary">Our Technology</h3>
              <p className="text-muted-foreground">
                We employ state-of-the-art laser cleaning systems that precisely remove contaminants without 
                damaging underlying surfaces. This non-abrasive technology is ideal for delicate restoration 
                work and industrial applications alike.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
