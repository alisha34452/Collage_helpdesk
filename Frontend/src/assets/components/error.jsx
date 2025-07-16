import React from 'react';

const Error = () => {
  return (
    <div
      className="min-h-screen bg-white flex flex-col items-center justify-center text-center"
      style={{ padding: '48px 24px' }}
    >
      <div className="max-w-xl w-full">
        {/* Error Code */}
        <h1
          className="text-red-600 font-extrabold text-7xl"
          style={{ marginBottom: '16px' }}
        >
          404
        </h1>

        {/* Title */}
        <h2
          className="text-3xl font-semibold text-gray-800"
          style={{ marginBottom: '8px' }}
        >
          Page Not Found
        </h2>

        {/* Description */}
        <p
          className="text-lg text-gray-600"
          style={{ marginBottom: '24px' }}
        >
          Oops! This page is currently under development or doesn’t exist.
        </p>

        {/* Dev Notice */}
        <div
          className="bg-yellow-50 border border-yellow-200 text-yellow-800 text-sm rounded-lg"
          style={{ padding: '16px', marginBottom: '24px' }}
        >
          🚧 This feature is coming soon. Please check back later.
        </div>

        {/* CTA Button */}
        <a
          href="/"
          className="inline-block bg-blue-600 text-white font-medium rounded-md shadow-md hover:bg-blue-700 transition"
          style={{ padding: '12px 24px' }}
        >
          ← Back to Home
        </a>
      </div>
    </div>
  );
};

export default Error;
