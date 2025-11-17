import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Code, Database, Download, FileSpreadsheet, Shield, Workflow } from "lucide-react";
import rubyDesktop from "@/assets/ruby-desktop.jpg";
const RubySolution = () => {
  return <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Award-Winning Desktop Application
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-charcoal leading-tight">
                Ruby: Award-Winning{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Survey Data Processing
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Professional-grade desktop application combining intuitive GUI with powerful 
                open-source batch scripting for comprehensive survey data management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90">
                  Download Trial
                </Button>
                <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                  View Pricing
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <img src={rubyDesktop} alt="Ruby Desktop Application" className="rounded-2xl shadow-xl" />
              <div className="absolute -top-6 -right-6 bg-accent text-accent-foreground p-4 rounded-lg shadow-lg animate-float">
                <Award size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Award Banner */}
      <section className="py-8 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-center">
            <Award size={32} />
            <p className="text-lg font-semibold">
              MRS Technology & Innovation Award Winner - Recognized for excellence in integration and automation
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4">
              Core Features
            </h2>
            <p className="text-lg text-muted-foreground">
              Professional tools for survey data processing excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-6 space-y-4">
                
                <h3 className="text-xl font-bold text-charcoal">Dual Interface</h3>
                <p className="text-muted-foreground">
                  Intuitive GUI for quick tasks combined with powerful batch scripting 
                  for complex automation workflows.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <Database className="text-secondary" size={40} />
                <h3 className="text-xl font-bold text-charcoal">Universal Format Support</h3>
                <p className="text-muted-foreground">
                  Works with all major survey data formats including SPSS, Dimensions, 
                  Qualtrics, SurveyMonkey, and more.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <Workflow className="text-secondary" size={40} />
                <h3 className="text-xl font-bold text-charcoal">Wave Management</h3>
                <p className="text-muted-foreground">
                  Sophisticated wave-on-wave analysis tools for tracking changes 
                  and trends across multiple data collection periods.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <FileSpreadsheet className="text-secondary" size={40} />
                <h3 className="text-xl font-bold text-charcoal">Flexible Export</h3>
                <p className="text-muted-foreground">
                  Export to Excel, PowerPoint, Tableau, TSAPI, and custom formats 
                  with full control over layout and styling.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <Shield className="text-secondary" size={40} />
                <h3 className="text-xl font-bold text-charcoal">Deployment Flexibility</h3>
                <p className="text-muted-foreground">
                  Deploy on cloud infrastructure, local servers, or individual 
                  workstations based on your security requirements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <Code className="text-secondary" size={40} />
                <h3 className="text-xl font-bold text-charcoal">Open-Source Scripting</h3>
                <p className="text-muted-foreground">
                  Build custom automation workflows with our powerful, documented 
                  scripting language for repeatable processes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4">
                Technical Specifications
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-charcoal">System Requirements</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Windows 10/11 or Windows Server 2016+</li>
                    <li>• 8GB RAM minimum (16GB recommended)</li>
                    <li>• 500MB disk space for installation</li>
                    <li>• .NET Framework 4.8 or higher</li>
                    <li>• Network connectivity for cloud features</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-charcoal">Supported Formats</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• SPSS (.sav, .por)</li>
                    <li>• Dimensions (.ddf, .mdd)</li>
                    <li>• Triple-S (.sss, .xml)</li>
                    <li>• CSV, Excel (.xlsx, .xls)</li>
                    <li>• Qualtrics, SurveyMonkey exports</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-charcoal">Export Capabilities</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Excel with custom templates</li>
                    <li>• PowerPoint with branding</li>
                    <li>• Tableau data extracts</li>
                    <li>• TSAPI for integration</li>
                    <li>• Custom XML/JSON formats</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-charcoal">Storage Options</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Local file system</li>
                    <li>• Network file shares</li>
                    <li>• Cloud storage (Azure, AWS, Google)</li>
                    <li>• Version control integration</li>
                    <li>• Encrypted storage support</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4">
              Who Uses Ruby?
            </h2>
            <p className="text-lg text-muted-foreground">
              Trusted by research professionals worldwide
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            <Card className="bg-gradient-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-charcoal mb-3">Market Research Agencies</h3>
                <p className="text-muted-foreground">
                  Process hundreds of surveys monthly with consistent quality and formatting. 
                  Automate standard table production and wave-on-wave reporting for ongoing trackers.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-charcoal mb-3">Corporate Insight Teams</h3>
                <p className="text-muted-foreground">
                  Maintain control of sensitive data with on-premises deployment while automating 
                  regular reporting for stakeholders across the organization.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-charcoal mb-3">Data Processing Specialists</h3>
                <p className="text-muted-foreground">
                  Handle complex data transformations with batch scripting while maintaining 
                  quality through automated checks and validation routines.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-charcoal mb-3">Academic Researchers</h3>
                <p className="text-muted-foreground">
                  Analyze survey data from multiple sources with professional-grade tools 
                  at an accessible price point for research budgets.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 md:py-24 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <Download className="mx-auto" size={64} />
            <h2 className="text-3xl md:text-5xl font-bold">
              Try Ruby Today
            </h2>
            <p className="text-lg text-primary-foreground/90">
              Download a free 30-day trial and experience award-winning survey data processing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                Download Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Documentation
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/80 pt-4">
              No credit card required • Full functionality • 30-day trial period
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default RubySolution;