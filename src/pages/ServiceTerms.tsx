import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

const ServiceTerms = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50/70 via-blue-50/30 to-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-heading font-semibold text-foreground leading-[1.1] tracking-tight mb-6">
              Service Terms
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg prose-gray">
            <p className="text-muted-foreground leading-relaxed">
              These Service Terms ("Terms") govern your use of services provided by Bayesprice Limited
              ("Company", "we", "us", or "our"). By engaging our services, you agree to these Terms.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Company Details:</strong>
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Bayesprice Limited is registered in England and Wales with company number 12267037.
                Our registered office is at 127-131 Raleigh Road, Bristol, England, BS3 1QU.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">1. Services Overview</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Bayesprice Limited provides data science and market research services, including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Survey data processing and analysis</li>
              <li>Custom tabulations and reporting</li>
              <li>Interactive data visualization platforms</li>
              <li>Research automation solutions</li>
              <li>AI-powered insights and analytics</li>
              <li>Survey hosting and data collection</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">2. Engagement and Scope</h2>
            <p className="text-muted-foreground leading-relaxed">
              The specific scope of services, deliverables, timelines, and fees will be set out in a
              separate Statement of Work or service agreement between you and Bayesprice Limited. These
              Terms apply in addition to any such agreement.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">3. Client Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              As a client, you agree to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Provide accurate and complete information as required for service delivery</li>
              <li>Ensure you have appropriate rights to share any data with us</li>
              <li>Respond to queries and requests in a timely manner</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Maintain confidentiality of any credentials or access provided</li>
              <li>Not use our services for any unlawful purpose</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">4. Data Handling</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When processing data on your behalf:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>We act as a data processor under applicable data protection laws</li>
              <li>Data will be processed in accordance with your instructions and our Privacy Policy</li>
              <li>We implement appropriate technical and organizational security measures</li>
              <li>Personal data will not be transferred outside the UK without appropriate safeguards</li>
              <li>Upon termination, data will be returned or deleted as agreed</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">5. Confidentiality</h2>
            <p className="text-muted-foreground leading-relaxed">
              We will treat all client data and information as confidential. We will not disclose your
              confidential information to third parties except as necessary to provide the services,
              as required by law, or with your prior written consent. This obligation survives
              termination of our engagement.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">6. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Unless otherwise agreed in writing:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>You retain ownership of all data you provide to us</li>
              <li>We retain ownership of our software, tools, methodologies, and pre-existing IP</li>
              <li>Deliverables created specifically for you are licensed for your use upon payment</li>
              <li>We may use aggregated, anonymized insights to improve our services</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">7. Fees and Payment</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Payment terms will be specified in your service agreement. Unless otherwise stated:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Invoices are payable within 30 days of issue</li>
              <li>All fees are exclusive of VAT, which will be added where applicable</li>
              <li>Late payments may incur interest at the statutory rate</li>
              <li>We reserve the right to suspend services for overdue accounts</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">8. Service Levels</h2>
            <p className="text-muted-foreground leading-relaxed">
              We will use reasonable endeavors to deliver services in accordance with agreed timelines
              and specifications. For subscription services, specific service level commitments may be
              detailed in your service agreement.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">9. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To the fullest extent permitted by law:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Our total liability shall not exceed the fees paid for the relevant services</li>
              <li>We are not liable for indirect, consequential, or incidental damages</li>
              <li>We are not liable for losses arising from your use of deliverables</li>
              <li>Nothing in these Terms excludes liability for fraud, death, or personal injury</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">10. Termination</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Either party may terminate the service relationship:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>By giving written notice as specified in your service agreement</li>
              <li>Immediately if the other party breaches these Terms materially</li>
              <li>Immediately if the other party becomes insolvent</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Upon termination, you must pay for all services provided up to the termination date.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">11. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms are governed by the laws of England and Wales. Any disputes shall be subject
              to the exclusive jurisdiction of the courts of England and Wales, though we may seek
              injunctive relief in any jurisdiction.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">12. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update these Terms from time to time. Material changes will be communicated to
              active clients. Continued use of our services after changes take effect constitutes
              acceptance of the updated Terms.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these Service Terms, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mt-4">
              <p className="text-muted-foreground">
                <strong>Email:</strong> info@bayesprice.com
              </p>
              <p className="text-muted-foreground mt-2">
                <strong>Address:</strong> 127-131 Raleigh Road, Southville, Bristol, BS3 1QU
              </p>
            </div>

            <p className="text-muted-foreground mt-8 text-sm">
              These Service Terms were last updated in January 2025.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ServiceTerms
