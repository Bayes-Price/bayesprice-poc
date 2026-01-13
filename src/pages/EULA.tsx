import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

const EULA = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50/70 via-blue-50/30 to-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-heading font-semibold text-foreground leading-[1.1] tracking-tight mb-6">
              End User License Agreement
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg prose-gray">
            <p className="text-muted-foreground leading-relaxed">
              This End User License Agreement ("EULA") is a legal agreement between you ("User" or "you")
              and Bayesprice Limited ("Company", "we", "us", or "our") for the use of our software products
              and services.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                <strong>Important:</strong> By installing, copying, or otherwise using our software, you agree
                to be bound by the terms of this EULA. If you do not agree to these terms, do not install or
                use the software.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">1. License Grant</h2>
            <p className="text-muted-foreground leading-relaxed">
              Subject to the terms of this EULA, Bayesprice Limited grants you a limited, non-exclusive,
              non-transferable, revocable license to use our software products solely for your internal
              business purposes in accordance with your subscription agreement.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
              <li>The license is granted only to the named user or organization</li>
              <li>Use is limited to the number of seats or users specified in your subscription</li>
              <li>The software may only be used for lawful purposes</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">2. Restrictions</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You may not:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Copy, modify, or distribute the software without authorization</li>
              <li>Reverse engineer, decompile, or disassemble the software</li>
              <li>Rent, lease, or lend the software to third parties</li>
              <li>Remove or alter any proprietary notices or labels on the software</li>
              <li>Use the software to develop competing products or services</li>
              <li>Attempt to gain unauthorized access to any systems or networks</li>
              <li>Use the software in violation of any applicable laws or regulations</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">3. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              The software is protected by copyright laws and international treaty provisions. Bayesprice
              Limited and its licensors retain all intellectual property rights in the software, including
              all copies thereof. This EULA does not grant you any rights to trademarks or service marks
              of Bayesprice Limited.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">4. Data and Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your use of the software is also governed by our Privacy Policy. You acknowledge that data
              processed through our software may be stored on servers located in the United Kingdom or
              other jurisdictions. You are responsible for ensuring you have appropriate rights and
              consents to process any personal data through our software.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">5. Updates and Modifications</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may provide updates, patches, or new versions of the software from time to time. Such
              updates may be automatic and you agree to accept such updates as part of your use of the
              software. We reserve the right to modify the functionality of the software at any time.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">6. Term and Termination</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This EULA is effective until terminated. Your rights under this license will terminate
              automatically without notice if you fail to comply with any of its terms. Upon termination:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>You must cease all use of the software</li>
              <li>You must destroy all copies of the software in your possession</li>
              <li>We may disable your access to the software and any associated services</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">7. Disclaimer of Warranties</h2>
            <p className="text-muted-foreground leading-relaxed">
              THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
              BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SOFTWARE WILL BE UNINTERRUPTED OR ERROR-FREE.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">8. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, BAYESPRICE LIMITED SHALL NOT BE LIABLE FOR ANY
              INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS
              OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL,
              OR OTHER INTANGIBLE LOSSES.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">9. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              This EULA shall be governed by and construed in accordance with the laws of England and Wales,
              without regard to its conflict of law provisions. Any disputes arising under this EULA shall
              be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">10. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this EULA, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mt-4">
              <p className="text-muted-foreground">
                <strong>Bayesprice Limited</strong>
              </p>
              <p className="text-muted-foreground mt-2">
                <strong>Email:</strong> info@bayesprice.com
              </p>
              <p className="text-muted-foreground mt-2">
                <strong>Address:</strong> 127-131 Raleigh Road, Southville, Bristol, BS3 1QU
              </p>
              <p className="text-muted-foreground mt-2">
                <strong>Company Number:</strong> 12267037
              </p>
            </div>

            <p className="text-muted-foreground mt-8 text-sm">
              This End User License Agreement was last updated in January 2025.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default EULA
