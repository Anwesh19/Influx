import React, { useEffect, useState } from 'react';
import Accordion from '../../componnets/Accordian';
import './Faq.css';
import data from '../../FaqData.json'

const Faq = () => {
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    setFaqData(data); 
  }, []);

  return (
    <div className='bg-black faq-main text-white'>
      <div className='faq mx-auto p-4'>
        <h1>Frequently Asked Questions</h1>
        <hr />
        <div className="accordion" id="faqAccordion">
          {faqData.map((item) => (
            <Accordion key={item.id} itemKey={item.id} title={item.title} content={item.content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
