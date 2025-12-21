// Centralized FAQ data for the entire website
export interface FAQItem {
  id: number;
  category: string;
  question: string;
  answer: string;
}

export const allFAQs: FAQItem[] = [
  {
    id: 0,
    category: "General",
    question: "What is Star MS Logistics?",
    answer: "Star MS Logistics is a professional freight brokerage providing reliable and transparent shipping solutions across the U.S."
  },
  {
    id: 1,
    category: "General",
    question: "Are you a licensed freight broker?",
    answer: "Yes, we operate in compliance with FMCSA regulations and follow all federal freight brokerage requirements."
  },
  {
    id: 2,
    category: "General",
    question: "What areas do you serve?",
    answer: "We provide freight services across the entire United States through our trusted network of carriers."
  },
  {
    id: 3,
    category: "General",
    question: "What types of freight do you specialize in?",
    answer: "We handle dry van, flatbed, reefer, hotshot, oversized/overweight, machinery, consumer goods, industrial materials, and specialized loads."
  },
  {
    id: 4,
    category: "General",
    question: "Do you work with businesses or individuals?",
    answer: "Both. We serve small businesses, large corporations, and individual customers."
  },
  {
    id: 5,
    category: "General",
    question: "How much industry experience do you have?",
    answer: "Our team has extensive experience in the freight industry, having collaborated with multiple major U.S. brokerages and hundreds of clients."
  },
  {
    id: 6,
    category: "Booking",
    question: "How do I get a quote for my shipment?",
    answer: "You can request a quote through our website's Request Quote page or contact us directly via email or phone."
  },
  {
    id: 7,
    category: "Booking",
    question: "What information do I need to provide for a quote?",
    answer: "Pickup location, delivery location, freight type, dimensions, weight, and required delivery date."
  },
  {
    id: 8,
    category: "Booking",
    question: "Are your rates competitive?",
    answer: "Yes. We offer cost-effective pricing without compromising service quality or safety."
  },
  {
    id: 9,
    category: "Booking",
    question: "Do your rates include all charges?",
    answer: "Absolutely — we maintain complete transparency with no hidden fees."
  },
  {
    id: 10,
    category: "Operations",
    question: "How quickly can you arrange a truck?",
    answer: "Same-day and next-day dispatch options are available depending on the location and equipment type."
  },
  {
    id: 11,
    category: "Operations",
    question: "Do you offer tracking for shipments?",
    answer: "Yes, we provide end-to-end shipment tracking and constant status updates."
  },
  {
    id: 12,
    category: "Operations",
    question: "Do you offer expedited or hotshot services?",
    answer: "Yes, we provide fast, urgent, and time-critical freight options."
  },
  {
    id: 13,
    category: "Operations",
    question: "Can Star MS Logistics handle oversized or overweight loads?",
    answer: "Yes, we work with specialized carriers experienced in heavy and oversized cargo."
  },
  {
    id: 14,
    category: "Operations",
    question: "Do you handle temperature-controlled (reefer) shipments?",
    answer: "Yes, we arrange reefer loads for perishable, frozen, and temperature-sensitive goods."
  },
  {
    id: 15,
    category: "Operations",
    question: "Can I schedule recurring shipments?",
    answer: "Yes, we support regular, contract-based, and long-term shipping needs."
  },
  {
    id: 16,
    category: "Operations",
    question: "Do you provide weekend or after-hours support?",
    answer: "Yes, our team is accessible for urgent shipments and customer support beyond standard hours."
  },
  {
    id: 17,
    category: "Operations",
    question: "How do you choose your carriers?",
    answer: "We work only with vetted, insured, and FMCSA-compliant carriers to ensure safety and professionalism."
  },
  {
    id: 18,
    category: "Compliance",
    question: "Are you fully insured?",
    answer: "Carriers we use are fully insured according to federal transportation regulations."
  },
  {
    id: 19,
    category: "Compliance",
    question: "Will I receive shipping documents for every load?",
    answer: "Yes — you will receive BOLs, PODs, invoices, and any additional required paperwork."
  },
  {
    id: 20,
    category: "Compliance",
    question: "Can you handle loads requiring permits?",
    answer: "Yes, our team helps coordinate permits for oversized and restricted shipments."
  },
  {
    id: 21,
    category: "Compliance",
    question: "Do you maintain safety and compliance standards?",
    answer: "Absolutely — safety, transparency, and compliance are the foundation of our operations."
  },
  {
    id: 22,
    category: "Support",
    question: "How do I contact your support team?",
    answer: "Through email, phone, WhatsApp, or our Contact page."
  },
  {
    id: 23,
    category: "Support",
    question: "What makes Star MS Logistics different from other brokers?",
    answer: "Our experience, transparency, strong carrier network, and customer-first service mindset."
  },
  {
    id: 24,
    category: "Support",
    question: "Do you offer dedicated account managers?",
    answer: "Yes, for regular or high-volume clients."
  },
  {
    id: 25,
    category: "Support",
    question: "Can I get updates during transit?",
    answer: "Yes, we provide proactive updates throughout the entire shipping process."
  },
  {
    id: 26,
    category: "Special",
    question: "Do you ship vehicles or heavy machinery?",
    answer: "Yes, we arrange transport for cars, equipment, and industrial machinery."
  },
  {
    id: 27,
    category: "Special",
    question: "Do you handle construction and industrial materials?",
    answer: "Yes, we regularly move construction supplies, steel, lumber, and industrial products."
  },
  {
    id: 28,
    category: "Special",
    question: "Can you move fragile or high-value items?",
    answer: "Yes, we arrange specialized equipment and trained carriers for sensitive cargo."
  },
  {
    id: 29,
    category: "Special",
    question: "Do you offer transportation for e-commerce or consumer goods?",
    answer: "Yes, we handle a wide range of consumer products and general commodities."
  },
  {
    id: 30,
    category: "Payment",
    question: "What payment methods do you accept?",
    answer: "We accept multiple secure payment options (bank transfer, business payments, etc.)"
  },
  {
    id: 31,
    category: "Payment",
    question: "Do you require upfront payment?",
    answer: "Depending on the shipment type and schedule, partial or full payment may be required."
  },
  {
    id: 32,
    category: "Payment",
    question: "What is your cancellation policy?",
    answer: "Cancellations depend on timing, dispatch status, and carrier arrangements."
  }
];

