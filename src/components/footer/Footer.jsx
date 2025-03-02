import React from 'react';
import { motion } from 'framer-motion'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Footer.css'; 
import logo from '../../assets/shapeLogo.png'; 
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="footer-section py-5 text-white" style={{ backgroundColor: 'rgb(2, 21, 38)' }}>
      <div className="container">
        <div className="row">
          <motion.div
            className="col-md-3 mb-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img src={logo} alt="Logo" className="img-fluid mb-4" style={{ maxWidth: '150px' }} />
            <h5 className="mb-3">Follow Us</h5>
            <div className="d-flex gap-3">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <FaInstagram size={24} className="text-white" />
              </motion.a>
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <FaFacebook size={24} className="text-white" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <FaTwitter size={24} className="text-white" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <FaLinkedin size={24} className="text-white" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="col-md-3 mb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h5 className="mb-4">Useful Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/about" className="text-white text-decoration-none">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/services" className="text-white text-decoration-none">Services</a>
              </li>
              <li className="mb-2">
                <a href="/faqs" className="text-white text-decoration-none">FAQ’s</a>
              </li>
              <li className="mb-2">
                <a href="/blogs" className="text-white text-decoration-none">Blogs</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="text-white text-decoration-none">Contact</a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="col-md-3 mb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h5 className="mb-4">ABSAT THERAPY</h5>
            <p className="text-white">
              Dolor amet sit justo amet elit; cilia ipsum elit! Est Lorem ipsum dolor sit amet,
              consectetur adipiscing...
            </p>
          </motion.div>
          <motion.div
            className="col-md-3 mb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h5 className="mb-4">Address</h5>
            <p className="text-white">123 Street, New York, USA</p>
            <h5 className="mb-4">Mail Us</h5>
            <p className="text-white">librarypass@gmail.com</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;