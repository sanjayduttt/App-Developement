import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: 'What are the top tourist destinations?',
      answer: 'Our top tourist destinations include Paris, Tokyo, and New York City.',
    },
    {
      question: 'How do I book a trip with your company?',
      answer: 'To book a trip with us, you can visit our website and use our online booking platform. You can also contact our customer support team for assistance with booking.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods, including credit cards, debit cards, PayPal, and sometimes bank transfers. The accepted payment methods will be displayed during the booking process.',
    },
    {
      question: 'Can I cancel or modify my booking?',
      answer: 'Yes, you can typically cancel or modify your booking, but the terms and conditions may vary depending on the type of trip and our cancellation policy. Please refer to our website or contact us for specific details.',
    },
    {
      question: 'What is included in the trip package?',
      answer: 'The inclusions vary from trip to trip. Common inclusions are accommodation, transportation, meals, guided tours, and activities. You can find detailed information about whats included in the trip package on our website',
    },
    {
      question: 'Is travel insurance included in the package?',
      answer: ' Travel insurance is usually not included in our standard packages, but we strongly recommend purchasing it to protect yourself against unexpected events. You can purchase travel insurance separately or through our partner providers.',
    },
    {
      question: 'How can I get a visa for my destination country?',
      answer: 'Obtaining a visa depends on your nationality and the destination countrys requirements. We can provide information on visa requirements, but its your responsibility to apply for and obtain the necessary visa',
    },
    {
      question: 'What is the best time to visit my destination?',
      answer: 'The best time to visit varies by destination and your preferences. We can provide information on the typical weather conditions and peak seasons, but the choice of travel dates depends on your preferences.',
    },
    {
      question: 'What is your refund policy in case of trip cancellation?',
      answer: 'Our refund policy depends on when you cancel your trip and the specific terms and conditions of your booking. We recommend reviewing our cancellation policy on our website or contacting us for details.',
    },
    {
      question: 'Can you accommodate special dietary preferences or restrictions?',
      answer: 'We do our best to accommodate dietary preferences and restrictions. Please let us know about your dietary needs during the booking process, and we ll work to make suitable arrangements',
    },
    {
      question: 'What should I pack for my trip?',
      answer: 'Packing lists vary based on the destination and type of trip. We provide recommended packing lists on our website or can offer guidance based on your specific trip details.',
    },
    {
      question: 'Do I need vaccinations or health precautions for my trip?',
      answer: 'Health requirements, including vaccinations and precautions, vary by destination. We recommend checking with your healthcare provider and reviewing the health and safety guidelines for your specific destination. Some countries may require proof of certain vaccinations.',
    },
    {
      question: 'How do I get from the airport to my accommodation at my destination?',
      answer: 'We offer airport transfer services as part of some packages. If not included, we can provide information on transportation options, such as taxis, shuttles, or public transportation, to help you reach your accommodation conveniently.',
    },
    {
      question: 'Are there any language barriers I should be aware of at my destination?',
      answer: 'Language barriers can vary depending on the destination. We can provide information on the primary languages spoken and offer tips for communication. Learning a few basic phrases in the local language can be helpful and appreciated by locals.',
    },
    {
      question: 'Can you provide recommendations for activities and attractions at my destination?',
      answer: ' Absolutely! We can provide a list of popular activities, attractions, and excursions at your destination. Additionally, our tour guides often have valuable recommendations based on your interests.',
    },
    {
      question: 'What is your policy on children and family travel?',
      answer: ' We welcome families and children on our trips. However, some tours may have age restrictions or specific guidelines for children. Please check the details of your chosen trip on our website or contact us for family-specific information.',
    },
    
    // Add more FAQ items here
  ]);

  const toggleFAQ = (index) => {
    const newFaqs = [...faqs];
    newFaqs[index].isOpen = !newFaqs[index].isOpen;
    setFaqs(newFaqs);
  };

  return (
    <div className='Faq-con'>
    <div className="faq">
      <h1>Frequently Asked Questions</h1>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index}>
            <div className={`faq-item ${faq.isOpen ? 'open' : ''}`} onClick={() => toggleFAQ(index)}>
              <div className="faq-question">{faq.question}</div>
              {faq.isOpen && <div className="faq-answer">{faq.answer}</div>}
            </div>
          </li>
        ))}
      </ul>
    </div></div>
  );
};

export default FAQ;