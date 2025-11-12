import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      {/* Header Section */}
      <section className="text-center py-20 bg-gradient-to-b from-red-600 to-black shadow-lg">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact <span className="text-white">Us</span>
        </motion.h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto px-4">
          We’d love to hear from you! Reach out to us for support, partnership, or collaboration.
        </p>
      </section>

      {/* Info Section */}
      <section className="flex flex-col md:flex-row justify-around items-center py-16 px-6 md:px-20 bg-black">
        <motion.div
          className="flex flex-col items-center text-center mb-12 md:mb-0 hover:scale-105 transition-transform"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <FaMapMarkerAlt className="text-red-500 text-5xl mb-4" />
          <h3 className="text-2xl font-bold mb-2 text-white">Our Location</h3>
          <p className="text-gray-300 leading-relaxed">
            Mai Tower, Al Nahda - Dubai
          </p>

           <p className="text-gray-300 leading-relaxed">
             Kollam Kerala -India
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center text-center mb-12 md:mb-0 hover:scale-105 transition-transform"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <FaPhoneAlt className="text-red-500 text-5xl mb-4" />
          <h3 className="text-2xl font-bold mb-2 text-white">Call Us</h3>
          <p className="text-gray-300">7306950143</p>
         
        </motion.div>

        <motion.div
          className="flex flex-col items-center text-center hover:scale-105 transition-transform"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <FaEnvelope className="text-red-500 text-5xl mb-4" />
          <h3 className="text-2xl font-bold mb-2 text-white">Email</h3>
          <p className="text-gray-300">support@makeyourbrand.ae</p>
          <p className="text-gray-300">info@makeyourbrand.ae</p>
        </motion.div>
      </section>

      {/* Map Section */}
      <section className="relative w-full h-[350px] grid grid-col-2 overflow-hidden shadow-lg">
      <p className="text-center text-md font-raleway font-semibold">UAE</p>
        <iframe
          title="Cochin Computing Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.486507271021!2d55.36278617538482!3d25.287853577652765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d006498af09%3A0xbfdfa7020f9c5cde!2sHome%20UAE!5e0!3m2!1sen!2sin!4v1762936861899!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <div className="mt-10">
            <p className="text-center text-md font-raleway font-semibold">INDIA</p>
              <iframe
          title="Cochin Computing Location"
          src=" https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d44597.72238254596!2d76.63884986730056!3d8.887123981172701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e2!4m0!4m5!1s0x3b05e30f4115d7ff%3A0xac4e7cb060dd4832!2sSupreme%20Supermarket!3m2!1d8.8916963!2d76.6805148!5e0!3m2!1sen!2sin!4v1762937053128!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        </div>
     


      </section>

     

      {/* Social Media Section */}
      <section className="bg-gradient-to-t from-black to-red-700 py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">Follow Us</h2>
        <div className="flex justify-center space-x-8">
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com/share/1FaFDuYAXj/" },
            { icon: <FaInstagram />, link: "https://instagram.com" },
            { icon: <FaTwitter />, link: "https://twitter.com" },
            { icon: <FaLinkedin />, link: "https://linkedin.com" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white hover:text-red-400 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 text-center py-6 border-t border-gray-700">
        © {new Date().getFullYear()} makeyourbrand Pvt. Ltd. All Rights Reserved.
      </footer>
    </div>
  );
};

export default ContactUs;
