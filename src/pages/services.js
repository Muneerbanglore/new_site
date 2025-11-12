import { CheckCircle } from 'lucide-react';

// Decorative images are located in src/images/
import back1 from '../images/back1.png';
import businessSetup from '../images/business-setup.png';
import companyFormation from '../images/companyformation.png';
import dubaiCompany from '../images/dubai-company.png';

export default function Services() {
  const services = [
    {
      id: 'trade-licence',
      title: 'Trade Licence Formation',
      description: 'Comprehensive trade license solutions for your business in the UAE. We handle all the paperwork and legal requirements to get your business up and running smoothly.',
      features: [
        '100% foreign ownership in specific sectors',
        'No restrictions on business activities',
        'Direct access to local markets',
        'Option for office or flexi-desk',
        'VAT registration',
        'PRO services',
        'Bank account opening assistance'
      ],
      process: [
        'Initial consultation and business activity selection',
        'Document preparation and verification',
        'Trade name reservation',
        'Initial approval from DED',
        'Office space arrangement',
        'Final approval and license issuance'
      ]
    },
    {
      id: 'business-setup',
      title: 'Business Setup',
      description: 'End-to-end business setup services in Dubai and across the UAE. We provide complete solutions for company formation in mainland and free zones.',
      features: [
        'Free zone and mainland company setup',
        'Local sponsor services',
        'Visa processing',
        'Corporate bank account opening',
        'Office space solutions',
        'Government liaison services'
      ]
    },
    {
      id: 'freezone',
      title: 'Freezone Company Formation',
      description: 'Set up your business in one of UAE\'s many free zones with 100% foreign ownership and tax benefits.',
      features: [
        '100% foreign ownership',
        'Tax exemptions',
        'Full profit repatriation',
        'No currency restrictions',
        'Customs benefits',
        'No corporate or income tax'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with background image */}
   <div className="relative overflow-hidden">
  {/* Background Image */}
  <img
    src={back1}
    alt="UAE skyline background"
    className="absolute inset-0 w-full h-64 object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40 h-60"></div>

  {/* Text Content */}
  <div className="relative max-w-7xl mx-auto px-6 py-20">
    <h1 className="text-2xl md:text-6xl font-extrabold text-white font-raleway mb-4 text-shadow-lg">
      Services That Power Your Business
    </h1>
    <p className="text-sm md:text-xl text-white max-w-3xl">
      From company formation to full PRO support — tailored, transparent and timely services to help you launch and grow in the UAE.
    </p>
  </div>
</div>


      {/* Highlight Strip */}
      <div className="bg-white shadow-sm py-6 mt-2 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-4">
            <img src={businessSetup} alt="business setup illustration" className="w-20 h-20 object-contain" />
            <div>
              <h3 className="font-semibold text-lg">End-to-End Setup</h3>
              <p className="text-gray-600">All paperwork, licensing & local compliance handled by our team.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <img src={companyFormation} alt="company formation" className="w-20 h-20 object-contain" />
            <div>
              <h3 className="font-semibold text-lg">Freezone & Mainland Experts</h3>
              <p className="text-gray-600">Choose the right jurisdiction for your growth and tax goals.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <img src={dubaiCompany} alt="dubai company" className="w-20 h-20 object-contain" />
            <div>
              <h3 className="font-semibold text-lg">Banking & Visas</h3>
              <p className="text-gray-600">We assist with corporate bank accounts and employment visas.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid with richer content and imagery */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left column: narrative and image */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src={businessSetup} alt="Business setup in UAE" className="w-full h-56 object-cover" />
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Trade Licence Formation</h2>
                <p className="text-gray-700 mb-4">We guide you through trade licence options — mainland, free zone or professional trade. Expect clear timelines and a single point of contact.</p>

                <h4 className="font-medium text-gray-900 mb-2">Who it's for</h4>
                <p className="text-gray-600 mb-4">Entrepreneurs, SMEs, and international businesses seeking a reliable market entry into the UAE.</p>

                <h4 className="font-medium text-gray-900 mb-2">What's included</h4>
                <ul className="list-inside list-disc text-gray-700 space-y-2">
                  <li>Activity advisory & trade name check</li>
                  <li>Document preparation and approvals</li>
                  <li>Office setup options (flexi-desk to full office)</li>
                  <li>Visa quota planning and assistance</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-xl shadow-inner">
              <h3 className="text-xl font-semibold mb-3">Why choose us?</h3>
              <p className="text-gray-700 mb-4">We combine local relationships with transparent pricing. Our team reduces common delays and helps you make informed jurisdiction choices.</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Fast approvals with proactive follow-ups</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Clear breakdown of government fees and our service fees</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Post-formation compliance support</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right column: cards for available services */}
          <div className="space-y-6">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 flex gap-4">
                  <div className="flex-shrink-0 w-20 h-20 rounded-lg bg-red-50 flex items-center justify-center">
                    {/* Decorative icon placeholder - could swap with an SVG */}
                    <img src={companyFormation} alt="service" className="w-12 h-12 object-contain" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 mt-2">{service.description}</p>
                    <div className="mt-4">
                      <h4 className="font-medium text-gray-900">Key features</h4>
                      <ul className="text-gray-700 mt-2 space-y-1">
                        {service.features.slice(0, 5).map((f, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

  {/* Closing testimonial-like strip */}
  <div className="bg-black text-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Trusted by founders across the region</h2>
          <p className="text-gray-100 max-w-2xl mx-auto">We’ve helped 500+ companies register and scale in the UAE — transparent pricing, fast turnaround, and local expertise.</p>
        </div>
      </div>
    </div>
  );
}
