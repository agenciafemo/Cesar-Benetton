import React from "react";
import Image from "next/image";
import { Snippet } from "@nextui-org/snippet";

import BrandLogo from "@/public/brand-logo.png";
import { ButtonWhatsapp } from "@/components/button-whatsapp";
import { ButtonInstagram } from "@/components/button-instagram";

function MapFooter() {
  return (
    <section className={"bg-blue-dark scroll-m-16"} id="contato">
      <div className="mx-auto flex max-w-screen-xl w-full lg:flex-row flex-col justify-between xl:items-center p-4 xl:px-0 xl:py-16">
        <div className="flex flex-col mb-5 gap-5">
          <Image
            alt={"Cesar Benetton"}
            className="h-auto w-[240px]"
            height={95}
            src={BrandLogo}
            width={240}
          />
          <p className={"text-5xl text-white lg:text-5xl font-bold"}>
            Agende a sua
            <br />
            consulta via
            <br />
            <span className={"text-green-light"}>WhatsApp</span>
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonWhatsapp />
            <ButtonInstagram iconOnly />
          </div>
          <div className="flex flex-col text-sm text-white">
            Fale conosco no WhatsApp:
            <Snippet
              hideSymbol
              className="border-none p-0 pl-1 m-0 w-fit text-green-light gap-0"
              classNames={{
                copyButton: "pl-0",
              }}
              codeString="48991375831"
              tooltipProps={{
                content: "Copiar telefone",
              }}
              variant="bordered"
            >
              <span className="font-bold font-[Inter]">(48) 99137-5831.</span>
            </Snippet>
            <br />
            <span>Se preferir ligue nos telefones:</span>
            <span className="font-bold text-green-light">
              (48) 3081-9860 ou (48) 3081-9861
            </span>
          </div>
        </div>
        <iframe
          allowFullScreen=""
          className={
            "max-w-[716px] rounded-xl border-0 !outline-0 overflow-hidden"
          }
          height="422"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.44713867429!2d-49.3634309!3d-28.6762682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9521787faf783d37%3A0x91be041603f55055!2sR.%20Jo%C3%A3o%20Cechinel%2C%20368%20-%20Pio%20Corr%C3%AAa%2C%20Crici%C3%BAma%20-%20SC%2C%2088811-450!5e0!3m2!1spt-BR!2sbr!4v1726248588133!5m2!1spt-BR!2sbr"
          title="Localização da Osteo Ortopedia e Traumatologia em Criciúma"
          width="100%"
        />
      </div>
    </section>
  );
}

export default MapFooter;
