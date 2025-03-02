import React from 'react';
import { motion } from 'framer-motion'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import jordanPhoto from '../../../assets/about.png'; 
import "./About.css"

const About = () => {
  return (
    <div className="about container-fluid py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Photo */}
          <div className="col-md-6">
            <motion.img
              src={jordanPhoto}
              alt="Dr. Jordan B. Peterson"
              className="img-fluid rounded"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              style={{ maxHeight: '600px', width: 'auto', border: 'none' }} 
            />
          </div>

          {/* Right Column: Description */}
          <div className="col-md-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h2 className="display-4 fw-bold mb-4" style={{ color: '#021526' }}>
                ABOUT
              </h2>
              <p className="lead" style={{ color: '#333' }}>
                Dr. Jordan B. Peterson is a renowned psychologist, author, and online educator.
              </p>
              <p style={{ color: '#555' }}>
                His bestselling books, including <strong>"12 Rules for Life"</strong> and{" "}
                <strong>"Beyond Order"</strong>, have sold millions of copies worldwide. Dr.
                Peterson's lectures and podcasts consistently attract large audiences, providing
                valuable insights into topics such as mythology, psychology, and personal
                development.
              </p>
              <p style={{ color: '#555' }}>
                He has taught at prestigious universities, published numerous scientific papers, and
                developed online programs that help individuals explore their personalities and
                improve their lives. With a diverse background and adventurous spirit, Dr. Peterson
                has engaged in various activities and occupations, bringing a wealth of experiences
                to his work. His influential presence extends across social media platforms, and he
                continues to make significant contributions to the field of psychology and personal
                growth.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;