'use client';

import { useState } from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get in Touch</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Ready to start your next project? We&apos;d love to hear from you. Send us a message
            and we&apos;ll respond as soon as possible.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          {/* Contact Information */}
          <div className="lg:col-span-5 lg:col-start-1">
            <div className="mt-8 space-y-8">
              <div className="flex gap-x-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
                  <PhoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-semibold leading-7 text-gray-900">Phone</h3>
                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    <a href="tel:+1234567890" className="hover:text-indigo-600">
                      +1 (234) 567-890
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex gap-x-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
                  <EnvelopeIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-semibold leading-7 text-gray-900">Email</h3>
                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    <a href="mailto:hello@company.com" className="hover:text-indigo-600">
                      hello@company.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex gap-x-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
                  <MapPinIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-semibold leading-7 text-gray-900">Office</h3>
                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    123 Business Street<br />
                    Suite 456<br />
                    City, State 12345
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-7">
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                    Name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-gray-900">
                    Subject
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}