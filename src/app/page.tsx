'use client';

import Link from 'next/link';
import { ArrowRight, BarChart3, Clock, CreditCard } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg"></div>
            <span className="text-xl font-bold text-gray-900">J&D Sync</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-gray-700 hover:text-gray-900 transition">
              Sign In
            </Link>
            <Link href="/signup" className="btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Your Micro CRM,<br className="hidden sm:block" /> Simplified
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Manage clients, invoices, and payments in under 60 seconds. Built for solo freelancers who value their time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="btn-primary inline-flex items-center gap-2">
              Start Free <ArrowRight size={20} />
            </Link>
            <Link href="#features" className="btn-secondary inline-flex items-center gap-2">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Powerful Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <BarChart3 className="text-primary-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Client Management</h3>
              <p className="text-gray-600">Organize all your client information in one place with instant access.</p>
            </div>
            <div className="card">
              <CreditCard className="text-primary-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Invoice Generation</h3>
              <p className="text-gray-600">Create professional invoices with automatic payment links via Stripe.</p>
            </div>
            <div className="card">
              <Clock className="text-primary-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Payment Tracking</h3>
              <p className="text-gray-600">Real-time payment updates and automated reminders for unpaid invoices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-primary-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to streamline your workflow?</h2>
          <p className="text-lg mb-8 opacity-90">Join freelancers who are saving hours every week with J&D Sync</p>
          <Link href="/signup" className="inline-block px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition">
            Get Started Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 J&D Sync by JD Groups. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
