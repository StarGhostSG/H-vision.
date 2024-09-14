import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_eq5cnmj', 'template_6dl81po', form.current, '5uEWnoJG40dGi6lwe')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-4">
      <div>
        <label className="block text-white mb-1" htmlFor="user_name">Name</label>
        <input
          type="text"
          id="user_name"
          name="user_name"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#75000d]"
          placeholder="Your Name"
        />
      </div>
      <div>
        <label className="block text-white mb-1" htmlFor="user_email">Email</label>
        <input
          type="email"
          id="user_email"
          name="user_email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#75000d]"
          placeholder="Your Email"
        />
      </div>
      <div>
        <label className="block text-white mb-1" htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#75000d]"
          placeholder="Your Message"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-[#75000d] text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#75000d]"
      >
        Send
      </button>
    </form>
  );
};

export default ContactUs;
