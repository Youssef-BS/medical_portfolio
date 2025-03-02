import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import Slider from 'react-slick';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'slick-carousel/slick/slick.css'; // Import React Slick CSS
import 'slick-carousel/slick/slick-theme.css'; // Import React Slick Theme CSS
import './Services.css'; // Import custom CSS for additional styling

// Import service images
import psychologyImage from '../../../assets/s.jpg';
import pediatricsImage from '../../../assets/s2.jpg';
import learningSupportImage from '../../../assets/s3.jpg';
import onlineConsultationsImage from '../../../assets/s4.jpg';

const Services = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Service data with images
  const services = [
    {
      title: 'Psychology',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, enim.',
      image: psychologyImage,
    },
    {
      title: 'Pediatrics',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, enim.',
      image: pediatricsImage,
    },
    {
      title: 'Learning Support',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, enim.',
      image: learningSupportImage,
    },
    {
      title: 'Online Consultations',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, enim.',
      image: onlineConsultationsImage,
    },
  ];

  return (
    <div className="services-section py-5 bg-light">
      <div className="container">
        <motion.h2
          className="text-center mb-5 display-4 fw-bold"
          style={{ color: '#021526' }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="text-center mb-5 lead"
          style={{ color: '#555' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          We Provide the Best Services
        </motion.p>

        {/* Slider */}
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="px-3">
              <motion.div
                className="card h-100 text-center p-4 shadow-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="card-img-top mb-4 rounded"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <h3 className="fw-bold mb-3" style={{ color: '#021526' }}>
                  {service.title}
                </h3>
                <p style={{ color: '#555' }}>{service.description}</p>
                <motion.button
                  className="pick btn mt-3"
                >
                  Pick a Plan
                </motion.button>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;