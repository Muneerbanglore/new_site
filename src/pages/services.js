import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Comprehensive business setup solutions tailored to your needs in the UAE
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Key Features:</h3>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {service.process && (
                  <>
                    <h3 className="font-semibold text-lg text-gray-900 mb-3 mt-6">Our Process:</h3>
                    <ol className="space-y-2 mb-6 list-decimal list-inside">
                      {service.process.map((step, index) => (
                        <li key={index} className="text-gray-700">{step}</li>
                      ))}
                    </ol>
                  </>
                )}

                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-colors"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Business in UAE?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our experts are ready to guide you through every step of setting up your business in the UAE.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-red-600 text-white rounded-full font-bold text-lg hover:bg-red-700 transition-colors"
          >
            Get Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
