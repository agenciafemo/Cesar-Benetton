import { doctorProfile, faqItems, siteUrl } from "@/config/seo";

function safeJsonLd(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function StructuredData() {
  const physicianId = `${siteUrl}/#medico`;
  const clinicId = `${siteUrl}/#clinica`;
  const websiteId = `${siteUrl}/#website`;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: doctorProfile.shortName,
        inLanguage: "pt-BR",
        publisher: { "@id": physicianId },
      },
      {
        "@type": "MedicalClinic",
        "@id": clinicId,
        name: doctorProfile.clinicName,
        url: doctorProfile.links.osteo,
        telephone: doctorProfile.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: doctorProfile.address.street,
          addressLocality: doctorProfile.address.locality,
          addressRegion: doctorProfile.address.region,
          postalCode: doctorProfile.address.postalCode,
          addressCountry: doctorProfile.address.country,
        },
      },
      {
        "@type": "Physician",
        "@id": physicianId,
        name: doctorProfile.name,
        url: siteUrl,
        image: `${siteUrl}/cesar-benetton-sobre.jpg`,
        description: doctorProfile.description,
        telephone: doctorProfile.phone,
        medicalSpecialty: "https://schema.org/Orthopedic",
        identifier: [doctorProfile.crm, doctorProfile.rqe],
        worksFor: { "@id": clinicId },
        address: {
          "@type": "PostalAddress",
          streetAddress: doctorProfile.address.street,
          addressLocality: doctorProfile.address.locality,
          addressRegion: doctorProfile.address.region,
          postalCode: doctorProfile.address.postalCode,
          addressCountry: doctorProfile.address.country,
        },
        areaServed: {
          "@type": "City",
          name: "Criciúma",
          containedInPlace: {
            "@type": "State",
            name: "Santa Catarina",
          },
        },
        knowsAbout: [
          "Cirurgia do pé e tornozelo",
          "Ortopedia e traumatologia",
          "Lesões esportivas",
          "Joanete",
          "Fascite plantar",
          "Entorse de tornozelo",
          "Fraturas do pé e tornozelo",
        ],
        sameAs: [
          doctorProfile.links.instagram,
          doctorProfile.links.doctoralia,
          doctorProfile.links.osteo,
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#pagina`,
        url: siteUrl,
        name: `${doctorProfile.shortName} | Ortopedista de pé e tornozelo em Criciúma`,
        description: doctorProfile.description,
        inLanguage: "pt-BR",
        isPartOf: { "@id": websiteId },
        about: { "@id": physicianId },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#perguntas-frequentes`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      dangerouslySetInnerHTML={{ __html: safeJsonLd(data) }}
      type="application/ld+json"
    />
  );
}
