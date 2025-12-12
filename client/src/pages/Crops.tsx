import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

// Reuse images
import bananaImg from "@assets/generated_images/fresh_banana_tree.png";
import bananaImg2 from "@assets/generated_images/banana_seedling.png";
import potatoImg from "@assets/generated_images/healthy_potato_plant_close_up..png";
import pineappleImg from "@assets/generated_images/healthy_pineapple_plant_close_up..png";
import cassavaImg from "@assets/generated_images/cassava_plant.png";
import pyrethrumImg from "@assets/generated_images/healthy_pyrethrum_flowers_close_up..png";
import coffeeImg from "@assets/generated_images/fresh_coffee_plant.png";
import roseflowerImg from "@assets/generated_images/rose_flower.png";
import sweetpotatoImg from "@assets/generated_images/sweet_potato_vines.png";

export default function Crops() {
  const crops = [
    {
      id: "bananas-1",
      name: "Tissue Culture Bananas",
      image: bananaImg,
      description: "Our tissue culture bananas are our flagship product, known for their rapid growth and disease resistance.",
      varieties: ["Grand Nain", "William", "FIA 17", "FHIA 18"],
      benefits: [
        "Free from pests and diseases",
        "Uniform growth and maturity",
        "Higher yield per acre",
        "Early maturity compared to suckers"
      ],
      isDoubleBanana: true
    },
    {
      id: "bananas-2",
      name: "Tissue Culture Bananas",
      image: bananaImg2,
      description: "Our tissue culture bananas are our flagship product, known for their rapid growth and disease resistance.",
      varieties: ["Grand Nain", "William", "FIA 17", "FHIA 18"],
      benefits: [
        "Free from pests and diseases",
        "Uniform growth and maturity",
        "Higher yield per acre",
        "Early maturity compared to suckers"
      ],
      isDoubleBanana: true,
      isSecondBanana: true
    },
    {
      id: "coffee",
      name: "Tissue Culture Coffee",
      image: coffeeImg,
      description: "High-yielding and disease-resistant coffee plantlets ideal for both smallholder and commercial farmers.",
      varieties: ["SL28", "SL34", "Batian"],
      benefits: [
        "Enhanced resistance to Coffee Leaf Rust",
        "Uniform plant size and growth",
        "Higher yield potential",
        "Improved cup quality"
      ]
    },
    {
      id: "potatoes",
      name: "Certified Seed Potatoes",
      image: potatoImg,
      description: "Clean, high-quality seed potatoes developed to resist bacterial wilt and viral infections common in the region.",
      varieties: ["Shangi", "Dutch Robjin", "Unica"],
      benefits: [
        "Virus-free planting material",
        "High vigor and storability",
        "Excellent tuber formation",
        "Adaptable to various soil types"
      ]
    },
    {
      id: "sweetpotatoes",
      name: "Sweet Potato Vines",
      image: sweetpotatoImg,
      description: "Disease-free sweet potato vines that ensure healthy growth and high yields for food security and commercial purposes.",
      varieties: ["SPK 004", "Kemb 10"],
      benefits: [
        "Free from Sweet Potato Virus Disease (SPVD)",
        "High yield potential",
        "Good storage roots quality",
        "Resistant to common pests"
      ] 
    },
    {
      id: "pineapples",
      name: "Elite Pineapples",
      image: pineappleImg,
      description: "Sweet, juicy, and uniform pineapple plantlets perfect for commercial farming.",
      varieties: ["Smooth Cayenne", "MD2"],
      benefits: [
        "Uniform flowering and fruiting",
        "Sweet fruit with good shelf life",
        "Vigorous root system",
        "Reduced crop cycle time"
      ]
    },
    {
      id: "cassava",
      name: "Improved Cassava",
      image: cassavaImg,
      description: "Drought-tolerant and high-yielding cassava varieties, perfect for food security and industrial use.",
      varieties: ["Tajirika", "Kibandameno"],
      benefits: [
        "High resistance to Cassava Mosaic Disease",
        "Early maturity (8-10 months)",
        "High starch content",
        "Excellent cooking quality"
      ]
    },
    {
      id: "pyrethrum",
      name: "Pyrethrum Seedlings",
      image: pyrethrumImg,
      description: "High-pyrethrin content clones for the revival of the pyrethrum industry.",
      varieties: ["P4", "Ks/75/12"],
      benefits: [
        "High flower yield per acre",
        "High pyrethrin content (>1.6%)",
        "Rapid establishment in the field",
        "Continuous flowering"
      ]
    },
    {
      id: "roseflowers",
      name: "Tissue Culture Rose Flowers",
      image: roseflowerImg,
      description: "Vibrant and healthy rose plants ideal for floriculture businesses and ornamental gardening.",
      varieties: ["Red Naomi", "Vendela", "Akito"],
      benefits: [
        "Uniform flower size and color",
        "Long vase life",
        "Disease-free planting material",
        "Fast growth and blooming"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-primary py-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Our Crops</h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Superior planting materials for superior harvests. Explore our range of tissue culture crops.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 py-16 space-y-24">
          {crops.map((crop, index) => {
            // Skip the second banana if we're grouping them side by side
            if (crop.isSecondBanana) return null;

            return (
            <motion.div 
              key={crop.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
            >
              {/* Image */}
              <div className={crop.isDoubleBanana ? "w-full md:w-1/2" : "w-full md:w-1/2"}>
                {crop.isDoubleBanana ? (
                  // Double banana layout (side by side)
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square group">
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                      <img 
                        src={bananaImg2} 
                        alt={crop.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square group">
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                      <img 
                        src={crop.image} 
                        alt={crop.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                ) : (
                  // Single crop layout
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-4/3 group">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                    <img 
                      src={crop.image} 
                      alt={crop.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">{crop.name}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {crop.description}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Available Varieties:</h3>
                    <div className="flex flex-wrap gap-2">
                      {crop.varieties.map(variety => (
                        <span key={variety} className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full border border-primary/30">
                          {variety}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-foreground mb-3">Key Benefits:</h3>
                    <ul className="space-y-2">
                      {crop.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start space-x-2 text-muted-foreground">
                          <Check className="h-5 w-5 text-accent-foreground shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4">
                  <Link href="/contact">
                    <Button className="bg-primary hover:bg-primary/90 text-white px-8 rounded-full">
                      Order {crop.name}
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
        {/* Catalog CTA */}
        <div className="bg-muted/30 py-20 mt-12">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Don't see what you're looking for?</h2>
            <p className="text-muted-foreground mb-8">
              We are constantly expanding our variety. Contact us to inquire about specific crops or custom tissue culture propagation services.
            </p>
            <Link href="/contact">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 h-12 rounded-full font-medium transition-all">
                Contact for Custom Orders
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
