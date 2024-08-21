import React from 'react';

const Accordion = ({ title, content, itemKey }) => {
  return (
    <>
      <div className="accordion accordion-flush bg-black" id="accordionExample">
        <div className="accordion-item bg-black ">
          <h2 className="accordion-header bg-black " id={`heading${itemKey}`}>
            <button 
              className="accordion-button bg-black text-white border-none" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target={`#collapse${itemKey}`} 
              aria-expanded="false" 
              aria-controls={`collapse${itemKey}`}
            >
              {title}
            </button>
          </h2>
          <div 
            id={`collapse${itemKey}`} 
            className="accordion-collapse collapse border-none" 
            aria-labelledby={`heading${itemKey}`} 
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body border-none ">
              {content}
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Accordion;
