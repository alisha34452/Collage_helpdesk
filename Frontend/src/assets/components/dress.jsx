import React from 'react';

const Dress = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 !p-4 !space-y-8">
      {/* PDF Viewer */}
      <div className="w-full md:max-w-[80vw] h-[80vh] border-2 border-gray-300 shadow-lg rounded-lg overflow-hidden">
        <iframe
          src="/dress_2k25.pdf"
          title="Dress Code PDF"
          className="w-full h-full"
        ></iframe>
      </div>

      {/* Store Location Heading */}
      <h2 className="text-2xl font-semibold text-gray-800">📍 Store Location</h2>

      {/* Google Map */}
      <div className="w-full md:max-w-[80vw] h-[450px] border-2 border-gray-300 !shadow-lg !rounded-lg !overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.2742855589054!2d87.95101149999999!3d26.1041499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e516b8d15d9ebb%3A0xcca9bbe37fab703d!2sSHREE%20ANAND!5e1!3m2!1sen!2sin!4v1753630011842!5m2!1sen!2sin"
          title="Location Map"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Store Contact Info */}
      <div className="w-full md:max-w-[80vw] !p-6 bg-white rounded-lg shadow-md text-center">
        <h3 className="text-xl font-bold text-gray-800 !mb-2">Shree Anand</h3>
        <p className="text-gray-700">A house of all kinds of cloths</p>
        <p className="!mt-4 text-gray-800 font-medium">Subhash Agarwal</p>
        <p className="text-gray-600">📞 <a href="tel:9672014247">9672014247</a> , <a href="tel:9430286122">9430286122</a> </p>
        <a href='https://maps.app.goo.gl/gc7TZWzqL8ANfqnn8' className="text-gray-600">📍 Saudagarpatti Road, Kishanganj - 855108</a>
        <p className="text-gray-500 mt-2">GST No: 10ACJPA5916G1Z6</p>
      </div>
    </div>
  );
};

export default Dress;
