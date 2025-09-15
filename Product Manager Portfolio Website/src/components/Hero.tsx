import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowRight, Download, Mail } from 'lucide-react';
import profileImage from 'figma:asset/2fc82f9861b49d9b2cd3498df203f588132915b3.png';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                Product Manager & Business Analyst
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                Hi, I'm <span className="text-primary">Harikrishnan</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Results-driven Product Manager with 10+ years of experience specializing in 
                consumer-facing technology products and financial services, transforming complex 
                business requirements into user-centric solutions.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {['Product Strategy', 'Business Analysis', 'Agile Development', 'AI Product Management', 'Stakeholder Management'].map((skill) => (
                  <Badge key={skill} variant="outline" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('projects')} 
                className="flex items-center gap-2 group"
              >
                View My Work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Resume
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('contact')}
                className="flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-border shadow-2xl bg-muted/50">
                <img 
                  src={profileImage} 
                  alt="Harikrishnan AU - Product Manager" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;