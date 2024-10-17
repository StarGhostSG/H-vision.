import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { resourcesLinks, communityLinks } from "../constants";

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
        <label className="block text-white mb-1" htmlFor="user_email">Email</label >
        <input
          type="email"
          id="user_email"
          name="user_email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#75000d]"
          placeholder="Votre Email"
        />
      </div>
      <div>
        <label className="block text-white mb-1" htmlFor="message">message</label>
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
  );
};

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-red-700" id="contact">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 px-4">
          <h3 className="text-md font-semibold mb-4 text-[#75000d]">Nous Contacter</h3>
          <ContactUs />
        </div>

        <div className="w-full lg:w-1/12 flex justify-center items-center">
          <div className="h-full border-l border-red-700"></div>
        </div>

        <div className="w-full lg:w-5/12 px-4">
          <h3 className="text-md font-semibold mb-4 text-[#75000d]">Nous Suivre</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:text-[#75000d]"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
         
          <h3 className="text-md font-semibold mb-4 text-[#75000d] mt-6">Communauté</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:text-[#75000d]"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
