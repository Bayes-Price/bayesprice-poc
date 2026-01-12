import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50/70 via-blue-50/30 to-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-heading font-semibold text-foreground leading-[1.1] tracking-tight mb-6">
              Terms & Conditions
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg prose-gray">
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                <strong>Background:</strong> This agreement applies as between you, the User of this Web Site
                and Bayes Price, the owner(s) of this Web Site. Your agreement to comply with and be bound by
                these terms and conditions is deemed to occur upon your first use of the Web Site. If you do
                not agree to be bound by these terms and conditions, you should stop using the Web Site immediately.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">1. Definitions and Interpretation</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">In this Agreement the following terms shall have the following meanings:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><strong>"Content":</strong> Any text, graphics, images, audio, video, software, data compilations and any other form of information capable of being stored in a computer that appears on or forms part of this Web Site</li>
              <li><strong>"Bayes Price":</strong> Bayes Price | 127-131 Raleigh Road, Bristol, England, BS3 1QU</li>
              <li><strong>"Service":</strong> Collectively any online facilities, tools, services or information that Bayes Price makes available through the Web Site either now or in the future</li>
              <li><strong>"System":</strong> Any online communications infrastructure that Bayes Price makes available through the Web Site either now or in the future</li>
              <li><strong>"User" / "Users":</strong> Any third party that accesses the Web Site and is not employed by Bayes Price and acting in the course of their employment</li>
              <li><strong>"Web Site":</strong> The website that you are currently using (bayesprice.com) and any subdomains of this site unless expressly excluded by their own terms and conditions</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">2. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              2.1 All Content included on the Web Site, unless uploaded by Users, including, but not limited to,
              text, graphics, logos, icons, images, sound clips, video clips, data compilations, page layout,
              underlying code and software is the property of Bayes Price, our affiliates or other relevant
              third parties. By continuing to use the Web Site you acknowledge that such material is protected
              by applicable United Kingdom and International intellectual property and other relevant laws.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              2.2 Subject to sub-clause 2.3 you may not reproduce, copy, distribute, store or in any other
              fashion re-use material from the Web Site unless otherwise indicated on the Web Site or unless
              given express written permission to do so by Bayes Price.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              2.3 Material from the Web Site may be re-used without written permission where any of the
              exceptions detailed in Chapter III of the Copyright Designs and Patents Act 1988 apply.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">3. Links to Other Web Sites</h2>
            <p className="text-muted-foreground leading-relaxed">
              This Web Site may contain links to other sites. Unless expressly stated, these sites are not
              under the control of Bayes Price or that of our affiliates. We assume no responsibility for
              the content of such web sites and disclaim liability for any and all forms of loss or damage
              arising out of the use of them. The inclusion of a link to another site on this Web Site does
              not imply any endorsement of the sites themselves or of those in control of them.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">4. Links to this Web Site</h2>
            <p className="text-muted-foreground leading-relaxed">
              Those wishing to place a link to this Web Site on other sites may do so only to the home page
              of the site www.bayesprice.com without prior permission. Deep linking (i.e. links to specific
              pages within the site) requires the express permission of Bayes Price. To find out more please
              contact us by email at matt@bayesprice.com
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">5. Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              For the purposes of applicable data protection legislation, the Bayes Price will process any
              personal data you have provided to it in accordance with the Privacy Policy available on the
              Bayes Price website or on request from Bayes Price. You agree that, if you have provided Bayes
              Price with personal data relating to a third party you have in place all necessary appropriate
              consents and notices to enable lawful transfer of such personal data to Bayes Price.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">6. Disclaimers</h2>
            <p className="text-muted-foreground leading-relaxed">
              6.1 Bayes Price makes no warranty or representation that the Web Site will meet your requirements,
              that it will be of satisfactory quality, that it will be fit for a particular purpose, that it
              will not infringe the rights of third parties, that it will be compatible with all systems, that
              it will be secure and that all information provided will be accurate. We make no guarantee of any
              specific results from the use of our Service.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              6.2 No part of this Web Site is intended to constitute advice, and the Content of this Web Site
              should not be relied upon when making any decisions or taking any action of any kind.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">7. Availability of the Web Site</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Service is provided "as is" and on an "as available" basis. We give no warranty that the
              Service will be free of defects and / or faults. To the maximum extent permitted by the law we
              provide no warranties (express or implied) of fitness for a particular purpose, accuracy of
              information, compatibility and satisfactory quality.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">8. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              8.1 To the maximum extent permitted by law, Bayes Price accepts no liability for any direct or
              indirect loss or damage, foreseeable or otherwise, including any indirect, consequential, special
              or exemplary damages arising from the use of the Web Site or any information contained therein.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              8.2 Nothing in these terms and conditions excludes or restricts Bayes Price's liability for death
              or personal injury resulting from any negligence or fraud on the part of Bayes Price.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              8.3 Every effort has been made to ensure that these terms and conditions adhere strictly with the
              relevant provisions of the Unfair Contract Terms Act 1977.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">9. No Waiver</h2>
            <p className="text-muted-foreground leading-relaxed">
              In the event that any party to these Terms and Conditions fails to exercise any right or remedy
              contained herein, this shall not be construed as a waiver of that right or remedy.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">10. Previous Terms and Conditions</h2>
            <p className="text-muted-foreground leading-relaxed">
              In the event of any conflict between these Terms and Conditions and any prior versions thereof,
              the provisions of these Terms and Conditions shall prevail unless it is expressly stated otherwise.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">11. Notices</h2>
            <p className="text-muted-foreground leading-relaxed">
              All notices / communications shall be given to us either by post to our Premises (Bayes Price Ltd,
              127-131 Raleigh Road, Bristol, BS3 1QU) or by email to matt@bayesprice.com. Such notice will be
              deemed received 3 days after posting if sent by first class post, the day of sending if the email
              is received in full on a business day and on the next business day if the email is sent on a
              weekend or public holiday.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">12. Law and Jurisdiction</h2>
            <p className="text-muted-foreground leading-relaxed">
              These terms and conditions and the relationship between you and Bayes Price shall be governed by
              and construed in accordance with the Law of England and Wales and Bayes Price and you agree to
              submit to the exclusive jurisdiction of the Courts of England and Wales.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default TermsConditions
