const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteUrl = (
  configuredSiteUrl || "https://www.cesarbenetton.com.br"
).replace(/\/$/, "");

export const doctorProfile = {
  name: "Dr. César Augusto Fabris Benetton",
  shortName: "Dr. César Benetton",
  crm: "CRM-SC 14.827",
  rqe: "RQE 11.012",
  specialty: "Ortopedia e traumatologia — pé e tornozelo",
  description:
    "Ortopedista e traumatologista especializado em cirurgia do pé e tornozelo em Criciúma, SC, com mais de 10 anos de atuação e mais de 5 mil cirurgias realizadas.",
  phone: "+55 48 99137-5831",
  phoneHref: "+5548991375831",
  clinicName: "Osteo Ortopedia e Traumatologia",
  address: {
    street: "Rua João Cechinel, 368",
    locality: "Criciúma",
    region: "SC",
    postalCode: "88811-500",
    country: "BR",
  },
  links: {
    instagram: "https://www.instagram.com/cesarbenetton/",
    doctoralia:
      "https://www.doctoralia.com.br/cesar-augusto-fabris-benetton/ortopedista-traumatologista/criciuma",
    osteo: "https://osteoortopedia.com.br/corpo-clinico/dr-cesar-benetton/",
  },
};

export const faqItems = [
  {
    question: "Quais problemas de pé e tornozelo são avaliados?",
    answer:
      "O atendimento inclui condições do antepé, mediopé, retropé, tornozelo e perna, como joanete, fascite plantar, entorses, fraturas, artrose, lesões de tendões e alterações do pé diabético. Cada caso precisa de avaliação individualizada.",
  },
  {
    question: "Onde o Dr. César Benetton atende em Criciúma?",
    answer:
      "O atendimento presencial é realizado na Osteo Ortopedia e Traumatologia, na Rua João Cechinel, 368, em Criciúma, Santa Catarina.",
  },
  {
    question: "Como agendar uma consulta?",
    answer:
      "O agendamento pode ser solicitado pelo WhatsApp. A equipe confirma os horários disponíveis e orienta sobre os dados necessários para a consulta.",
  },
  {
    question: "Há atendimento por telemedicina?",
    answer:
      "Sim. A equipe verifica se a teleconsulta é adequada para a necessidade do paciente e envia as orientações de acesso após o agendamento.",
  },
  {
    question: "Onde são realizados os procedimentos cirúrgicos?",
    answer:
      "Quando há indicação, a cirurgia é programada em ambiente hospitalar apropriado, com equipe especializada, recursos compatíveis com o caso e protocolos de segurança. O Dr. César acompanha o planejamento e a recuperação.",
  },
];
