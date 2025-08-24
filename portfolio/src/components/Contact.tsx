import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Mail, Linkedin, Twitter, Github, MapPin, Calendar, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'harikrishnan@example.com',
      action: 'mailto:harikrishnan@example.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/in/harikrishnan-au',
      action: 'https://linkedin.com/in/harikrishnan-au'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      value: '@harikrishnan_au',
      action: 'https://twitter.com/harikrishnan_au'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '/harikrishnan-au',
      action: 'https://github.com/harikrishnan-au'
    }
  ];

  const availability = {
    status: 'Open to Opportunities',
    location: 'San Francisco, CA / Remote',
    roles: ['Senior PM', 'Head of Product', 'Product Consultant']
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl tracking-tight">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm always interested in discussing new opportunities, product challenges, 
            or simply connecting with fellow product enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info & Availability */}
          <div className="lg:col-span-1 space-y-6">
            {/* Availability Status */}
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Calendar className="w-5 h-5 text-primary" />
                  Current Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                    {availability.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {availability.location}
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Interested in:</p>
                  <div className="flex flex-wrap gap-2">
                    {availability.roles.map((role, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {role}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.action}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium text-sm">{contact.label}</p>
                        <p className="text-xs text-muted-foreground">{contact.value}</p>
                      </div>
                    </a>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Send Me a Message</CardTitle>
                <p className="text-muted-foreground">
                  Whether you have a product opportunity, want to collaborate, or just want to say hello, 
                  I'd love to hear from you.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name *
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        required
                        className="bg-input-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        className="bg-input-background"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company
                    </label>
                    <Input
                      id="company"
                      placeholder="Your company (optional)"
                      className="bg-input-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      required
                      className="bg-input-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me more about your project, opportunity, or question..."
                      rows={6}
                      required
                      className="bg-input-background resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full group">
                    Send Message
                    <Send className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    I typically respond within 24 hours. Looking forward to connecting!
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;