import Image from "next/image";
import React from "react";

export function Membership() {
  return (
    <div className="flex items-start gap-10 p-4 rounded-lg">
      {/*<a href="https://www.aofas.org/" rel="noreferrer" target={"_blank"}>*/}
      {/*  <Image alt={"Cesar"} height={50} src={"/aofas.png"} width={99} />*/}
      {/*</a>*/}
      <a href="https://www.abtpe.org.br/" rel="noreferrer" target={"_blank"}>
        <Image alt={"Cesar"} height={50} src={"/abtpe.png"} width={141} />
      </a>
      <a
        className="-translate-y-2"
        href="https://sbot.org.br/"
        rel="noreferrer"
        target={"_blank"}
      >
        <Image alt={"Cesar"} height={50} src={"/sbot.png"} width={113} />
      </a>
    </div>
  );
}
