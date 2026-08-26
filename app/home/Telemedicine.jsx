"use client";

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import Image from "next/image";

import BaselineWhatsapp from "~icons/ic/baseline-whatsapp";

const TELEMEDICINE_WHATSAPP =
  "https://wa.me/5548991375831?text=Ol%C3%A1%2C%20Dr.%20C%C3%A9sar!%20Gostaria%20de%20agendar%20uma%20consulta%20por%20telemedicina.";

export default function Telemedicine() {
  return (
    <section
      className="relative scroll-m-16 overflow-hidden bg-gradient-to-br from-blue-light via-[#213f68] to-blue-dark"
      id="telemedicina"
    >
      <div
        aria-hidden="true"
        className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-blue-light/25 blur-3xl"
      />
      <section className="mx-auto max-w-screen-xl px-4 sm:px-6 xl:px-0" id="3">
        <div className="relative flex w-full flex-col items-center justify-between overflow-hidden py-12 md:flex-row lg:py-24">
          <div className={"max-w-[515px]"}>
            <div className={"text-white text-left text-4xl font-bold"}>
              <span className={"font-bold text-gray-light/70"}>
                Saiba mais sobre
              </span>
              <br />
              <span className={"text-white font-bold"}>nossa</span>{" "}
              <span>telemedicina</span>
            </div>
            <p
              className={
                "mt-4 max-w-md text-left font-medium leading-relaxed text-white/70"
              }
            >
              Consulte-se à distância com praticidade, segurança e orientação
              especializada.
              <br />
              <span className={"font-bold text-white"}>
                Nossa equipe orienta você em todas as etapas.
              </span>
            </p>
            <a
              className="mt-7 inline-flex min-h-14 items-center gap-3 rounded-full bg-gradient-to-r from-green-dark to-green-light px-6 font-bold text-white shadow-[0_14px_35px_rgba(0,215,87,.22)] transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-light focus-visible:ring-offset-2 focus-visible:ring-offset-blue-dark"
              href={TELEMEDICINE_WHATSAPP}
              rel="noreferrer"
              target="_blank"
            >
              <BaselineWhatsapp height={22} width={22} />
              Agendar teleconsulta
            </a>
          </div>
          <Image
            alt={"Joanete"}
            className="mt-10 md:absolute md:bottom-0 md:left-[48%] md:-translate-x-1/2"
            height={311}
            src={"/pc.svg"}
            width={226}
          />
          <div className={"mt-8 w-full flex-1 md:mt-0 lg:max-w-[40%]"}>
            <Accordion variant={"bordered"}>
              <AccordionItem
                key="1"
                aria-label="Primeiro passo da telemedicina: contato"
                classNames={{
                  trigger: "py-3",
                  content: "text-white text-sm pt-0",
                  indicator: "text-white",
                }}
                title={
                  <div>
                    <span className={"font-medium text-gray-light/70"}>
                      1º passo
                    </span>{" "}
                    <span className={"text-white font-bold"}>Contato</span>
                  </div>
                }
              >
                Para começar o teleatendimento, entre em contato conosco através
                do nosso WhatsApp; para isso, basta clicar no botão acima. Você
                precisará fornecer informações básicas como seu nome, dados de
                contato e motivo da consulta. Certifique-se de que você tem
                acesso à plataforma utilizada para os atendimentos e está
                familiarizado com seu uso.
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Segundo passo da telemedicina: agendamento"
                classNames={{
                  trigger: "py-3",
                  content: "text-white text-sm pt-0",
                  indicator: "text-white",
                }}
                title={
                  <div>
                    <span className={"font-medium text-gray-light/70"}>
                      2º passo
                    </span>{" "}
                    <span className={"text-white font-bold"}>Agendamento</span>
                  </div>
                }
              >
                Após o contato, serão passadas as datas e horários disponíveis e
                você agendará a consulta escolhendo a que melhor lhe convier.
                Após agendar, você receberá uma confirmação com detalhes sobre a
                consulta e instruções para qualquer preparação necessária.
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Terceiro passo da telemedicina: consulta"
                classNames={{
                  trigger: "py-3",
                  content: "text-white text-sm pt-0",
                  indicator: "text-white",
                }}
                title={
                  <div>
                    <span className={"font-medium text-gray-light/70"}>
                      3º passo
                    </span>{" "}
                    <span className={"text-white font-bold"}>Consulta</span>
                  </div>
                }
              >
                No dia e horário agendados, conecte-se à plataforma de
                telemedicina conforme enviado no passo 2. Esteja em um ambiente
                tranquilo e com uma boa conexão de internet. Durante a consulta,
                o médico fará perguntas sobre seus sintomas e histórico médico.
                No final, ele fornecerá orientações e, se necessário,
                prescreverá tratamentos ou exames adicionais. Siga as instruções
                e tire dúvidas para garantir um atendimento eficaz.
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </section>
  );
}
