
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { WHATSAPP_NUMBER } from "@/data/site";
import { 
  PlayCircle, 
  Tv, 
  Calculator, 
  Handshake, 
  Star, 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  ChevronRight,
  Award,
  Users,
  Target,
  TrendingUp
} from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Submitted!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      budget: "",
      message: ""
    });
  };

  const services = [
    {
      icon: PlayCircle,
      title: "Film & Music Promotions",
      description: "Strategic campaigns for trailers, music albums, and digital content"
    },
    {
      icon: Tv,
      title: "Prime-Time TV Ads",
      description: "Premium slots on leading channels with guaranteed visibility"
    },
    {
      icon: Calculator,
      title: "Financial Consulting",
      description: "Expert financial management for entertainment businesses"
    },
    {
      icon: Handshake,
      title: "Channel Partnerships",
      description: "Direct partnerships with T-Series, Sony, Viacom18 and more"
    }
  ];

  const channels = [
    { name: "T-Series", services: ["Music Video Promotions", "Digital Content Strategy", "Artist Collaborations"] },
    { name: "Sony Entertainment", services: ["TV Commercial Slots", "Show Sponsorships", "Brand Integrations"] },
    { name: "Viacom18", services: ["Youth-Focused Campaigns", "Sports Marketing", "Entertainment Partnerships"] },
    { name: "Zee Network", services: ["Regional Content", "Family Entertainment", "News Partnerships"] },
    { name: "Colors TV", services: ["Reality Show Integrations", "Drama Series Sponsorships", "Award Show Partnerships"] }
  ];

  const stats = [
    { icon: Award, value: "200+", label: "Successful Campaigns" },
    { icon: Users, value: "50+", label: "Happy Clients" },
    { icon: Target, value: "98%", label: "Client Satisfaction" },
    { icon: TrendingUp, value: "20+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-primary">Daufin Advertising</h1>
            <p className="text-sm text-gray-600">Strategic Media Impact</p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="hidden md:flex">
              <Phone className="w-4 h-4 mr-2" />
              Call Us
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              Get Quote
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Where Media Expertise Meets 
              <span className="text-primary"> Financial Intelligence</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Strategic media promotions and expert financial consulting for entertainment businesses. 
              Direct partnerships with India's leading channels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3">
                Launch Your Campaign
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Chat
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">About Daufin Advertising</h3>
            <p className="text-lg text-gray-600 mb-8">
              Based in Mumbai, we're not just another advertising agency. We bridge the gap between 
              creative media strategies and smart financial management, helping entertainment businesses 
              grow both their visibility and profitability.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="p-6">
                <CardContent className="text-left">
                  <h4 className="text-xl font-semibold mb-4">Our Mission</h4>
                  <p className="text-gray-600">
                    To revolutionize how entertainment businesses approach media promotions by 
                    combining strategic advertising with financial intelligence.
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardContent className="text-left">
                  <h4 className="text-xl font-semibold mb-4">Our Vision</h4>
                  <p className="text-gray-600">
                    To become India's most trusted partner for media companies seeking both 
                    creative excellence and financial optimization.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions that combine media expertise with financial intelligence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="text-center">
                  <service.icon className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Leadership</h3>
            <p className="text-lg text-gray-600">Meet the vision behind Daufin Advertising</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <CardContent className="text-center">
                <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">DJ</span>
                </div>
                <h4 className="text-2xl font-bold mb-2">Dhiraj Jadhav</h4>
                <Badge variant="secondary" className="mb-4">Co-founder & Finance Head</Badge>
                <p className="text-gray-600 mb-4">
                  With over two decades of financial management experience in the media sector, 
                  Dhiraj brings unparalleled expertise in combining strategic media investments 
                  with sound financial planning.
                </p>
                <div className="flex justify-center gap-4">
                  <Badge variant="outline">Financial Strategy</Badge>
                  <Badge variant="outline">Media Planning</Badge>
                  <Badge variant="outline">Business Development</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Channel Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Channel Partners</h3>
            <p className="text-lg text-gray-600">Direct partnerships with India's leading media channels</p>
          </div>
          <Accordion type="single" collapsible className="max-w-4xl mx-auto">
            {channels.map((channel, index) => (
              <AccordionItem key={index} value={`channel-${index}`}>
                <AccordionTrigger className="text-xl font-semibold hover:text-primary">
                  {channel.name}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid md:grid-cols-3 gap-4 pt-4">
                    {channel.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="p-4 bg-white rounded-lg border">
                        <Star className="w-5 h-5 text-accent mb-2" />
                        <p className="font-medium">{service}</p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Quote Request Section */}
      <section id="quote" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-gray-900 mb-6">Request a Quote</h3>
              <p className="text-lg text-gray-600">
                Ready to launch your next campaign? Get a customized quote for your project.
              </p>
            </div>
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <Input 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <Input 
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Service Required</label>
                  <Input 
                    placeholder="e.g., TV Ad Campaign, Financial Consulting"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Budget Range</label>
                  <Input 
                    placeholder="e.g., ₹5-10 Lakhs"
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Project Details</label>
                  <Textarea 
                    rows={4}
                    placeholder="Tell us about your project, goals, and timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-3">
                  Submit Quote Request
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
            <p className="text-lg text-gray-600">Common queries answered</p>
          </div>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="faq-1">
              <AccordionTrigger>What makes Daufin Advertising different from other agencies?</AccordionTrigger>
              <AccordionContent>
                We uniquely combine media expertise with financial intelligence. Unlike traditional agencies that only focus on advertising, we also provide financial consulting to help you optimize your media investments and overall business profitability.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-2">
              <AccordionTrigger>Do you work with small production houses or only big studios?</AccordionTrigger>
              <AccordionContent>
                We work with clients of all sizes - from independent filmmakers and small production houses to major studios and music labels. Our services are tailored to match your budget and requirements.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-3">
              <AccordionTrigger>How do your channel partnerships benefit my campaign?</AccordionTrigger>
              <AccordionContent>
                Our direct partnerships with channels like T-Series, Sony, and Viacom18 mean better rates, priority scheduling, and access to premium slots that aren't available through third-party brokers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-4">
              <AccordionTrigger>What's included in your financial consulting services?</AccordionTrigger>
              <AccordionContent>
                Our financial consulting includes budget planning, GST compliance, tax optimization, audit support, vendor negotiations, and comprehensive financial strategy for your media investments.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h3>
            <p className="text-lg text-gray-600">Ready to start your next campaign? Get in touch with us.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 text-center">
              <CardContent>
                <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Phone</h4>
                <p className="text-gray-600">+91 98765 43210</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent>
                <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-gray-600">info@daufinadvertising.com</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent>
                <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Location</h4>
                <p className="text-gray-600">Mumbai, Maharashtra</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h4 className="text-2xl font-bold mb-4">Daufin Advertising</h4>
            <p className="text-gray-400 mb-6">Strategic Media Impact</p>
            <p className="text-gray-500">© 2024 Daufin Advertising. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          size="lg" 
          className="bg-green-500 hover:bg-green-600 rounded-full p-4 shadow-lg"
          onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
