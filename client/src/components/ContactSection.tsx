import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(6, { message: "Please enter a valid phone number" }),
  service: z.string().min(1, { message: "Please select a service" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      await apiRequest('POST', '/api/contact', data);
      toast({
        title: "Message Sent",
        description: "We'll get back to you as soon as possible!",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
      console.error("Contact form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">Contact Us</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Ready to transform your restoration project? Get in touch with us for a 
              consultation or to learn more about our services.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-secondary">Phone</h3>
                  <p className="text-lg text-muted-foreground">07984 287192</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-secondary">Email</h3>
                  <p className="text-lg text-muted-foreground">info@northeastlaserrestoration.co.uk</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-secondary">Location</h3>
                  <p className="text-lg text-muted-foreground">Northeast England</p>
                  <p className="text-muted-foreground">Serving clients throughout the UK</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-40 transition">
                <Facebook className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-40 transition">
                <Twitter className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-40 transition">
                <Linkedin className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-40 transition">
                <Instagram className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>
          
          <div className="bg-card rounded-lg shadow-lg shadow-primary/10 p-8 text-foreground">
            <h3 className="text-2xl font-bold mb-6 text-secondary">Request a Consultation</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold text-muted-foreground">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold text-muted-foreground">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-muted-foreground">Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="Your phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-muted-foreground">Service Interest</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="industrial">Industrial Laser Cleaning</SelectItem>
                          <SelectItem value="automotive">Automotive Restoration</SelectItem>
                          <SelectItem value="historical">Historical Restoration</SelectItem>
                          <SelectItem value="art">Art Restoration</SelectItem>
                          <SelectItem value="construction">Construction & Renovation</SelectItem>
                          <SelectItem value="consultation">Consultation Only</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-muted-foreground">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your project" 
                          className="resize-none h-32"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded-lg transition"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit Request"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
