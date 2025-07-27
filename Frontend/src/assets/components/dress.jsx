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

      {/* Google Map */}
      <div className="w-full md:max-w-[80vw] h-[450px] border-2 border-gray-300 !my-4 shadow-lg rounded-lg overflow-hidden">
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
    </div>
  );
};

export default Dress;
