import BaselineWhatsapp from "~icons/ic/baseline-whatsapp";

const WHATSAPP_URL =
  "https://wa.me/5548991375831?text=Ol%C3%A1%2C%20Dr.%20C%C3%A9sar!%20Gostaria%20de%20agendar%20uma%20consulta.";

export function FloatingWhatsapp() {
  return (
    <a
      aria-label="Agendar consulta pelo WhatsApp"
      className="group fixed bottom-5 right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-r from-green-dark to-green-light text-white shadow-[0_16px_40px_rgba(0,150,61,.35)] transition hover:-translate-y-1 hover:scale-105 hover:shadow-[0_20px_48px_rgba(0,150,61,.42)] focus:outline-none focus-visible:ring-2 focus-visible:ring-green-dark focus-visible:ring-offset-2 sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
      href={WHATSAPP_URL}
      rel="noreferrer"
      target="_blank"
    >
      <span
        aria-hidden="true"
        className="absolute inset-1 rounded-full bg-green-light/60 motion-safe:animate-ping"
      />
      <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/15">
        <BaselineWhatsapp height={26} width={26} />
      </span>
    </a>
  );
}
