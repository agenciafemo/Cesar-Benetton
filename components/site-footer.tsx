import Image from "next/image";
import NextLink from "next/link";

import { siteConfig } from "@/config/site";
import BrandLogo from "@/public/brand-logo.png";
import BaselineWhatsapp from "~icons/ic/baseline-whatsapp";
import RiInstagramLine from "~icons/ri/instagram-line";

const WHATSAPP_URL =
  "https://wa.me/5548991375831?text=Ol%C3%A1%2C%20Dr.%20C%C3%A9sar!%20Gostaria%20de%20agendar%20uma%20consulta.";

export function SiteFooter() {
  return (
    <footer
      className="scroll-mt-20 border-t border-white/10 bg-blue-dark text-white"
      id="site-footer"
    >
      <div className="mx-auto grid max-w-screen-xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.25fr_.75fr_1fr] lg:py-16">
        <div>
          <NextLink
            aria-label="Página inicial"
            className="inline-flex"
            href="/"
          >
            <Image
              alt="Dr. César Benetton"
              className="h-auto w-[210px]"
              height={84}
              src={BrandLogo}
              width={210}
            />
          </NextLink>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
            Ortopedia e traumatologia com atendimento especializado em pé e
            tornozelo, em Criciúma — SC e por telemedicina.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              aria-label="Falar no WhatsApp"
              className="grid h-12 w-12 place-items-center rounded-full bg-green-light text-white transition hover:-translate-y-0.5 hover:bg-green-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-green-light"
              href={WHATSAPP_URL}
              rel="noreferrer"
              target="_blank"
            >
              <BaselineWhatsapp height={22} width={22} />
            </a>
            <a
              aria-label="Abrir Instagram"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/15 text-white transition hover:-translate-y-0.5 hover:border-blue-light hover:bg-blue-light focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-light"
              href="https://www.instagram.com/cesarbenetton/"
              rel="noreferrer"
              target="_blank"
            >
              <RiInstagramLine height={22} width={22} />
            </a>
          </div>
        </div>

        <nav aria-label="Links do rodapé">
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-blue-light">
            Navegação
          </h2>
          <ul className="mt-5 space-y-3">
            {siteConfig.navItems.map((item) => (
              <li key={item.href}>
                <NextLink
                  className="text-sm capitalize text-white/65 transition hover:text-white"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-blue-light">
            Atendimento
          </h2>
          <address className="mt-5 space-y-4 text-sm not-italic leading-relaxed text-white/65">
            <p>
              Rua João Cechinel, 368
              <br />
              Pio Corrêa — Criciúma, SC
            </p>
            <p>
              <a
                className="transition hover:text-white"
                href="tel:+554830819860"
              >
                (48) 3081-9860
              </a>
              <br />
              <a
                className="transition hover:text-white"
                href="tel:+554830819861"
              >
                (48) 3081-9861
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-2 px-4 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>© {new Date().getFullYear()} Dr. César Benetton.</span>
          <a
            className="transition hover:text-white/70"
            href="https://guilhermetrombim.com.br"
            rel="noreferrer"
            target="_blank"
          >
            Design por Trombim
          </a>
        </div>
      </div>
    </footer>
  );
}
