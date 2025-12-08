import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { MapPin, Target, Lightbulb, Sprout } from "lucide-react";
import labImage from "@assets/generated_images/close_up_of_tissue_culture_plants_in_a_lab_for_the_about_us_page..png";

export default function About() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-primary pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
             <img src={labImage} className="w-full h-full object-cover grayscale mix-blend-overlay" />
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">About Us</h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl">
                Rooted in Mwea, Growing for Kenya. We are building a food-secure future through biotechnology.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Mission & Vision */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
              <div className="space-y-6">
                <div className="h-12 w-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-4">
                  <Target className="h-6 w-6" />
                </div>
                <h2 className="font-serif text-3xl font-bold text-primary">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower small-scale farmers in Kirinyaga County and beyond by providing access to affordable, 
                  high-quality tissue culture plants, driving agricultural productivity and sustainable livelihoods.
                </p>
              </div>

              <div className="space-y-6">
                <div className="h-12 w-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-4">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <h2 className="font-serif text-3xl font-bold text-primary">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the leading provider of trusted planting solutions in Kenya, known for our quality, 
                  integrity, and unwavering commitment to farmer success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Journey */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2">
                <img 
                  src={labImage} 
                  alt="Jambo Agri Lab" 
                  className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]" 
                />
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="font-serif text-4xl font-bold text-foreground">Our Journey</h2>
                <div className="w-20 h-1 bg-secondary rounded-full" />
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Jambo Agri Ltd. was established in May 2025 with a clear goal: to address the challenges faced by local farmers. 
                  We saw the struggle with low-yielding, disease-prone planting materials and knew there was a better way.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  By harnessing tissue culture technology, we provide a solid foundation for a more prosperous and food-secure community. 
                  We are not just a business; we are a solution born from the soil of Kirinyaga.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Why Choose Jambo Agri?</h2>
              <p className="text-muted-foreground text-lg">
                We combine scientific precision with local understanding to deliver results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: MapPin,
                  title: "Local Presence",
                  text: "We are based in Mwea, Kirinyaga County. We understand your soil, your climate, and your challenges."
                },
                {
                  icon: Sprout,
                  title: "Uncompromising Quality",
                  text: "Our tissue culture process ensures every plant is genetically uniform, free from pests and diseases, and has a vigorous growth potential."
                },
                {
                  icon: Lightbulb,
                  title: "Farmer Education",
                  text: "We believe in knowledge transfer. We offer guidance on best agronomic practices to ensure you get the most from our plants."
                }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors shadow-sm hover:shadow-md">
                  <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
