import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";

import InstaGradient from "../public/insta-gradient.svg";

import RiInstagramLine from "~icons/ri/instagram-line";

interface ButtonInstagramProps {
  iconOnly?: boolean;
}

export function ButtonInstagram({ iconOnly = false }: ButtonInstagramProps) {
  if (iconOnly) {
    return (
      <Button
        isExternal
        isIconOnly
        as={Link}
        className="bg-white p-0"
        href={"https://www.instagram.com/cesarbenetton/"}
        startContent={<InstaGradient />}
      />
    );
  }

  return (
    <Button
      isExternal
      as={Link}
      className="text-sm w-fit font-medium bg-gradient-to-r to-[#673EC1] via-[#DD297A] from-[#F16B36] text-white shadow-lg"
      href={"https://www.instagram.com/cesarbenetton/"}
      startContent={<RiInstagramLine height={20} width={20} />}
      variant="flat"
    >
      Instagram
    </Button>
  );
}
