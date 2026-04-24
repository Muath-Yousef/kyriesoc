export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://socroot.com/#organization",
        "name": "SOC Root",
        "url": "https://socroot.com",
        "logo": "https://socroot.com/logo.png",
        "description": "Enterprise cybersecurity for businesses globally.",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "availableLanguage": ["en"]
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://socroot.com/#service",
        "name": "SOC Root Cybersecurity Services",
        "url": "https://socroot.com/services",
        "description": "Continuous pentesting, SIEM monitoring, NCA ECC 2.0 compliance, and security awareness training.",
        "provider": {
          "@id": "https://socroot.com/#organization"
        },
        "priceRange": "$$$"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
