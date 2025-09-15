import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, MapPin, ExternalLink, Award, GraduationCap } from 'lucide-react';
import { Button } from './ui/button';

const Education = () => {
  const certifications = [
    {
      title: 'Certified Scrum Product Owner®',
      issuer: 'Scrum Alliance, Inc.',
      badgeId: '1627657',
      issueDate: 'July 31, 2022',
      expirationDate: 'May 19, 2027',
      credentialUrl: 'https://certification.scrumalliance.org/accounts/1396305-harikrishnan-au/certifications/1627657-cspo',
      type: 'Professional Certification',
      status: 'Active',
      description: 'Professional certification demonstrating expertise in product ownership, agile methodologies, and stakeholder management within Scrum frameworks.'
    }
  ];

  const degrees = [
    {
      degree: 'Bachelor of Technology',
      field: 'Information Technology',
      institution: 'University of Kerala',
      location: 'Thiruvananthapuram, India',
      duration: 'July 2009 - May 2013',
      type: 'Undergraduate Degree',
      description: 'Comprehensive study of information technology concepts, software development, database management, and computer systems with focus on practical applications.'
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl tracking-tight">Education & Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and professional development through formal education and industry certifications, 
            building the foundation for product management excellence.
          </p>
        </div>

        {/* Professional Certifications */}
        <div className="space-y-8 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-2xl tracking-tight">Professional Certifications</h3>
            </div>
            
            <div className="grid gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="bg-muted/30 border-b">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="space-y-2">
                        <CardTitle className="text-xl">{cert.title}</CardTitle>
                        <p className="text-muted-foreground">{cert.issuer}</p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-2">
                        <Badge variant="default" className="w-fit">
                          {cert.status}
                        </Badge>
                        <Badge variant="outline" className="w-fit">
                          {cert.type}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6 space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <h4 className="font-medium">Credential Details</h4>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <p><span className="font-medium">Badge ID:</span> {cert.badgeId}</p>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>Issued: {cert.issueDate}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>Expires: {cert.expirationDate}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <h4 className="font-medium">Core Competencies</h4>
                          <div className="flex flex-wrap gap-2">
                            {['Product Ownership', 'Scrum Framework', 'Stakeholder Management', 'Agile Methodologies', 'Product Roadmapping'].map((skill, skillIndex) => (
                              <Badge key={skillIndex} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex items-center gap-2 w-fit"
                          onClick={() => window.open(cert.credentialUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Verify Credential
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Academic Education */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-2xl tracking-tight">Academic Education</h3>
            </div>
            
            <div className="grid gap-6">
              {degrees.map((degree, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="bg-muted/30 border-b">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="space-y-2">
                        <CardTitle className="text-xl">{degree.degree}</CardTitle>
                        <p className="text-lg text-muted-foreground">{degree.field}</p>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <span>{degree.institution}</span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:items-end gap-2">
                        <Badge variant="outline" className="w-fit">
                          {degree.type}
                        </Badge>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {degree.duration}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6 space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {degree.description}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{degree.location}</span>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium">Key Areas of Study</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Software Engineering', 'Database Management', 'Computer Networks', 'Web Technologies', 'Data Structures', 'System Analysis'].map((subject, subjectIndex) => (
                          <Badge key={subjectIndex} variant="secondary" className="text-xs">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Education Summary */}
        <div className="mt-16 text-center">
          <Card className="bg-muted/30 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-xl mb-4">Continuous Learning Philosophy</h3>
              <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                My educational journey combines formal computer science foundation with specialized product management certifications. 
                This blend of technical knowledge and product expertise enables me to bridge the gap between business requirements 
                and technical implementation effectively.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;