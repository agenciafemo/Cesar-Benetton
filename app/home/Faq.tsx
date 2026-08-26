import { faqItems } from "@/config/seo";

export default function Faq() {
  return (
    <section
      aria-labelledby="faq-title"
      className="bg-gray-light px-4 py-16 sm:px-6 lg:py-24"
      id="duvidas"
    >
      <div className="mx-auto grid max-w-screen-xl gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-light">
            Informações essenciais
          </span>
          <h2
            className="mt-3 text-4xl font-bold tracking-[-0.04em] text-blue-dark md:text-5xl"
            id="faq-title"
          >
            Dúvidas frequentes
          </h2>
          <p className="mt-5 max-w-md leading-7 text-gray/65">
            Respostas diretas sobre atendimento, agendamento e tratamentos de pé
            e tornozelo.
          </p>
        </div>

        <div className="divide-y divide-blue-dark/10 border-y border-blue-dark/10">
          {faqItems.map((item, index) => (
            <details key={item.question} className="group py-1">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 font-bold text-blue-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-light focus-visible:ring-offset-4 [&::-webkit-details-marker]:hidden">
                <span>
                  <span className="mr-3 text-xs font-bold text-blue-light">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-xl text-blue-light transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-2xl pb-6 pl-9 pr-12 leading-7 text-gray/70">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
