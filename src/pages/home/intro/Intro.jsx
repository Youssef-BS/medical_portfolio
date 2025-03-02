import React from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import jordanPhoto from '../../../assets/Me.png'; 
import '../home.css'; 

const Intro = () => {
  return (
    <div
      className="intro container-fluid text-white d-flex align-items-center"
      style={{
        background: 'linear-gradient(135deg, #021526, #0a3d62)',
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Text */}
          <div className="col-md-6">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mb-4"
            >
              <h2 className="display-1 fw-bold">JORDAN B</h2>
              <h2 className="display-1 fw-bold">PETERSON</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h4 className="display-4">AN EVENING TO TRANSFORM YOUR LIFE</h4>
            </motion.div>
          </div>

          {/* Right Column: Photo with Animated Shape */}
          <div className="col-md-6 d-flex justify-content-center position-relative">
            {/* Animated Shape */}
            <motion.div
              className="shape"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5, type: 'spring', stiffness: 50 }}
            ></motion.div>

            {/* Photo */}
            <motion.img
              src={jordanPhoto}
              alt="Jordan Peterson"
              className="img-fluid rounded position-relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ maxHeight: '80vh', width: 'auto', zIndex: 2 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;