import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, Building2, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Product Owner',
      company: 'DLTL',
      period: 'October 2021 – Present',
      location: 'Thiruvananthapuram, India',
      type: 'Full-time',
      description: 'Leading product strategy and roadmap ownership for consumer-facing technology products in a fast-paced scale-up environment. Driving end-to-end product lifecycle management with focus on user-centric solutions and business alignment.',
      achievements: [
        'Defined and evolved product vision in alignment with business goals and customer needs',
        'Led strategic market research and competitive benchmarking to refine product positioning',
        'Drove product development from ideation to release with seamless client system integration',
        'Collaborated with marketing, sales, and customer success teams to craft GTM strategies',
        'Engaged directly with enterprise clients to gather insights and deliver customized solutions',
        'Facilitated cross-functional alignment with developers, QA engineers, and UX/UI designers',
        'Monitored product KPIs, usage patterns, and customer feedback for continuous improvements'
      ],
      technologies: ['Agile/Scrum', 'Product Roadmapping', 'Market Research', 'GTM Strategy', 'Stakeholder Management']
    },
    {
      title: 'Lead Business Analyst',
      company: 'Envestnet',
      period: 'April 2021 – October 2021',
      location: 'Thiruvananthapuram, India',
      type: 'Full-time',
      description: 'Led business analysis initiatives for wealth management and investment banking platforms, working extensively with Product Managers and external clients to enhance system capabilities and user satisfaction.',
      achievements: [
        'Conducted comprehensive gap analysis and identified new requirements for enhanced capabilities',
        'Created detailed Functional Specification Documents (FSDs) and Business Requirements Documents (BRDs)',
        'Collaborated with system analysts, developers, designers, and end users for functional fulfillment',
        'Managed implementation of enhanced functionalities with functional validation',
        'Analyzed client queries related to platform features and provided effective resolutions',
        'Developed user manuals and provided training to internal and external users'
      ],
      technologies: ['Requirements Analysis', 'FSD/BRD Documentation', 'Wealth Management Systems', 'Client Support', 'Training & QA']
    },
    {
      title: 'Associate Lead Business Analyst',
      company: 'Envestnet',
      period: 'May 2019 – March 2021',
      location: 'Thiruvananthapuram, India',
      type: 'Full-time',
      description: 'Advanced to associate leadership role, focusing on efficient task execution and skill development. Led incident investigation and quality improvement initiatives while facilitating technical solution decisions.',
      achievements: [
        'Quickly learned new skills and applied them to daily tasks, improving efficiency and productivity',
        'Investigated issues reported by clients for improving quality of incident reporting',
        'Identified and documented business problems and new opportunities for clients',
        'Facilitated brainstorming sessions with teams to influence solution decisions',
        'Liaised between business and technical personnel ensuring mutual understanding of deliverables'
      ],
      technologies: ['Issue Investigation', 'Business Process Documentation', 'Team Facilitation', 'Technical Liaison', 'Quality Improvement']
    },
    {
      title: 'Senior Business Analyst',
      company: 'Envestnet',
      period: 'June 2017 – April 2019',
      location: 'Thiruvananthapuram, India',
      type: 'Full-time',
      description: 'Elevated to senior role with expanded responsibilities in business process improvement, requirements management, and team mentorship. Managed sprint backlogs and ensured proper problem management protocols.',
      achievements: [
        'Documented business functions and processes for improving overall organizational workflow',
        'Defined procedures on how requirements would be managed across projects',
        'Maintained sprint backlog for development team ensuring proper prioritization',
        'Reported, monitored, and prioritized client problems and issues within SLA',
        'Implemented proper problem management through ticketing systems for better incident tracking',
        'Mentored and managed junior resources of the team'
      ],
      technologies: ['Process Documentation', 'Requirements Management', 'Sprint Planning', 'SLA Management', 'Team Mentorship', 'Ticketing Systems']
    },
    {
      title: 'Business Analyst',
      company: 'Envestnet',
      period: 'September 2014 – May 2017',
      location: 'Thiruvananthapuram, India',
      type: 'Full-time',
      description: 'Foundation role where I developed core business analysis skills, established stakeholder relationships, and began specializing in data analysis and business process improvement in the financial services sector.',
      achievements: [
        'Established favorable business relationships with stakeholders and supported mutually beneficial interests',
        'Applied problem-solving skills to analyze and resolve issues impacting business operations',
        'Analyzed key business aspects to evaluate factors driving results and created executive presentations',
        'Improved business direction by prioritizing customers and implementing feedback-based changes',
        'Analyzed new and existing data to understand, interpret and communicate actionable results'
      ],
      technologies: ['Stakeholder Management', 'Data Analysis', 'Business Process Analysis', 'Presentation Development', 'Customer Feedback Systems']
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl tracking-tight">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Over 10 years of experience specializing in consumer-facing technology products and financial services, 
            with expertise in translating complex business requirements into user-centric solutions.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="bg-muted/30">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <Badge variant="outline">{exp.type}</Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6 space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-4">
                  <h4 className="font-medium">Key Responsibilities & Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <ChevronRight className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Core Skills & Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Career Summary */}
        <div className="mt-16 text-center">
          <Card className="bg-muted/30 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-xl mb-4">Career Progression</h3>
              <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                My journey from Business Analyst to Product Owner reflects a consistent focus on 
                user-centric product development and cross-functional leadership. I excel at translating 
                complex business requirements into actionable product roadmaps while maintaining strong 
                technical understanding for effective team collaboration in agile environments.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;