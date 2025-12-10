import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import FeatureCard from "@/components/ui/FeatureCard";
import { CheckCircle2, Sprout, Layers, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";

// Images
import bananaImg from "@assets/generated_images/fresh_banana_tree.png";
import potatoImg from "@assets/generated_images/healthy_potato_plant_close_up..png";
import coffeeImg from "@assets/generated_images/fresh_coffee_plant.png";

export default function Home() {
  const features = [
    {
      icon: CheckCircle2,
      title: "Premium Quality",
      description: "Disease-free, high-yielding tissue culture plants rigorously tested for genetic purity."
    },
    {
      icon: Users,
      title: "Farmer-Centric",
      description: "Tailored solutions and hands-on support specifically designed for small-scale farmers."
    },
    {
      icon: Layers,
      title: "Wide Variety",
      description: "Specializing in Bananas, Potatoes, Pineapples, and other high-value crops."
    },
    {
      icon: Sprout,
      title: "Expert Support",
      description: "From our lab to your field, we provide agronomic guidance every step of the way."
    }
  ];

  const crops = [
    { name: "Tissue Culture Bananas", image: bananaImg },
    { name: "Certified Potatoes", image: potatoImg },
    { name: "Tissue Culture Coffee", image: coffeeImg },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />

        {/* Intro Section */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <span className="text-secondary font-bold tracking-wider uppercase text-sm">Welcome to Jambo Agri Ltd.</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                Revolutionizing Farming in Kirinyaga
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Established in the heart of Kirinyaga's agricultural hub in May 2025, 
                we are dedicated to empowering local farmers. We specialize in producing 
                superior, disease-free planting materials using state-of-the-art tissue culture technology.
                Based in Mwea, we are your neighbors, and we are committed to your growth.
              </p>
            </div>
          </div>
        </section>

        {/* Key Highlights */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <FeatureCard 
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  className="h-full"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Crop Showcase */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div className="max-w-2xl">
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our High-Yielding Crops</h2>
                <p className="text-muted-foreground text-lg">
                  Scientifically developed for maximum resistance and productivity.
                </p>
              </div>
              <Button variant="ghost" className="text-primary hover:text-primary/80 group">
                View All Products <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {crops.map((crop, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl aspect-square"
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                  <img 
                    src={crop.image} 
                    alt={crop.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white font-serif text-2xl font-bold">{crop.name}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-white relative overflow-hidden isolate">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-white/10 blur-3xl -z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-secondary/30 blur-3xl -z-10 pointer-events-none" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Ready to transform your harvest?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10 leading-relaxed">
              Get in touch with our team to find the perfect planting materials for your farm.
              Success starts with the right seed.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold h-14 px-10 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                Get a Free Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
