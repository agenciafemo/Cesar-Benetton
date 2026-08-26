"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import Lightbox from "yet-another-react-lightbox";
import {
  isImageFitCover,
  isImageSlide,
  useLightboxProps,
  useLightboxState,
} from "yet-another-react-lightbox";
import { Thumbnails } from "yet-another-react-lightbox/plugins";

import image1 from "@/public/banner.png";
import Camera from "~icons/ph/camera";

function isNextJsImage(slide) {
  return (
    isImageSlide(slide) &&
    typeof slide.width === "number" &&
    typeof slide.height === "number"
  );
}

function NextJsImage({ slide, offset, rect }) {
  const {
    on: { click },
    carousel: { imageFit },
  } = useLightboxProps();

  const { currentIndex } = useLightboxState();

  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit);

  if (!isNextJsImage(slide)) return undefined;

  const width = !cover
    ? Math.round(
        Math.min(rect.width, (rect.height / slide.height) * slide.width),
      )
    : rect.width;

  const height = !cover
    ? Math.round(
        Math.min(rect.height, (rect.width / slide.width) * slide.height),
      )
    : rect.height;

  return (
    <div style={{ position: "relative", width, height }}>
      <Image
        fill
        alt=""
        draggable={false}
        loading="eager"
        placeholder={slide.blurDataURL ? "blur" : undefined}
        sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
        src={slide}
        style={{
          objectFit: cover ? "cover" : "contain",
          cursor: click ? "pointer" : undefined,
        }}
        onClick={
          offset === 0 ? () => click?.({ index: currentIndex }) : undefined
        }
      />
    </div>
  );
}

export default function Surgery() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <section className="lg:mt-20 mt-10 bg-blue-light" id="cirurgia">
      <section className={"mx-auto p-4 lg:p-0 max-w-screen-xl"} id="3">
        <div className="overflow-hidden w-full flex flex-col items-center justify-between md:flex-row">
          <div
            className={"text-white text-left text-4xl font-bold max-w-[515px]"}
          >
            <span>Cirurgia </span>
            <span className={"text-blue-dark font-bold"}>
              minimamente invasiva
            </span>
            <span> e percutânea para correção do </span>
            <span className={"text-blue-dark font-bold"}>Joanete</span>
          </div>
          <Image
            alt={"Joanete"}
            className={"lg:translate-y-8"}
            height={311}
            src={"/joanete.png"}
            width={226}
          />
          <div>
            <div className="text-base text-white font-semibold max-w-[430px] mt-4 md:mt-0">
              <p className="text-justify">
                Realizamos cirurgias minimamente invasivas e percutâneas para
                correção do joanete (hálux valgo), lembrando que cada paciente é
                único e cada joanete também, por isso é necessário uma avaliação
                criteriosa de cada caso previamente ao procedimento.
              </p>
            </div>
            <Button
              className={"mt-2"}
              color={"secondary"}
              startContent={<Camera height={20} width={20} />}
              onClick={() => setIsLightboxOpen(true)}
            >
              Veja fotos de alguns resultados
            </Button>
            <Lightbox
              carousel={{ finite: true }}
              close={() => setIsLightboxOpen(false)}
              controller={{
                closeOnPullDown: true,
                closeOnBackdropClick: true,
                closeOnPullUp: true,
              }}
              open={isLightboxOpen}
              plugins={[Thumbnails]}
              render={{ slide: NextJsImage }}
              slides={[image1, image1, image1]}
            />
          </div>
        </div>
      </section>
    </section>
  );
}
