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
    <div className="mt-20 bg-[#121212] p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide text-[#75000d] mb-6">
        Contactez Nous
      </h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div>
          <label className="block text-white mb-1" htmlFor="user_name">Nom</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#75000d]"
            placeholder="Votre Nom"
          />
        </div>
        <div>
          <label className="block text-white mb-1" htmlFor="user_email">Email</label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#75000d]"
            placeholder="Votre Email"
          />
        </div>
        <div>
          <label className="block text-white mb-1" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#75000d]"
            placeholder="Votre Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#75000d] text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#75000d]"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default ContactUs;