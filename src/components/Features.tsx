import { 
  RocketLaunchIcon, 
  ShieldCheckIcon, 
  UsersIcon,
  LightBulbIcon,
  ClockIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Innovation First',
    description:
      'We stay ahead of the curve with cutting-edge technologies and forward-thinking solutions that drive your business forward.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Trusted & Secure',
    description:
      'Your data and projects are protected with enterprise-grade security measures and industry best practices.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Expert Team',
    description:
      'Our diverse team of professionals brings decades of combined experience across multiple industries and technologies.',
    icon: UsersIcon,
  },
  {
    name: 'Creative Solutions',
    description:
      'We think outside the box to deliver unique, tailored solutions that address your specific business challenges.',
    icon: LightBulbIcon,
  },
  {
    name: '24/7 Support',
    description:
      'Round-the-clock support ensures your business operations run smoothly without interruption.',
    icon: ClockIcon,
  },
  {
    name: 'Client-Focused',
    description:
      'We build lasting relationships by putting our clients first and delivering exceptional value in every project.',
    icon: HeartIcon,
  },
];

export default function Features() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Why Choose Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to succeed
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We combine technical expertise with strategic thinking to deliver solutions that not only
            meet your current needs but also prepare your business for future growth and success.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}