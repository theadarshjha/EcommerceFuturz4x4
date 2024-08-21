import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold text-center">Contact Us</h2>
      <form className="mt-4 space-y-4">
        <div>
          <label className="block">Name</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block">Email</label>
          <input type="email" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block">Message</label>
          <textarea className="w-full p-2 border rounded"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
