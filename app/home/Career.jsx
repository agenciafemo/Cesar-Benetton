import React from "react";
import Image from "next/image";

import CesarBenettonPortrait from "@/public/cesar-benetton-sobre.jpg";
import OsteoFacade from "@/public/osteo-fachada.webp";

function Career() {
  const professionalList = [
    "Especialização em cirurgia do pé e tornozelo pelo Instituto de Ortopedia e Traumatologia de Santa Catarina.",
    "Fellow de aperfeiçoamento em cirurgia do pé e tornozelo no Medstar Union Memorial Hospital, Baltimore, MD, USA.",
    "Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT).",
    "Membro Titular da Associação Brasileira de Medicina e Cirurgia do Tornozelo e Pé (ABTPé) – Diretor Regional de Santa Catarina (2022-2023).",
    "Atuação na área esportiva - Pós Graduado em Fisiologia do exercício pela Universidade Federal de São Paulo.",
  ];

  return (
    <section className={"bg-white"}>
      <section className="mx-auto lg:mt-20 my-10 py-10 lg:py-20 flex max-w-screen-xl flex-col items-center px-4 xl:px-0">
        <div
          className="flex scroll-m-20 flex-col lg:flex-row items-center gap-x-20 gap-y-10 justify-between"
          id="carreira"
        >
          <div className="flex w-full gap-y-5 md:max-w-[539px] flex-col">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-blue-dark shadow-[0_24px_60px_rgba(7,29,49,.18)]">
              <Image
                fill
                alt="Dr. César Augusto Fabris Benetton"
                className="object-cover object-top"
                sizes="(max-width: 767px) calc(100vw - 32px), 539px"
                src={CesarBenettonPortrait}
              />
            </div>
            <div className="flex items-center gap-10 p-4 rounded-lg bg-gray-light">
              {/*<a*/}
              {/*  href="https://www.aofas.org/"*/}
              {/*  rel="noreferrer"*/}
              {/*  target={"_blank"}*/}
              {/*>*/}
              {/*  <Image*/}
              {/*    alt={"Cesar"}*/}
              {/*    height={50}*/}
              {/*    src={"/aofas.png"}*/}
              {/*    width={99}*/}
              {/*  />*/}
              {/*</a>*/}
              <a
                href="https://www.abtpe.org.br/"
                rel="noreferrer"
                target={"_blank"}
              >
                <Image
                  alt={"Cesar"}
                  height={50}
                  src={"/abtpe.png"}
                  width={141}
                />
              </a>
              <a href="https://sbot.org.br/" rel="noreferrer" target={"_blank"}>
                <Image
                  alt={"Cesar"}
                  height={50}
                  src={"/sbot.png"}
                  width={113}
                />
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <div className={"flex text-4xl font-bold flex-col gap-x-2 mb-4"}>
              <span>Cesar Augusto</span>
              <span>Fabris Benetton</span>
              <p className={"text-primary mt-1 text-sm"}>
                CRM-SC 14.827 | RQE 11.012
              </p>
            </div>
            <div
              aria-label="Experiência profissional do Dr. César Benetton"
              className="mb-5 grid grid-cols-2 gap-3"
            >
              <div className="rounded-2xl bg-blue-dark p-5 text-white shadow-[0_14px_35px_rgba(7,29,49,.14)]">
                <strong className="block text-3xl font-bold tracking-[-0.04em] text-blue-muted sm:text-4xl">
                  10+
                </strong>
                <span className="mt-1 block text-xs font-semibold uppercase leading-relaxed tracking-[0.12em] text-white/70 sm:text-sm">
                  anos de atuação
                </span>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-blue-muted to-blue-light p-5 text-white shadow-[0_14px_35px_rgba(51,86,134,.18)]">
                <strong className="block text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
                  5 mil+
                </strong>
                <span className="mt-1 block text-xs font-semibold uppercase leading-relaxed tracking-[0.12em] text-white/80 sm:text-sm">
                  cirurgias realizadas
                </span>
              </div>
            </div>
            <a
              className="group mb-5 flex items-center gap-4 rounded-2xl border border-[#00b89c]/20 bg-[#effcf9] p-4 text-blue-dark transition hover:-translate-y-0.5 hover:border-[#00b89c]/40 hover:shadow-[0_12px_30px_rgba(0,184,156,.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00b89c] focus-visible:ring-offset-2"
              href="https://www.doctoralia.com.br/cesar-augusto-fabris-benetton/ortopedista-traumatologista/criciuma"
              id="doctoralia"
              rel="noreferrer"
              target="_blank"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#00b89c] text-xl font-bold text-white shadow-sm">
                D
              </span>
              <span className="min-w-0 flex-1">
                <strong className="block text-sm font-bold">
                  Perfil no Doctoralia
                </strong>
                <span className="mt-0.5 block text-xs leading-relaxed text-gray/65 sm:text-sm">
                  Consulte o perfil profissional e opiniões de pacientes.
                </span>
              </span>
              <svg
                aria-hidden="true"
                className="shrink-0 text-[#00b89c] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                fill="none"
                height="20"
                viewBox="0 0 24 24"
                width="20"
              >
                <path
                  d="M7 17 17 7M9 7h8v8"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </a>
            <div className="my-2 pr-3 flex flex-col gap-y-5">
              {professionalList.map((item, index) => (
                <p
                  key={index}
                  className={"text-base text-justify font-semibold"}
                >
                  <span className="contents text-primary">✓ </span>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div
          className="mt-10 flex w-full scroll-m-28 flex-col items-center justify-between gap-x-14 gap-y-10 lg:mt-20 lg:flex-row-reverse"
          id="estrutura"
        >
          <div className="relative aspect-[5/4] w-full flex-shrink-0 overflow-hidden rounded-[28px] bg-gray-light shadow-[0_24px_60px_rgba(7,29,49,.16)] md:max-w-[539px]">
            <Image
              fill
              alt="Fachada da Osteo Ortopedia e Traumatologia em Criciúma"
              className="object-cover object-center"
              sizes="(max-width: 767px) calc(100vw - 32px), 539px"
              src={OsteoFacade}
            />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/20 bg-blue-dark/90 px-5 py-4 text-white shadow-lg backdrop-blur-md">
              <strong className="block text-sm">
                Osteo Ortopedia e Traumatologia
              </strong>
              <span className="mt-0.5 block text-xs text-white/65">
                Criciúma — SC
              </span>
            </div>
          </div>
          <div className="flex w-full min-w-0 flex-1 flex-col lg:max-w-[560px]">
            <span className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-light">
              Atendimento e segurança
            </span>
            <div className="mb-5 flex flex-col text-4xl font-bold leading-[1.05] tracking-[-0.04em] md:text-5xl">
              <span>Da consulta na Osteo</span>
              <span className="text-blue-light">ao cuidado hospitalar</span>
            </div>
            <p className="max-w-xl text-base leading-7 text-gray/75">
              O atendimento e o acompanhamento são realizados na Osteo, em
              Criciúma. Quando há indicação cirúrgica, o procedimento é
              programado em ambiente hospitalar apropriado, com equipe
              especializada, recursos compatíveis com cada caso e protocolos de
              segurança.
            </p>
            <p className="mt-4 max-w-xl text-base font-semibold leading-7 text-blue-dark">
              Em todas as etapas, o Dr. César conduz o planejamento
              pré-operatório e acompanha a recuperação de forma individualizada.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Career;
