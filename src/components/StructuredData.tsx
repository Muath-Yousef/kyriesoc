export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://socroot.com/#website",
        name: "SOCRoot",
        url: "https://socroot.com",
        description:
          "A pre-production cybersecurity engineering initiative focused on evidence-driven SOC workflows and human-controlled automation.",
        creator: { "@id": "https://socroot.com/#person" },
      },
      {
        "@type": "Person",
        "@id": "https://socroot.com/#person",
        name: "Mu'ath Yousef",
        url: "https://socroot.com/about",
        sameAs: [
          "https://github.com/Muath-Yousef",
          "https://www.linkedin.com/in/muath-ysf",
        ],
        knowsAbout: [
          "Security operations",
          "Security automation",
          "Incident response",
          "Cybersecurity architecture",
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
