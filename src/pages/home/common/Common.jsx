import React, { useState } from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Common.css'; 
import faqImage from '../../../assets/s3.jpg'; 

const Common = () => {
  // FAQ data
  const faqs = [
    {
      question: 'What happens during Freshers Week?',
      answer:
        'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
    },
    {
      question: 'What is the transfer application process?',
      answer:
        'The transfer application process involves submitting your academic records, a personal statement, and letters of recommendation. Each institution may have specific requirements, so it’s important to check with the admissions office.',
    },
    {
      question: 'Why should I attend community college?',
      answer:
        'Community colleges offer affordable tuition, flexible schedules, and smaller class sizes. They provide a great opportunity to complete general education requirements before transferring to a four-year university.',
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="common-section py-5 bg-light">
      <div className="container">
        <motion.h2
          className="text-center mb-5 display-4 fw-bold"
          style={{ color: '#021526' }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Some Important FAQ's
        </motion.h2>
        <div className="row">
          <div className="col-md-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="card mb-4 shadow-sm"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="card-body">
                  <div
                    className="d-flex justify-content-between align-items-center"
                    onClick={() => toggleAnswer(index)}
                    style={{ cursor: 'pointer' }}
                  >
                    <h3 className="card-title fw-bold mb-0" style={{ color: '#021526' }}>
                      {faq.question}
                    </h3>
                    <motion.span
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      &#9660; 
                    </motion.span>
                  </div>

                  {expandedIndex === index && (
                    <motion.div
                      className="mt-3"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="card-text" style={{ color: '#555' }}>
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <motion.img
              src={faqImage}
              alt="FAQ"
              className="img-fluid rounded"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              style={{ maxHeight: '500px', width: 'auto' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Common;