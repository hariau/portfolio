import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, ArrowRight, Users, TrendingUp, Clock, Target, CheckCircle, FileText } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Commercial Vehicle Export Document Collaboration',
      category: 'B2B SaaS • Logistics',
      context: 'OEMs exporting commercial vehicles faced delays due to fragmented document sharing between internal teams, logistics providers, customs brokers, and port authorities.',
      role: [
        'Defined the MVP to centralize export-related documents (Invoice, Bill of Lading, Certificate of Origin, Customs Declarations) in a secure shared workspace',
        'Ran workshops with logistics, compliance, and customs stakeholders',
        'Scoped integrations with customs brokers for duty payment and clearance updates'
      ],
      process: {
        discovery: 'Identified pain points in document exchange (email chains, physical copies, inconsistent data)',
        definition: 'Built use cases for each stakeholder: manufacturer, logistics provider, customs broker',
        delivery: 'MVP included document upload, version control, and real-time access logs'
      },
      outcomes: [
        { icon: Clock, label: 'Clearance Time Reduction', value: '40%' },
        { icon: CheckCircle, label: 'Error Reduction', value: 'Significant' },
        { icon: Users, label: 'Stakeholder Trust', value: 'Improved' }
      ],
      impact: [
        'Cut export clearance times by 40%',
        'Reduced document errors and duplication across stakeholders',
        'Improved trust and transparency among global trade partners'
      ],
      technologies: ['Document Management', 'Workflow Automation', 'Integration APIs', 'Access Control'],
      status: 'Live Product'
    },
    {
      title: 'Intercompany Contract Management',
      category: 'Enterprise • Compliance',
      context: 'A multinational corporation needed a structured way to manage intercompany contracts across subsidiaries, especially for transfer pricing and compliance with local laws.',
      role: [
        'Scoped MVP for digitized contract repository and approval workflows',
        'Defined role-based access for legal, finance, and subsidiary managers',
        'Ensured alignment with auditors and compliance officers'
      ],
      process: {
        discovery: 'Conducted interviews with finance/legal teams in India, EU, and US subsidiaries',
        definition: 'Epics for contract drafting, approval, renewal, and compliance tracking',
        delivery: 'Configured phased rollout: MVP (repository + approval workflow) → Advanced features (auto-renewal alerts, compliance dashboards)'
      },
      outcomes: [
        { icon: TrendingUp, label: 'Approval Speed', value: '50%' },
        { icon: FileText, label: 'Audit Readiness', value: 'Enhanced' },
        { icon: Target, label: 'Compliance Risk', value: 'Minimized' }
      ],
      impact: [
        'Reduced contract approval cycle time by 50%',
        'Increased audit readiness with centralized, version-controlled repository',
        'Minimized compliance risks in intercompany transactions'
      ],
      technologies: ['Contract Lifecycle Management', 'Workflow Engine', 'Compliance Tracking', 'Multi-region Deployment'],
      status: 'Live Product'
    },
    {
      title: 'Scope 3 Carbon Emission Data Exchange Platform',
      category: 'ESG • Sustainability',
      context: 'Enterprises needed a reliable system to collect, validate, and exchange Scope 3 emissions data from their supply chain partners. Existing solutions were fragmented, leading to inconsistent disclosures.',
      role: [
        'Led MVP definition: supplier emissions data intake + visualization',
        'Designed supplier onboarding journeys to maximize adoption',
        'Partnered with sustainability leads to ensure alignment with GHG Protocol'
      ],
      process: {
        discovery: 'Benchmarking competitor carbon disclosure platforms + stakeholder interviews',
        definition: 'Built epics for supplier data input, data validation workflows, and emissions dashboards',
        delivery: 'Launched MVP within 12 weeks; followed up with advanced analytics and API integration with ERP systems'
      },
      outcomes: [
        { icon: Users, label: 'Supply Base Coverage', value: '>70%' },
        { icon: FileText, label: 'Disclosure Reports', value: 'Generated' },
        { icon: TrendingUp, label: 'Market Position', value: 'Early Mover' }
      ],
      impact: [
        'Helped enterprises gather supplier emissions data covering >70% of their supply base',
        'Enabled generation of disclosure-ready reports for regulatory and investor requirements',
        'Positioned company as an early mover in sustainability compliance'
      ],
      technologies: ['Data Validation', 'Supplier Integration', 'GHG Protocol', 'ERP APIs', 'Analytics Dashboard'],
      status: 'Live Product'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl tracking-tight">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real-world product management solutions I've led from discovery to delivery, 
            demonstrating impact across logistics, compliance, and sustainability domains.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-muted/30 border-b">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl tracking-tight">{project.title}</h3>
                    <Badge variant="secondary" className="w-fit">
                      {project.category}
                    </Badge>
                  </div>
                  <Badge 
                    variant="default" 
                    className="w-fit"
                  >
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="p-8 space-y-8">
                {/* Context */}
                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-primary">Context</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.context}
                  </p>
                </div>

                {/* My Role */}
                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-primary">My Role</h4>
                  <ul className="space-y-2">
                    {project.role.map((roleItem, roleIndex) => (
                      <li key={roleIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <ArrowRight className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                        {roleItem}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process */}
                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-primary">Process</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium">1</div>
                        <h5 className="font-medium">Discovery</h5>
                      </div>
                      <p className="text-sm text-muted-foreground">{project.process.discovery}</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium">2</div>
                        <h5 className="font-medium">Definition</h5>
                      </div>
                      <p className="text-sm text-muted-foreground">{project.process.definition}</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium">3</div>
                        <h5 className="font-medium">Delivery</h5>
                      </div>
                      <p className="text-sm text-muted-foreground">{project.process.delivery}</p>
                    </div>
                  </div>
                </div>

                {/* Outcome Metrics */}
                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-primary">Key Outcomes</h4>
                  <div className="grid grid-cols-3 gap-6">
                    {project.outcomes.map((outcome, outcomeIndex) => {
                      const Icon = outcome.icon;
                      return (
                        <div key={outcomeIndex} className="text-center space-y-3 p-4 bg-muted/30 rounded-lg">
                          <div className="flex justify-center">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                              <Icon className="w-5 h-5 text-primary" />
                            </div>
                          </div>
                          <div className="space-y-1">
                            <p className="font-medium">{outcome.value}</p>
                            <p className="text-sm text-muted-foreground">{outcome.label}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Impact Details */}
                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-primary">Business Impact</h4>
                  <ul className="space-y-2">
                    {project.impact.map((impactItem, impactIndex) => (
                      <li key={impactIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                        {impactItem}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="space-y-3">
                  <h4 className="font-medium">Technologies & Methodologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Card className="bg-muted/30 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-xl mb-4">Product Management Approach</h3>
              <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                My product management methodology follows a structured Discovery → Definition → Delivery process, 
                with strong emphasis on stakeholder collaboration, user-centric solutions, and measurable business outcomes. 
                Each project demonstrates my ability to navigate complex B2B environments and drive product success.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;