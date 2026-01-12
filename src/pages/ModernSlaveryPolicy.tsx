import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

const ModernSlaveryPolicy = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50/70 via-blue-50/30 to-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-heading font-semibold text-foreground leading-[1.1] tracking-tight mb-6">
              Modern Slavery Policy
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg prose-gray">
            <p className="text-muted-foreground leading-relaxed">
              This statement is on behalf of Bayes Price Limited. We are committed to improving our practices
              to combat slavery and human trafficking. We recognise that slavery and human trafficking is an
              often-hidden issue in our society and the wider world.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We will not tolerate slavery and human trafficking in our business or supply chain. Further,
              if anyone connected to our business or not, who is a victim of modern slavery, or affected by
              modern slavery practice wishes to contact us, we will endeavour to support them in confidence
              by notifying and connecting the relevant UK authorities.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">About Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              We are a service-based business specialising in market & social research survey data. We offer
              data collection, connection, analysis, visualisation and insight to the market research and
              business intelligence communities. We are a micro-business operating as a UK Limited Company
              (12267037).
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">Our Supply Chain</h2>
            <p className="text-muted-foreground leading-relaxed">
              We consider ourselves to be relatively low risk in relation to modern slavery, given the
              services we provide and the type of suppliers we use. Our key supply chain comprises a network
              of technology providers, highly skilled experts and industry specialists.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We review our supply list at least annually and, as necessary, adapt our processes if we
              determine that our risk has changed. Our UK supplier documentation specifically refers to
              section 54 of the Modern Slavery Act 2015 and we require each supplier to certify that they
              comply with that or equivalent principles.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">Other Relevant Policies</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">Recruitment</h3>
                <p className="text-muted-foreground">
                  We take a robust approach to recruitment, including conducting eligibility to work in the
                  UK checks for all employees to safeguard against human trafficking or individuals being
                  forced to work against their will.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">Whistleblowing</h3>
                <p className="text-muted-foreground">
                  We ensure that all employees know that they can raise concerns about how colleagues are
                  being treated, or practices within our business or supply chain, without fear of reprisal.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">Health and Safety</h3>
                <p className="text-muted-foreground">
                  We ensure we provide a healthy working environment for our staff and contractors that work
                  out of our premises.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">Industry Standards</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>We are members of the UK Market Research Society (MRS) and operate in accordance with the MRS Code of Conduct.</li>
              <li>We are members of the UK's Insights Consultants Group (ICG) and adhere to the ICG Code of Practice.</li>
              <li>We are members of the Association for Survey Computing (ASC) and sit on the national ASC committee.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">Further Steps</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We intend to take the following further steps to combat slavery and human trafficking:
            </p>
            <ol className="list-decimal list-inside text-muted-foreground space-y-2">
              <li>Risk assess all new suppliers using the Global Slavery Index.</li>
              <li>Notify suppliers of our expectations in relation to the prohibition of modern slavery.</li>
              <li>Where appropriate we will include reference to the Modern Slavery Act 2015 in our policies and procedures.</li>
            </ol>

            <div className="bg-gray-50 rounded-lg p-6 mt-12">
              <p className="text-muted-foreground text-sm">
                This statement is made pursuant to section 54(1) of the Modern Slavery Act 2015 and constitutes
                Bayes Price Limited's slavery and human trafficking statement for the current financial year.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ModernSlaveryPolicy
