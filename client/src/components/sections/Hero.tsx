import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/hero_image_of_a_lush_banana_plantation_with_a_smiling_farmer_in_kenya..png";

export default function Hero() {
  return (
    <div className="relative h-screen md:h-[90vh] min-h-[500px] md:min-h-[600px] w-full overflow-hidden pt-16 md:pt-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Lush banana plantation in Kenya"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 md:px-6 h-full flex flex-col justify-center py-8 md:py-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl space-y-6"
        >
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-secondary mr-2"></span>
            Established in Mwea, growing for Kenya
          </div>
          
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Cultivating Prosperity, <br />
            <span className="text-secondary">One Plant at a Time.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed">
            High-quality tissue culture plants for small, medium and large scale farmers.
            Our focus is on empowering farmers with the tools for success.
            Higher yields, resilient crops, and greater profits.
            Based in Mwea, we are your neighbors, and we are committed to your growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/crops">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg h-14 px-8 rounded-full border border-white/10">
                View Our Crops
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg h-14 px-8 rounded-full backdrop-blur-sm">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
