import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50/70 via-blue-50/30 to-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-heading font-semibold text-foreground leading-[1.1] tracking-tight mb-6">
              Privacy Policy
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg prose-gray">
            <p className="text-muted-foreground leading-relaxed">
              We take your privacy very seriously. Please read this privacy policy carefully as it contains
              important information on who we are and how and why we collect, store, use and share your
              personal information. It also explains your rights in relation to your personal information
              and how to contact us.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              We collect, use and are responsible for certain personal information about you as set out
              in this policy. When we do so we are subject to the UK General Data Protection Regulation
              and we are responsible as the 'controller' of that personal information.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">Key Terms</h2>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>We, us, our:</strong> Bayesprice Limited, is a company registered in England and Wales
                with company number 12267037. Our registered offices are at 127-131 Raleigh Road, Bristol,
                England, BS3 1QU.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Personal information:</strong> Personal data including any information relating to
                an identified or identifiable individual.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">Our Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              We are a data science company specialising in market research survey data. In addition to
              our software offering (which is subject to a separate Software User Privacy Notice), we
              offer the following services to our clients:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
              <li>Processing clients' existing research data to deliver rapid, customisable outputs</li>
              <li>Standard tabulations to automated PowerPoint reports</li>
              <li>Interactive visualisation portal for exploring lines of enquiry</li>
              <li>Online client survey hosting for online research data collection</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">Personal Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may collect and use the following personal information about you (and/or your staff) when you:
              (i) use our services to conduct research, (ii) contact us, or (iii) use our website:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><strong>Contact Data:</strong> Email address, telephone number, job title and company details</li>
              <li><strong>Identity Data:</strong> Name, date of birth, gender information (if provided)</li>
              <li><strong>Profile Data:</strong> Personal/professional interests, industry/sector, company</li>
              <li><strong>Technical Data:</strong> IP address, login data, browser type and version, location, device ID</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website, products and services</li>
              <li><strong>Marketing and Communications Data:</strong> Marketing preferences and survey responses</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              Under data protection law, we can only use your personal information if we have a proper reason
              for doing so, in particular where it is:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
              <li>Necessary for us to comply with our legal and regulatory obligations</li>
              <li>Necessary for the performance of our contract with you</li>
              <li>For the pursuit of our legitimate interests or those of a third party</li>
              <li>Where you have given your consent to that use</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">Direct Marketing</h2>
            <p className="text-muted-foreground leading-relaxed">
              When your personal information is collected, you will be asked to indicate your preferences
              for receiving direct marketing communications. You can ask to stop sending you marketing
              communications at any time by following the opt-out links within any marketing communication
              sent to you or by contacting us.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">Who We Share Your Information With</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may share your personal information where necessary with IT Service Providers including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
              <li>Cloud computing and data storage providers (UK and elsewhere)</li>
              <li>Customer relationship management software (EU)</li>
              <li>Survey design and hosting platform providers (EU)</li>
              <li>Security, finance and software development services (UK, EU and elsewhere)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">International Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our servers are located in the United Kingdom. Whenever we transfer your personal information
              out of the UK, we will ensure a similar degree of protection is afforded to it by ensuring
              appropriate safeguards are in place.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You have the following rights, which you can exercise free of charge:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><strong>Access:</strong> Right to a copy of your personal information</li>
              <li><strong>Rectification:</strong> Right to correct any mistakes</li>
              <li><strong>To be forgotten:</strong> Right to request deletion in certain situations</li>
              <li><strong>Restriction:</strong> Right to restrict processing in certain circumstances</li>
              <li><strong>Data portability:</strong> Right to request transfer of your data</li>
              <li><strong>To object:</strong> Right to object to processing for direct marketing</li>
              <li><strong>Withdraw consent:</strong> Right to withdraw consent at any time</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">Complaints</h2>
            <p className="text-muted-foreground leading-relaxed">
              You have the right to lodge a complaint with the Information Commissioner's Office, the UK
              regulator for data protection issues (https://ico.org.uk/concerns or telephone: 0303 123 1113).
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">How to Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              Please contact us if you have any questions about this privacy policy or the information we
              hold about you:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mt-4">
              <p className="text-muted-foreground">
                <strong>Email:</strong> info@bayesprice.com
              </p>
              <p className="text-muted-foreground mt-2">
                <strong>Post:</strong> 127-131 Raleigh Road, Southville, Bristol, BS3 1QU
              </p>
            </div>

            <p className="text-muted-foreground mt-8 text-sm">
              This privacy notice was last updated in January 2025.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PrivacyPolicy
