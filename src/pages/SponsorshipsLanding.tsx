
import React from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Dumbbell, Music, Heart, Palette } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

interface SponsorshipOptionProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageSrc: string;
  alt: string;
  reverse?: boolean;
}

const SponsorshipOption = ({ number, title, description, icon, imageSrc, alt, reverse = false }: SponsorshipOptionProps) => (
  <div className={`grid md:grid-cols-2 gap-8 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
    <div className={`order-2 ${reverse ? 'md:order-1' : 'md:order-2'}`}>
      <div className="relative rounded-xl overflow-hidden shadow-xl">
        <img src={imageSrc} alt={alt} className="w-full h-auto" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-6">
            <div className="flex items-center gap-3 text-white">
              {icon}
              <h3 className="text-2xl font-bold">{title}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={`order-1 ${reverse ? 'md:order-2' : 'md:order-1'}`}>
      <div className="flex gap-4 items-start">
        <div className="bg-colink-teal text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
          {number}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-colink-navy mb-4">{title}</h3>
          <p className="text-gray-600">{description}</p>
          {/* <Button className="mt-6" variant="outline" asChild>
            <Link to="/auth">Learn More</Link>
          </Button> */}
        </div>
      </div>
    </div>
  </div>
);

const SponsorshipsLanding = () => {
  const { user } = useAuth();
  
  const sponsorshipOptions = [
    {
      number: "i",
      title: "Sports Sponsorships",
      description: "Engage with teams, events, and athletes to enhance brand visibility, drive community engagement, and create memorable experiences for sports enthusiasts.",
      icon: <Dumbbell className="h-6 w-6" />,
      imageSrc: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      alt: "Sports event with crowd",
    },
    {
      number: "ii",
      title: "Entertainment Sponsorships",
      description: "Partner with concerts, music festivals, and entertainment events to elevate your brand presence and connect with diverse audiences in vibrant settings.",
      icon: <Music className="h-6 w-6" />,
      imageSrc: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      alt: "Music festival with crowd",
      reverse: true,
    },
    {
      number: "iii",
      title: "Art and Culture Sponsorships",
      description: "Invest in local art initiatives, cultural festivals, and exhibitions to celebrate creativity, foster community engagement, and enhance your brand's connection to the arts.",
      icon: <Palette className="h-6 w-6" />,
      imageSrc: "/images/colink.jpg",
      alt: "Art gallery exhibition",
    },
    {
      number: "iv",
      title: "Non-Profit Sponsorships",
      description: "Collaborate with non-profit organizations to support social causes, promote community welfare, and build lasting partnerships that align with your brand's mission.",
      icon: <Heart className="h-6 w-6" />,
      imageSrc: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      alt: "Charity fundraising event",
      reverse: true,
    },
    {
      number: "v",
      title: "Charitable Sponsorships",
      description: "Support charitable initiatives and community projects by providing funding, resources, or services, showcasing your commitment to making a positive impact.",
      icon: <Heart className="h-6 w-6" />,
      imageSrc: "/images/cha.jpg",
      alt: "Charitable initiatives",
    },
    {
      number: "vi",
      title: "Corporate Sponsorships",
      description: "Join trade shows, conferences, and B2B events to strengthen your brand recognition, establish industry authority, and foster valuable business relationships.",
      icon: <Dumbbell className="h-6 w-6" />,
      imageSrc: "/images/copo.jpg",
      alt: "Corporate event",
      reverse: true,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-gray-50 pt-16 pb-20">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-colink-navy mb-6">
                {/* Discover <span className="text-colink-teal">Sponsorships</span> */}
                Welcome to the <span className="text-colink-teal">Sponsorships </span>section of Colink Venture!
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {/* Through our platform, individuals and organizations can form mutually beneficial partnerships, leveraging each other's strengths and resources to drive meaningful change. */}
                At CoLink Venture, we understand the power of sponsorship in creating meaningful connections between brands and their target audience. We specialize in helping businesses and organizations find the perfect sponsorship opportunities that align with their goals, values, and target market. Whether you are looking to sponsor a sports event, a music festival, a charitable cause, or any other type of sponsorship, we have you covered.
              </p>
              {!user && (
                <Button className="btn-primary text-base py-6 px-8" asChild>
                  <Link to="/auth">Get Started</Link>
                </Button>
              )}
            </div>
          </div>
        </section>

        {/* Sponsorships Overview */}
        <section className="bg-white py-16">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-colink-navy mb-4">SPONSORSHIPS</h2>
              <p className="text-xl text-colink-teal mb-6">Dedicating everything to Brand Sponsorships</p>
              <p className="text-xl text-gray-600">
                At CoLink Venture, we recongize how vital sponsorship is for sports, entertainment m adn noprofit organizations. By patnering with individuals, businesses, and corporations, these organizations can improve their events and make a positive impact in their communities.
              </p>
            </div>
            
            <div className="space-y-24">
              {sponsorshipOptions.map((option, index) => (
                <SponsorshipOption 
                  key={index}
                  number={option.number}
                  title={option.title}
                  description={option.description}
                  icon={option.icon}
                  imageSrc={option.imageSrc}
                  alt={option.alt}
                  reverse={option.reverse}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gradient-to-r from-colink-blue to-colink-purple py-16">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Find Sponsorship Opportunities?
              </h2>
              <p className="text-xl mb-8">
                Join CoLink Venture today and start connecting with potential sponsors and sponsorship opportunities.
              </p>
              {!user ? (
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button className="bg-white text-colink-blue hover:bg-gray-100 py-6 px-8 text-base" asChild>
                    <Link to="/auth?action=signup">Sign Up Now</Link>
                  </Button>
                  <Button className="bg-transparent border border-white text-white hover:bg-white/10 py-6 px-8 text-base" asChild>
                    <Link to="/auth">Login</Link>
                  </Button>
                </div>
              ) : (
                <Button className="bg-white text-colink-blue hover:bg-gray-100 py-6 px-8 text-base" asChild>
                  <Link to="/sponsorships">Go To Dashboard</Link>
                </Button>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SponsorshipsLanding;
