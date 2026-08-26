import { doctorProfile, faqItems, siteUrl } from "@/config/seo";

export const dynamic = "force-static";

export function GET() {
  const content = `# ${doctorProfile.name}

> ${doctorProfile.description}

Site oficial: ${siteUrl}
Especialidade: ${doctorProfile.specialty}
Registro profissional: ${doctorProfile.crm} | ${doctorProfile.rqe}
Atendimento presencial: ${doctorProfile.clinicName}, ${doctorProfile.address.street}, ${doctorProfile.address.locality} - ${doctorProfile.address.region}, Brasil
Contato: ${doctorProfile.phone}

## Áreas de atendimento

- Condições do antepé, mediopé e retropé
- Lesões, fraturas e artrose do tornozelo e da perna
- Cirurgia do pé e tornozelo
- Lesões esportivas
- Avaliação presencial e telemedicina, conforme adequação do caso

## Ambiente de cuidado

As consultas e o acompanhamento são realizados na Osteo, em Criciúma. Quando há indicação cirúrgica, o procedimento é programado em ambiente hospitalar apropriado, com equipe especializada e protocolos de segurança.

## Perguntas frequentes

${faqItems.map((item) => `### ${item.question}\n${item.answer}`).join("\n\n")}

## Perfis oficiais

- Instagram: ${doctorProfile.links.instagram}
- Doctoralia: ${doctorProfile.links.doctoralia}
- Perfil na Osteo: ${doctorProfile.links.osteo}
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