// Service-specific FAQ filters
export const getServiceFAQs = (serviceType: string): { title: string; text: string }[] => {
  let relevantFAQs: FAQItem[] = [];

  switch (serviceType) {
    case "LTL": // Less Than Truckload
      relevantFAQs = allFAQs.filter(faq => 
        [0, 6, 7, 8, 9, 10, 11, 15, 17, 22].includes(faq.id)
      );
      break;

    case "FTL": // Full Truckload
      relevantFAQs = allFAQs.filter(faq => 
        [0, 6, 8, 9, 10, 11, 12, 15, 17, 22].includes(faq.id)
      );
      break;

    case "Interstate": // Interstate Transport
      relevantFAQs = allFAQs.filter(faq => 
        [2, 6, 8, 10, 11, 12, 17, 19, 21, 22].includes(faq.id)
      );
      break;

    case "Intrastate": // Intrastate Transport
      relevantFAQs = allFAQs.filter(faq => 
        [2, 6, 8, 10, 11, 15, 17, 22, 24, 25].includes(faq.id)
      );
      break;

    case "Reefer": // Reefer Transport
      relevantFAQs = allFAQs.filter(faq => 
        [3, 6, 8, 10, 11, 14, 17, 18, 21, 22].includes(faq.id)
      );
      break;

    case "AirConditioned": // Air-Conditioned Transport
      relevantFAQs = allFAQs.filter(faq => 
        [3, 6, 8, 10, 11, 14, 17, 21, 28, 22].includes(faq.id)
      );
      break;

    default:
      // Return general FAQs
      relevantFAQs = allFAQs.filter(faq => 
        [0, 1, 2, 6, 8, 11, 17, 21, 22, 23].includes(faq.id)
      );
  }

  // Convert to the format expected by ServiceFaq component
  return relevantFAQs.map(faq => ({
    title: faq.question,
    text: faq.answer
  }));
};

