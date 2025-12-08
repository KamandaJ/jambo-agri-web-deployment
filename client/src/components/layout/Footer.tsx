import { Leaf, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                <Leaf className="h-5 w-5" />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight">
                Jambo Agri Ltd.
              </span>
            </div>
            <p className="text-primary-foreground/80 max-w-xs leading-relaxed">
              Empowering small-scale farmers in Kirinyaga and beyond with superior tissue culture planting materials.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-primary-foreground/80 hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="text-primary-foreground/80 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Our Crops</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-primary-foreground/80">
                <MapPin className="h-5 w-5 mt-0.5 shrink-0" />
                <span>Mwea, Kirinyaga County,<br />Kenya</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <Phone className="h-5 w-5 shrink-0" />
                <span>+254 700 000 000</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <Mail className="h-5 w-5 shrink-0" />
                <span>info@jamboagri.co.ke</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Jambo Agri Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
