import Image from "next/image";


const cardStyles =
  'bg-white p-4 shadow-md  flex flex-col gap-2  '
const tagStyles =
  'bg-[#E5EAF3] text-sm px-3 py-1 rounded-full text-gray-700 inline-block'

const TechnologiesSection = () => {
  return (
    <section className="bg-[#E5EAF3] py-12 px-4 md:px-30">
      <h2 className="text-4xl  text-center mb-10">
        Our Technologies
      </h2>

      <div className="space-y-6">
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={cardStyles}>
            <h3 className=" text-lg flex items-center gap-4">
              <Image
                                            src="/mobile.svg"
                                            alt="Internship Girl"
                                            width={60}
                                            height={60}
                                            className="object-contain"
                                          /> Mobile App Development
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className={tagStyles}>Android App Development</span>
              <span className={tagStyles}>Flutter App Development</span>
              <span className={tagStyles}>IOS App Development</span>
              <span className={tagStyles}>React Native App Development</span>
            </div>
          </div>

          <div className={cardStyles}>
            <h3 className=" text-lg flex items-center gap-4">
               <Image
                                            src="/ourtechlogo1.svg"
                                            alt="Internship Girl"
                                            width={60}
                                            height={60}
                                            className="object-contain"
                                          /> Mobile App Development
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className={tagStyles}>Progressive Web App</span>
              <span className={tagStyles}>Frontend Development</span>
              <span className={tagStyles}>Backend Development</span>
              <span className={tagStyles}>Website Development</span>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className={cardStyles}>
            <h3 className=" text-lg flex items-center gap-4">
               <Image
                                            src="/ourtechlogo2.svg"
                                            alt="Internship Girl"
                                            width={60}
                                            height={60}
                                            className="object-contain"
                                          /> Mobile App DevelopmentAI/ML
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className={tagStyles}>Automation of Tasks</span>
              <span className={tagStyles}>Computer Vision</span>
              <span className={tagStyles}>Data-Driven Decisions</span>
              <span className={tagStyles}>NLP</span>
            </div>
          </div>

          <div className={cardStyles}>
            <h3 className=" text-lg flex items-center gap-4">
               <Image
                                            src="/ourtechlogo3.svg"
                                            alt="Internship Girl"
                                            width={60}
                                            height={60}
                                            className="object-contain"
                                          /> Mobile App DevelopmentCloud Services
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className={tagStyles}>DevOps</span>
              <span className={tagStyles}>AWS</span>
              <span className={tagStyles}>Google Cloud</span>
              <span className={tagStyles}>Azure</span>
              <span className={tagStyles}>CI/CD Pipelines</span>
            </div>
          </div>

          <div className={cardStyles}>
            <h3 className=" text-lg flex items-center gap-4">
               <Image
                                            src="/ourtechlogo4.svg"
                                            alt="Internship Girl"
                                            width={60}
                                            height={60}
                                            className="object-contain"
                                          /> Mobile App DevelopmentUI/UX Design
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className={tagStyles}>User-Centered Design</span>
              <span className={tagStyles}>Seamless Navigation</span>
              <span className={tagStyles}>Visual & Interactive Design</span>
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className={cardStyles}>
            <h3 className=" text-lg flex items-center gap-4">
               <Image
                                            src="/ourtechlogo5.svg"
                                            alt="Internship Girl"
                                            width={60}
                                            height={60}
                                            className="object-contain"
                                          /> Mobile App DevelopmentQuality Assurance
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className={tagStyles}>Manual Testing</span>
              <span className={tagStyles}>API Testing</span>
              <span className={tagStyles}>Web Testing</span>
              <span className={tagStyles}>Mobile App Testing</span>
              <span className={tagStyles}>Automation Testing</span>
            </div>
          </div>

          <div className={cardStyles}>
            <h3 className=" text-lg flex items-center gap-4">
               <Image
                                            src="/ourtechlogo6.svg"
                                            alt="Internship Girl"
                                            width={60}
                                            height={60}
                                            className="object-contain"
                                          /> Mobile App DevelopmentAPI Development
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className={tagStyles}>RESTful & SOAP APIs</span>
              <span className={tagStyles}>Scalable</span>
              <span className={tagStyles}>Security & Authentication</span>
              <span className={tagStyles}>Testing</span>
            </div>
          </div>

          <div className={cardStyles}>
            <h3 className=" text-lg flex items-center gap-4">
              <Image
                                            src="/ourtechlogo7.svg"
                                            alt="Internship Girl"
                                            width={60}
                                            height={60}
                                            className="object-contain"
                                          /> Mobile App DevelopmentDesigning
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className={tagStyles}>UI/UX Design</span>
              <span className={tagStyles}>Mobile App</span>
              <span className={tagStyles}>Web Designs</span>
              <span className={tagStyles}>Wireframe/Prototyping</span>
              <span className={tagStyles}>Design Systems</span>
            </div>
          </div>
        </div>

        {/* Row 4 */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className={cardStyles}>
            <h3 className=" text-lg flex items-center gap-4">
               <Image
                                            src="/ourtechlogo8.svg"
                                            alt="Internship Girl"
                                            width={60}
                                            height={60}
                                            className="object-contain"
                                          /> Mobile App DevelopmentOrganic Reach
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className={tagStyles}>SEO</span>
              <span className={tagStyles}>GMB SEO</span>
              <span className={tagStyles}>Competitor Research</span>
              <span className={tagStyles}>Technical SEO</span>
              <span className={tagStyles}>ASO</span>
              <span className={tagStyles}>Performance Analytics</span>
            </div>
          </div>

          <div className={cardStyles}>
            <h3 className=" text-lg flex items-center gap-4">
               <Image
                                            src="/ourtechlogo9.svg"
                                            alt="Internship Girl"
                                            width={60}
                                            height={60}
                                            className="object-contain"
                                          /> Mobile App DevelopmentIOT
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className={tagStyles}>Device Connectivity</span>
              <span className={tagStyles}>Automation & Remote Control</span>
              <span className={tagStyles}>Interconnectivity</span>
              <span className={tagStyles}>Applications in Various Fields</span>
              <span className={tagStyles}>Real-Time Data Monitoring</span>
              <span className={tagStyles}>Security & Privacy Challenges</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className={cardStyles}>
            <h3 className=" text-lg flex items-center gap-4">
               <Image
                                            src="/ourtechlogo10.svg"
                                            alt="Internship Girl"
                                            width={60}
                                            height={60}
                                            className="object-contain"
                                          /> Mobile App DevelopmentBlockchain
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className={tagStyles}>Decentralized System</span>
              <span className={tagStyles}>Cryptocurrencies</span>
              <span className={tagStyles}>Secure and Immutable Records</span>
              <span className={tagStyles}>Smart Contracts</span>
            </div>
          </div>

          <div className={cardStyles}>
            <h3 className=" text-lg flex items-center gap-4">
               <Image
                                            src="/ourtechlogo11.svg"
                                            alt="Internship Girl"
                                            width={60}
                                            height={60}
                                            className="object-contain"
                                          /> Mobile App DevelopmentCybersecurity Solutions
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className={tagStyles}>Threat Prevention</span>
              <span className={tagStyles}>Risk Assessment & Management</span>
              <span className={tagStyles}>Data Protection</span>
              <span className={tagStyles}>Incident Response</span>
              <span className={tagStyles}>Encryption</span>
            </div>
          </div>

          <div className={cardStyles}>
            <h3 className=" text-lg flex items-center gap-4">
              <Image
                                            src="/ourtechlogo12.svg"
                                            alt="Internship Girl"
                                            width={60}
                                            height={60}
                                            className="object-contain"
                                          /> Mobile App DevelopmentData & Analytics
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className={tagStyles}>Big Data Analytics</span>
              <span className={tagStyles}>Decision-Making</span>
              <span className={tagStyles}>Business Intelligence Analytics</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnologiesSection
