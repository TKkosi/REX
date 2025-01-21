import React from "react";

const Mentions: React.FC = () => {
  const mentions = [
    {
      id: 1,
      author: "John Doe",
      platform: "Twitter",
      content: "Loving the new analytics tools from Rex! #GameChanger",
      date: "2025-01-20",
      sentiment: "positive",
    },
    {
      id: 2,
      author: "Jane Smith",
      platform: "Instagram",
      content: "Still waiting for better updates from @RexAnalytics.",
      date: "2025-01-19",
      sentiment: "negative",
    },
    {
      id: 3,
      author: "TechReview",
      platform: "Facebook",
      content: "A detailed review of Rex Analytics: Great tool for SMBs.",
      date: "2025-01-18",
      sentiment: "neutral",
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Page Header */}
      <div className="bg-white shadow p-4">
        <h1 className="text-2xl font-bold text-gray-800">Mentions</h1>
        <p className="text-sm text-gray-600">Track and analyze your brand mentions across platforms.</p>
      </div>

      {/* Filters Section */}
      <div className="bg-gray-50 border-t border-b border-gray-200 p-4">
        <div className="flex flex-wrap gap-4">
          <select
            className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-green-300"
          >
            <option value="">All Platforms</option>
            <option value="twitter">Twitter</option>
            <option value="facebook">Facebook</option>
            <option value="instagram">Instagram</option>
          </select>
          <select
            className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-green-300"
          >
            <option value="">All Sentiments</option>
            <option value="positive">Positive</option>
            <option value="neutral">Neutral</option>
            <option value="negative">Negative</option>
          </select>
          <input
            type="date"
            className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-green-300"
          />
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Apply Filters
          </button>
        </div>
      </div>

      {/* Mentions List */}
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="space-y-4">
          {mentions.map((mention) => (
            <div
              key={mention.id}
              className="p-4 bg-white rounded-lg shadow flex items-start justify-between"
            >
              {/* Mention Details */}
              <div>
                <h2 className="text-lg font-semibold">{mention.author}</h2>
                <p className="text-gray-600">{mention.platform}</p>
                <p className="mt-2 text-gray-800">{mention.content}</p>
                <p className="mt-2 text-sm text-gray-500">
                  {new Date(mention.date).toLocaleDateString()}
                </p>
              </div>

              {/* Sentiment */}
              <div>
                <span
                  className={`inline-block px-3 py-1 rounded-md text-sm ${
                    mention.sentiment === "positive"
                      ? "bg-green-100 text-green-700"
                      : mention.sentiment === "neutral"
                      ? "bg-gray-100 text-gray-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {mention.sentiment.charAt(0).toUpperCase() + mention.sentiment.slice(1)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mentions;
