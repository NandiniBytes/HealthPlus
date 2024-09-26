import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import React from 'react';

//import images
import healthPlusLogo from '../public/healthplus.jpg';
import placeholderImage from '../public/placeholder.svg';

export default function HealthPlusClinic() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <header className="bg-blue-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-white rounded-full mr-4">
              {/* Replace with actual logo */}
              <Image src={healthPlusLogo} alt="HealthPlus Logo" width={48} height={48} />
            </div>
            <h1 className="text-2xl font-bold">HealthPlus: Multitherapy and Pain Clinic</h1>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="#services" className="hover:text-red-500">Services</Link></li>
              <li><Link href="#gallery" className="hover:text-red-500">Gallery</Link></li>
              <li><Link href="#appointment" className="hover:text-red-500">Appointment</Link></li>
              <li><Link href="#contact" className="hover:text-red-500">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-blue-900 text-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Welcome to HealthPlus Clinic</h2>
            <p className="text-xl mb-8">Dr. Hemant Jani's Physiotherapy and Pain Management Center</p>
            <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
              <Link href="#appointment">Book an Appointment</Link>
            </Button>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['Physiotherapy', 'Pain Management', 'Rehabilitation'].map((service) => (
                <Card key={service} className="border-blue-900">
                  <CardHeader>
                    <CardTitle className="text-blue-900">{service}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>Professional {service.toLowerCase()} services tailored to your needs.</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="bg-gray-100 py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Our Centre</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((index) => (
                <div key={index} className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  {/* Replace with actual clinic photos */}
                  <Image src={`/placeholder.svg?text=Clinic+Photo+${index}`} alt={`Clinic Photo ${index}`} width={400} height={225} layout="responsive" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="appointment" className="bg-blue-900 text-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Book an Appointment</h2>
            <p className="mb-8">Schedule your visit with Dr. Hemant Jani using our online booking system.</p>
            <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
              <a href="https://forms.gle/xsymg77vf5KXzwSd6" target="_blank" rel="noopener noreferrer">
                Book Now
              </a>
            </Button>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-blue-900 text-white py-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Contact Us</h3>
              <p>123 Health Street, Medical City, 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@healthplusclinic.com</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
                <Instagram size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}