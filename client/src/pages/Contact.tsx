import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    form.reset();
  }

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-primary py-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
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
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">Get in Touch</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Visit our lab in Mwea or reach out to us directly. Our agronomists are ready to assist you.
                </p>
              </div>

              <div className="grid gap-6">
                <Card className="border-none shadow-md">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg mb-1">Visit Us</h3>
                      <p className="text-muted-foreground">
                        Mwea, Kirinyaga County<br />
                        Kenya
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg mb-1">Call Us</h3>
                      <p className="text-muted-foreground">
                        +254 700 000 000<br />
                        <span className="text-sm">Mon-Fri, 8am - 5pm</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg mb-1">Email Us</h3>
                      <p className="text-muted-foreground">
                        info@jamboagri.co.ke
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-border">
              <h2 className="font-serif text-2xl font-bold text-primary mb-6">Send us a Message</h2>
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
                            <Input placeholder="e.g. Kirinyaga" {...field} />
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

                  <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold h-12">
                    Send Message
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
