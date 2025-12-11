import { useState } from 'react';
const questions = [
    {
        title: 'Is my technology allowed on tech?',
        text: `As a premier international transport service provider, we specialize in
            seamlessly connecting businesses and individuals with efficient and
            reliable transportation solutions across borders.`
    },
    {
        title: 'What types of cargo can your service handle?',
        text: `As a premier international transport service provider, we specialize in
            seamlessly connecting businesses and individuals with efficient and
            reliable transportation solutions across borders.`
    },
    {
        title: 'What are the typical stages of a logistic project?',
        text: `As a premier international transport service provider, we specialize in
            seamlessly connecting businesses and individuals with efficient and
            reliable transportation solutions across borders.`
    },
    {
        title: 'Is my technology allowed on tech?',
        text: `As a premier international transport service provider, we specialize in
            seamlessly connecting businesses and individuals with efficient and
            reliable transportation solutions across borders.`
    },
    {
        title: 'Can you assist with customs clearance procedures?',
        text: `As a premier international transport service provider, we specialize in
            seamlessly connecting businesses and individuals with efficient and
            reliable transportation solutions across borders.`
    }
];
const ServiceFaq = ({ faqQuestions = questions || [] }) => {
    const [activeIndex, setActiveIndex] = useState(0); // First item open by default



    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div className="service-details__faq">
            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                {faqQuestions.map((question, index) => (
                    <div
                        className={`accrodion${activeIndex === index ? ' active' : ''}`}
                        key={index}
                    >
                        <div className="accrodion-title" onClick={() => toggleAccordion(index)} style={{ cursor: 'pointer' }}>
                            <h4>{question?.title}</h4>
                        </div>
                        {activeIndex === index && (
                            <div className="accrodion-content">
                                <div className="inner">
                                    <p>
                                        {
                                            question?.text || <>As a premier international transport service provider, we specialize in
                                                seamlessly connecting businesses and individuals with efficient and
                                                reliable transportation solutions across borders.</>
                                        }
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceFaq;