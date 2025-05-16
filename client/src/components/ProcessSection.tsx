const ProcessSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">Our Restoration Process</h2>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            We follow a comprehensive approach to ensure quality results for every project
          </p>
        </div>
        
        <div className="timeline-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Step 1 */}
            <div className="bg-card p-6 rounded-lg shadow-md shadow-primary/10 hover:shadow-primary/20 transition md:text-right">
              <div className="flex flex-col items-start md:items-end">
                <div className="w-14 h-14 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-secondary">Initial Consultation</h3>
                <p className="text-muted-foreground">
                  We begin with a thorough assessment of your restoration needs, discussing your goals 
                  and evaluating the materials and surfaces involved.
                </p>
              </div>
            </div>
            <div className="hidden md:block"></div>
            
            {/* Step 2 */}
            <div className="hidden md:block"></div>
            <div className="bg-card p-6 rounded-lg shadow-md shadow-primary/10 hover:shadow-primary/20 transition">
              <div className="flex flex-col items-start">
                <div className="w-14 h-14 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-secondary">Testing & Analysis</h3>
                <p className="text-muted-foreground">
                  We conduct sample testing to determine the optimal laser settings and techniques 
                  for your specific materials, ensuring safe and effective restoration.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="bg-card p-6 rounded-lg shadow-md shadow-primary/10 hover:shadow-primary/20 transition md:text-right">
              <div className="flex flex-col items-start md:items-end">
                <div className="w-14 h-14 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-secondary">Custom Solution Development</h3>
                <p className="text-muted-foreground">
                  Based on testing results, we develop a tailored cleaning and restoration 
                  plan specific to your project's requirements and objectives.
                </p>
              </div>
            </div>
            <div className="hidden md:block"></div>
            
            {/* Step 4 */}
            <div className="hidden md:block"></div>
            <div className="bg-card p-6 rounded-lg shadow-md shadow-primary/10 hover:shadow-primary/20 transition">
              <div className="flex flex-col items-start">
                <div className="w-14 h-14 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">4</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-secondary">Precision Restoration</h3>
                <p className="text-muted-foreground">
                  Our technicians perform the laser cleaning process with meticulous attention 
                  to detail, carefully restoring your items to their desired condition.
                </p>
              </div>
            </div>
            
            {/* Step 5 */}
            <div className="bg-card p-6 rounded-lg shadow-md shadow-primary/10 hover:shadow-primary/20 transition md:text-right">
              <div className="flex flex-col items-start md:items-end">
                <div className="w-14 h-14 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">5</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-secondary">Quality Inspection</h3>
                <p className="text-muted-foreground">
                  We thoroughly inspect all completed work to ensure it meets our high 
                  standards and your specific requirements before final delivery.
                </p>
              </div>
            </div>
            <div className="hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
