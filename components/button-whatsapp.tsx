import type { ComponentProps } from "react";

import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";

import BaselineWhatsapp from "~icons/ic/baseline-whatsapp";

export function ButtonWhatsapp(props: ComponentProps<typeof Button>) {
  return (
    <Button
      isExternal
      as={Link}
      className="w-fit bg-gradient-to-r text-sm font-medium text-white shadow-lg from-green-light to-green-dark"
      href={
        "https://wa.me/5548991375831?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20C%C3%A9sar."
      }
      startContent={<BaselineWhatsapp height={20} width={20} />}
      target={"_blank"}
      variant="flat"
      {...props}
    >
      WhatsApp
    </Button>
  );
}
