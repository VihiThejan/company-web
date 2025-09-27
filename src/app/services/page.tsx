import { 
  CodeBracketIcon, 
  CloudIcon, 
  DevicePhoneMobileIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  CogIcon 
} from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Web Development',
    description: 'Custom web applications built with modern frameworks and best practices.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services for your business needs.',
    icon: CloudIcon,
  },
  {
    name: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Data Analytics',
    description: 'Transform your data into actionable insights with advanced analytics.',
    icon: ChartBarIcon,
  },
  {
    name: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'System Integration',
    description: 'Seamless integration of your existing systems and new technologies.',
    icon: CogIcon,
  },
];

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Solutions for Your Business
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer a wide range of technology services designed to help your business
            succeed in the digital age. From custom development to cloud solutions,
            our expert team delivers results that drive growth.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <service.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                  <p className="mt-6">
                    <a href="/contact" className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        
        {/* CTA Section */}
        <div className="mx-auto mt-32 max-w-2xl text-center">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Ready to get started?
          </h3>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Let&apos;s discuss how our services can help transform your business.
            Get in touch with our team today.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Contact Us
            </a>
            <a href="/portfolio" className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600">
              View Our Work <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}