import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, PhoneCall } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { useState, useEffect, useRef } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  location: z.string().min(2, "Please enter your location"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      location: "",
      message: "",
    },
  });

  // Initialize EmailJS once when component mounts
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    
    if (!publicKey) {
      console.error("EmailJS public key not found in environment variables");
      toast({
        title: "Configuration Error",
        description: "Email service is not properly configured. Please contact support.",
        variant: "destructive",
      });
      return;
    }

    try {
      emailjs.init(publicKey);
      setIsInitialized(true);
    } catch (error) {
      console.error("Failed to initialize EmailJS:", error);
      toast({
        title: "Service Error",
        description: "Failed to initialize email service.",
        variant: "destructive",
      });
    }
  }, [toast]);

  // Prefill and scroll to form when contact link includes query params or hash
  const formRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const phone = params.get("phone");
      const email = params.get("email");
      const message = params.get("message");

      if (phone) {
        form.setValue("phone", phone);
      }
      if (email) {
        form.setValue("email", email);
      }
      if (message) {
        form.setValue("message", message);
      }

      // If anchor present or params exist, scroll to form
      if (window.location.hash === "#contact-form" || phone || email || message) {
        setTimeout(() => {
          if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
            // If message provided, focus the textarea, otherwise focus first input
            const focusEl = message
              ? (formRef.current.querySelector("textarea") as HTMLElement | null)
              : (formRef.current.querySelector("input, textarea") as HTMLElement | null);
            if (focusEl) focusEl.focus();
          }
        }, 150);

        // Remove query params from URL to avoid repeated actions
        const url = new URL(window.location.href);
        url.search = "";
        window.history.replaceState({}, "", url.toString());
      }
    } catch (err) {
      // ignore
    }
  }, [form]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Validate configuration
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const recipientEmail = import.meta.env.VITE_RECIPIENT_EMAIL || "holdingsjambo@gmail.com";

    if (!serviceId || !templateId) {
      toast({
        title: "Configuration Error",
        description: "Email service is not properly configured.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      phone: values.phone,
      location: values.location,
      message: values.message,
      to_email: recipientEmail,
    };

    emailjs
      .send(serviceId, templateId, templateParams)
      .then(() => {
        toast({
          title: "Message Sent Successfully!",
          description: "We have received your inquiry and will contact you soon.",
          variant: "default",
        });
        form.reset();
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        toast({
          title: "Failed to send message",
          description: "Please try again later or contact us directly via phone.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* Header */}
        <div className="bg-primary py-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Have questions about our tissue culture plants? Ready to place an order?
              We're here to help you grow.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  Ready to transform your harvest?
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Get in touch with our team to find out the perfect methods and materials 
                  for best farming practices, and marketing of their products accordingly.
                </p>
              </div>

              <div className="grid gap-6">
                <Card className="border-none shadow-md">
                  <CardContent className="p-6 flex flex-col sm:flex-row sm:items-start sm:space-x-4 space-y-3 sm:space-y-0">
                    <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg mb-1">Visit Us</h3>
                      <p className="text-muted-foreground">
                        Mwea
                        <br />
                        Kenya
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardContent className="p-6 flex flex-col sm:flex-row sm:items-start sm:space-x-4 space-y-3 sm:space-y-0">
                    <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div className="w-full">
                      <h3 className="font-bold text-foreground text-lg mb-2">Call Us</h3>
                      <a 
                        href="tel:+254722779075"
                        className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors mb-2"
                      >
                        <span>+254 722 779 075</span>
                        <PhoneCall className="h-4 w-4" />
                      </a>
                      <a 
                        href="tel:+254725104838"
                        className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <span>+254 725 104 838</span>
                        <PhoneCall className="h-4 w-4" />
                      </a>
                      <p className="text-sm text-muted-foreground mt-2">Mon-Fri, 8am - 5pm</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardContent className="p-6 flex flex-col sm:flex-row sm:items-start sm:space-x-4 space-y-3 sm:space-y-0">
                    <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                      <Mail className="h-6 w-6" />
                    </div>
                        <div>
                          <h3 className="font-bold text-foreground text-lg mb-1">Email Us</h3>
                          <a href="#contact-form" className="text-muted-foreground hover:text-primary">info@jamboagri.com</a>
                        </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div ref={formRef} id="contact-form" className="bg-white p-8 rounded-2xl shadow-lg border border-border">
              <h2 className="font-serif text-2xl font-bold text-primary mb-6">
                Send us a Message
              </h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="0700 000 000" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Location/County</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. Nairobi" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>How can we help?</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="I am interested in ordering tissue culture bananas..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting || !isInitialized}
                    className="w-full bg-secondary hover:bg-secondary/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold h-12"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}