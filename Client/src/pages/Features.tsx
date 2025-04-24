import React from "react";
import { FaChartLine, FaSearch, FaBell, FaUsers } from "react-icons/fa";

const Features: React.FC = () => {
  const features = [
    {
      id: 1,
      title: "Real-Time Brand Monitoring",
      description:
        "Stay updated with mentions of your brand, competitors, or keywords in real-time across all major platforms.",
      icon: <FaSearch className="text-green-500 text-4xl" />,
    },
    {
      id: 2,
      title: "Sentiment Analysis",
      description:
        "Understand how your audience feels about your brand with AI-driven sentiment analysis tools.",
      icon: <FaChartLine className="text-green-500 text-4xl" />,
    },
    {
      id: 3,
      title: "Custom Alerts",
      description:
        "Get instant notifications for mentions, spikes in activity, or critical sentiment changes.",
      icon: <FaBell className="text-green-500 text-4xl" />,
    },
    {
      id: 4,
      title: "Collaborative Tools",
      description:
        "Work with your team seamlessly to analyze mentions, share insights, and take action.",
      icon: <FaUsers className="text-green-500 text-4xl" />,
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Features</h2>
          <p className="mt-4 text-gray-600">
            Explore the tools and features that help you track, analyze, and improve your brand's online presence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="mb-4">{feature.icon}</div>
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              {/* Description */}
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
