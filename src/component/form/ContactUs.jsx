import React from 'react';

const ContactUs = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen">
          <div className="relative flex w-full max-w-5xl bg-white rounded-lg shadow-md overflow-hidden">
          <div className="hidden lg:block lg:w-1/2 bg-cover" style={{ backgroundImage: 'url(/image/picture.jpeg)' }}>
        </div>

      <form className="bg-white p-8 rounded shadow-md max-w-xl w-full">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <p className='text-center text-gray-700 mb-8'>How can we help you?</p>
        <div className="mb-6">
          <label className="block text-gray-700">Username</label>
          <input type="text" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" placeholder="Your username" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">Email</label>
          <input type="email" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" placeholder="Your Email"/>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">Message</label>
          <textarea className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" rows="6" placeholder="Your Message"></textarea>
        </div>
        <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 transition duration-200" style={{ backgroundColor: '#7D806A'}} >
          Send Message
        </button>
      </form>
    </div>
    </div>
  );
}

export default ContactUs;
