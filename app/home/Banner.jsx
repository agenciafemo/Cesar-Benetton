import Image from "next/image";

import { Membership } from "@/components/membership";
import { RotatingHeroWord } from "@/components/rotating-hero-word";
import BaselineWhatsapp from "~icons/ic/baseline-whatsapp";

const WHATSAPP_URL =
  "https://wa.me/5548991375831?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20C%C3%A9sar.";

function Banner() {
  return (
    <section
      className="relative isolate overflow-hidden bg-gray-light px-4 lg:-mt-40 lg:pt-40"
      id="banner"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 hidden bg-[url('/banner.png')] bg-no-repeat opacity-70 md:block"
        style={{
          backgroundPosition: "left center",
          backgroundSize: "180% auto",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-white/95 via-gray-light/90 to-blue-muted/30"
      />
      <div
        aria-hidden="true"
        className="absolute -right-32 top-20 -z-10 h-[580px] w-[580px] rounded-full bg-blue-light/10 blur-3xl"
      />

      <div className="mx-auto grid min-h-[720px] max-w-screen-xl items-center gap-8 pb-0 pt-10 md:grid-cols-[1.05fr_.95fr] md:pt-12 lg:min-h-[800px] lg:pt-20">
        <div className="z-10 flex max-w-[610px] flex-col items-start pb-4 md:pb-16">
          <span className="mb-5 inline-flex rounded-full border border-blue-light/20 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-dark shadow-sm backdrop-blur">
            Ortopedia • Pé e tornozelo — Criciúma, SC
          </span>
          <h1 className="text-[clamp(1.75rem,4vw,3.5rem)] font-bold leading-[1.02] tracking-[-0.05em] text-blue-dark">
            <span className="block whitespace-nowrap">Promovendo saúde,</span>
            <span className="block whitespace-nowrap text-blue-light">
              restaurando <RotatingHeroWord />.
            </span>
          </h1>
          <p className="mt-6 max-w-[520px] text-base font-medium leading-relaxed text-gray md:text-lg">
            Dr. César Benetton, médico ortopedista e traumatologista com mais de
            10 anos de atuação em cirurgia do pé e tornozelo e mais de 5 mil
            cirurgias realizadas.
          </p>
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-gray/70">
            Membro titular
          </p>
          <div className="mt-2">
            <Membership />
          </div>
          <a
            className="group mt-7 inline-flex min-h-14 items-center gap-3 rounded-full bg-gradient-to-r from-green-dark to-green-light px-6 py-3 font-bold text-white shadow-[0_14px_35px_rgba(0,150,61,.24)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(0,150,61,.32)] focus:outline-none focus-visible:ring-2 focus-visible:ring-green-dark focus-visible:ring-offset-2"
            href={WHATSAPP_URL}
            rel="noreferrer"
            target="_blank"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15">
              <BaselineWhatsapp height={22} width={22} />
            </span>
            <span>
              <span className="block text-[11px] font-medium uppercase tracking-[0.12em] text-white/80">
                Fale com nossa equipe
              </span>
              <span className="block leading-tight">Agendar pelo WhatsApp</span>
            </span>
          </a>
        </div>

        <div className="relative min-h-[430px] self-end md:min-h-[650px] lg:min-h-[700px]">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 h-[78%] w-[88%] -translate-x-1/2 rounded-t-full bg-gradient-to-t from-blue-dark/12 to-white/10 blur-2xl"
          />
          <Image
            priority
            alt="Dr. César Benetton, ortopedista especialista em pé e tornozelo"
            className="absolute bottom-0 left-1/2 h-auto max-h-[690px] w-auto max-w-none -translate-x-1/2 object-contain object-bottom drop-shadow-[0_24px_34px_rgba(2,21,51,.18)] md:left-[54%] md:max-h-[700px] lg:max-h-[740px]"
            height={2600}
            sizes="(max-width: 767px) 92vw, 48vw"
            src="/cesar-hero.png"
            width={1733}
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
