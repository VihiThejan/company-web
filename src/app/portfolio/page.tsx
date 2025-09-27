import Image from 'next/image';

const projects = [
  {
    name: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with modern payment integration and real-time inventory management.',
    href: '#',
    category: 'Web Development',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
  },
  {
    name: 'Mobile Banking App',
    description: 'Secure mobile banking application with biometric authentication and real-time transaction processing.',
    href: '#',
    category: 'Mobile Development',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
  },
  {
    name: 'Cloud Infrastructure Migration',
    description: 'Complete cloud migration project reducing operational costs by 40% while improving scalability.',
    href: '#',
    category: 'Cloud Solutions',
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
  },
  {
    name: 'Analytics Dashboard',
    description: 'Real-time business intelligence dashboard providing actionable insights from complex data sets.',
    href: '#',
    category: 'Data Analytics',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
  },
  {
    name: 'Healthcare Management System',
    description: 'Comprehensive healthcare management platform streamlining patient care and administrative processes.',
    href: '#',
    category: 'Web Development',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
  },
  {
    name: 'IoT Monitoring Solution',
    description: 'Industrial IoT platform for real-time equipment monitoring and predictive maintenance.',
    href: '#',
    category: 'System Integration',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
  },
];

export default function Portfolio() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Portfolio</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore our recent projects and see how we&apos;ve helped businesses across various industries
            achieve their goals through innovative technology solutions.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <Image 
                src={project.imageUrl} 
                alt={project.name} 
                className="absolute inset-0 -z-10 h-full w-full object-cover" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <time className="mr-8">{project.category}</time>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href={project.href}>
                  <span className="absolute inset-0" />
                  {project.name}
                </a>
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-300">{project.description}</p>
            </article>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mx-auto mt-32 max-w-2xl text-center">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Have a project in mind?
          </h3>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We&apos;d love to hear about your project and discuss how we can help bring your vision to life.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Start a Project
            </a>
            <a href="/services" className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600">
              View Services <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}