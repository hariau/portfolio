import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Users, Target, Lightbulb, TrendingUp } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Users,
      title: 'User-Centric',
      description: 'I believe great products start with deep empathy for users and their pain points.'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Every decision is backed by data and measured against clear business objectives.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description: 'I thrive on identifying opportunities for breakthrough solutions and improvements.'
    },
    {
      icon: TrendingUp,
      title: 'Growth Mindset',
      description: 'Continuous learning and adaptation are key to staying ahead in the product world.'
    }
  ];

  const skills = [
    'Product Strategy & Roadmapping',
    'User Research & Analytics',
    'Agile & Scrum Methodologies',
    'Data Analysis & KPI Tracking',
    'Stakeholder Management',
    'AI Product Management',
    'Wireframing & Prototyping',
    'Go-to-Market Strategy',
    'Cross-functional Leadership',
    'Market Research & Competitive Analysis'
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl tracking-tight">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            As a seasoned product manager and business analyst with 10+ years of experience, I specialize in 
            transforming complex business challenges in financial services and technology into intuitive 
            digital solutions that users love.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Story */}
          <div className="space-y-6">
            <h3 className="text-2xl">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                My product management journey began in the financial services sector at Envestnet, where I 
                discovered my passion for bridging the gap between complex business requirements and 
                user-friendly solutions. Starting as a Business Analyst, I've progressively grown into 
                leadership roles, always maintaining focus on user-centric product development.
              </p>
              <p>
                Over the years, I've specialized in wealth management platforms, investment banking systems, 
                and consumer-facing technology products. My experience spans from documenting business processes 
                to leading product strategy, always with an emphasis on stakeholder collaboration and 
                cross-functional team leadership.
              </p>
              <p>
                What drives me is the opportunity to translate complex financial and technical concepts into 
                products that not only meet business objectives but also provide genuine value to end users. 
                I thrive in agile environments where continuous learning and adaptation are key to success.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="space-y-6">
            <h3 className="text-2xl">Core Values</h3>
            <div className="grid grid-cols-1 gap-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="border-0 shadow-sm">
                    <CardContent className="p-4 flex gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-medium">{value.title}</h4>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-6">
          <h3 className="text-2xl text-center">Skills & Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-sm px-3 py-2">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;