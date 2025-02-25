import React from 'react';
import './Faq.scss';

const faqData = [
    {
        question: "What is the conversion % of MetaForm?",
        answer: "At the moment, I'm pretty happy where I am. Currently I am not looking for any full-time opportunities. But that being said, I am always open to discuss interesting opportunities, collaborations and other fun stuff. If you're interested in discussing a project, making something great together, please fill the form above. Simply want to get in touch?"
    },
    {
        question: "How do your quote pricing works and when can we get on call?",
        answer: "We offer flexible pricing based on project scope and requirements. Schedule a call through our booking system to discuss your specific needs and get a detailed quote."
    },
    {
        question: "Can you facelift my design?",
        answer: "Yes! We specialize in modernizing and improving existing designs while maintaining brand identity. Let's discuss your vision and requirements."
    },
    {
        question: "What technologies do you work with?",
        answer: "We work with modern web technologies including React, Vue, Angular, Node.js, and various other frameworks and tools depending on project needs."
    }
];

function Faq() {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            <div className="faq-content">
                <div className="faq-header">
                    <h1>Frequently Asked Questions</h1>
                    <p>A community for India's investors hang out and talk about investments, personal finance</p>
                </div>

                <div className="faq-list">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="faq-question">
                                <h3>{faq.question}</h3>
                                <ArrowSVG rotate={activeIndex === index ? 180 : 0} />
                            </div>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Faq;

const ArrowSVG = ({ rotate }) => (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ height: "30px", transform: `rotate(${rotate}deg)` }} viewBox="0 0 24 24"><path d="m0 0h24v24h-24z" fill="#fff" opacity="0" /><path d="m12 16a1 1 0 0 1 -.64-.23l-6-5a1 1 0 1 1 1.28-1.54l5.36 4.48 5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1 -.14 1.46l-6 4.83a1 1 0 0 1 -.63.17z" fill="#a1a1a1" /></svg>
)