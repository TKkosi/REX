import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold md:text-6xl">
            Gain Insights, Empower Your Business
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            Rex helps you monitor, analyze, and grow your social media presence
            with real-time analytics.
          </p>
          <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600">
            Get Started Free
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Why Choose Rex?
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Real-Time Analytics</h3>
              <p className="mt-2 text-gray-600">
                Monitor your social media mentions and trends as they happen.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Customizable Reports</h3>
              <p className="mt-2 text-gray-600">
                Generate insightful reports tailored to your needs.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Comprehensive Coverage</h3>
              <p className="mt-2 text-gray-600">
                Track mentions across all major social platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-500 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white">
            Start Analyzing Today
          </h2>
          <p className="mt-4 text-lg text-green-100">
            Join thousands of businesses using Rex to grow their online presence.
          </p>
          <button className="mt-6 bg-white text-green-500 px-6 py-3 rounded-md hover:bg-gray-200">
            Sign Up Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
