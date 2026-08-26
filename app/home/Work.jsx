"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import BaselineWhatsapp from "~icons/ic/baseline-whatsapp";

const treatmentGroups = [
  {
    id: "antepe",
    title: "Antepé",
    subtitle: "Dedos e parte da frente do pé",
    icon: "/antepe.svg",
    treatments: [
      {
        name: "Joanete (Hálux valgo)",
        image: "/treatments/joanete.webp",
        description:
          "Deformidade progressiva do dedão que pode causar saliência, dor e dificuldade para usar calçados. A avaliação define se o cuidado será conservador ou cirúrgico.",
      },
      {
        name: "Neuroma de Morton",
        image: "/treatments/neuroma-morton.webp",
        description:
          "Irritação de um nervo entre os dedos, geralmente percebida como queimação, choque ou sensação de pedra dentro do calçado.",
      },
      {
        name: "Hálux rígido",
        image: "/treatments/halux-rigido.webp",
        description:
          "Desgaste da articulação do dedão que reduz o movimento e provoca dor, especialmente ao caminhar e impulsionar o pé.",
      },
      {
        name: "Deformidade dos dedos menores",
        image: "/treatments/dedos-menores.webp",
        description:
          "Alterações como dedos em martelo ou em garra podem gerar atrito, calos e dor. O tratamento depende da flexibilidade e da causa da deformidade.",
      },
      {
        name: "Fratura dos metatarsos e falanges",
        image: "/treatments/fratura-metatarsos-falanges.webp",
        description:
          "Fraturas nos ossos da parte anterior do pé e dos dedos exigem avaliação do alinhamento, estabilidade e capacidade de apoio.",
      },
      {
        name: "Turf toe",
        image: "/treatments/turf-toe.webp",
        description:
          "Lesão da articulação do dedão causada por hiperextensão, comum em esportes. Pode variar de uma entorse leve a uma lesão instável.",
      },
      {
        name: "Metatarsalgia",
        image: "/treatments/metatarsalgia.webp",
        description:
          "Dor na região plantar próxima aos dedos, que pode estar relacionada à sobrecarga, formato do pé, calçados ou outras condições.",
      },
      {
        name: "Calosidades",
        image: "/treatments/calosidades.webp",
        description:
          "Áreas de pele espessada que costumam indicar pontos de pressão excessiva. A causa mecânica precisa ser investigada para evitar recorrências.",
      },
      {
        name: "Gota",
        image: "/treatments/gota.webp",
        description:
          "Inflamação intensa causada pelo depósito de cristais na articulação, frequentemente no dedão. O cuidado integra controle da crise e prevenção.",
      },
    ],
  },
  {
    id: "mediope",
    title: "Mediopé",
    subtitle: "Arco e região central do pé",
    icon: "/mediope.svg",
    treatments: [
      {
        name: "Pé diabético",
        image: "/treatments/pe-diabetico.webp",
        description:
          "Alterações de sensibilidade, circulação e cicatrização exigem acompanhamento cuidadoso para prevenir feridas, infecções e deformidades.",
      },
      {
        name: "Pé plano (chato)",
        image: "/treatments/pe-plano.webp",
        description:
          "Redução do arco do pé que pode ou não causar sintomas. Dor, rigidez e progressão da deformidade orientam a escolha do tratamento.",
      },
      {
        name: "Lesão de Lisfranc",
        image: "/treatments/lesao-lisfranc.webp",
        description:
          "Lesão das articulações e ligamentos do mediopé, muitas vezes após torção ou trauma. O diagnóstico precoce é importante para preservar o alinhamento.",
      },
      {
        name: "Fratura dos cuneiformes",
        image: "/treatments/fratura-cuneiformes.webp",
        description:
          "Fraturas nos pequenos ossos centrais do pé podem ocorrer isoladamente ou junto de outras lesões e precisam de análise por imagem.",
      },
      {
        name: "Fratura do cuboide",
        image: "/treatments/fratura-cuboide.webp",
        description:
          "Lesão do osso localizado na lateral do mediopé. A estabilidade e o comprimento da coluna lateral são pontos essenciais da avaliação.",
      },
      {
        name: "Fratura do navicular",
        image: "/treatments/fratura-navicular.webp",
        description:
          "Fratura em um osso importante para o arco do pé, podendo ser traumática ou por estresse. O cuidado depende do tipo e do desvio.",
      },
      {
        name: "Fraturas por estresse",
        image: "/treatments/fratura-estresse.webp",
        description:
          "Microfraturas relacionadas à sobrecarga repetitiva. Dor progressiva durante atividades é um sinal frequente e merece investigação.",
      },
      {
        name: "Osteoporose",
        image: "/treatments/osteoporose.webp",
        description:
          "A perda de densidade óssea aumenta o risco de fraturas e influencia o planejamento do tratamento ortopédico e da recuperação.",
      },
      {
        name: "Cisto no pé",
        image: "/treatments/cisto-pe.webp",
        description:
          "Nódulos no pé podem ter diferentes origens. Exame clínico e imagem ajudam a identificar o tipo e a necessidade de acompanhamento ou remoção.",
      },
    ],
  },
  {
    id: "retrope",
    title: "Retropé",
    subtitle: "Calcanhar e parte posterior do pé",
    icon: "/retrope.svg",
    treatments: [
      {
        name: "Tendinopatia do tendão de Aquiles",
        image: "/treatments/tendinopatia-aquiles.webp",
        description:
          "Dor e perda de capacidade do tendão de Aquiles associadas a sobrecarga ou degeneração. O tratamento costuma combinar controle de carga e reabilitação.",
      },
      {
        name: "Fratura do calcâneo",
        image: "/treatments/fratura-calcaneo.webp",
        description:
          "Fratura do osso do calcanhar, geralmente após trauma de maior energia. O formato da articulação e o estado da pele orientam a conduta.",
      },
      {
        name: "Fratura do tálus",
        image: "/treatments/fratura-talus.webp",
        description:
          "Lesão de um osso central para o movimento do tornozelo e do pé. Requer atenção ao alinhamento articular e à circulação do osso.",
      },
      {
        name: "Artrose subtalar",
        image: "/treatments/artrose-subtalar.webp",
        description:
          "Desgaste da articulação abaixo do tornozelo, frequentemente associado à dor em terrenos irregulares e limitação dos movimentos laterais.",
      },
      {
        name: "Doença de Sever",
        image: "/treatments/doenca-sever.webp",
        description:
          "Dor de crescimento no calcanhar de crianças e adolescentes ativos, relacionada à tração repetitiva sobre a região em desenvolvimento.",
      },
      {
        name: "Tendinopatia dos fibulares",
        image: "/treatments/tendinopatia-fibulares.webp",
        description:
          "Irritação ou lesão dos tendões na lateral do tornozelo, capaz de causar dor, inchaço e sensação de instabilidade.",
      },
      {
        name: "Tumores",
        image: "/treatments/tumores.webp",
        description:
          "Lesões ósseas ou de partes moles podem ser benignas ou exigir investigação específica. O diagnóstico é definido com avaliação e exames adequados.",
      },
      {
        name: "Neuropatias",
        image: "/treatments/neuropatias.webp",
        description:
          "Compressões ou alterações dos nervos podem provocar dor, formigamento, queimação ou perda de sensibilidade no pé e tornozelo.",
      },
      {
        name: "Osteomielite (infecção óssea)",
        image: "/treatments/osteomielite.webp",
        description:
          "Infecção do osso que exige diagnóstico rápido e tratamento coordenado, podendo envolver medicamentos e procedimentos cirúrgicos.",
      },
    ],
  },
  {
    id: "tornozelo-perna",
    title: "Tornozelo e perna",
    subtitle: "Articulação, tendões e estruturas da perna",
    icon: "/tornozelo.svg",
    treatments: [
      {
        name: "Fratura do tornozelo",
        image: "/treatments/fratura-tornozelo.webp",
        description:
          "Lesão de um ou mais ossos ao redor do tornozelo. Desvio, estabilidade e condição das articulações definem o melhor tratamento.",
      },
      {
        name: "Ruptura do tendão de Aquiles",
        image: "/treatments/ruptura-aquiles.webp",
        description:
          "Ruptura que costuma causar estalo, perda de força e dificuldade para ficar na ponta do pé. Há opções conservadoras e cirúrgicas para casos selecionados.",
      },
      {
        name: "Artrose de tornozelo",
        image: "/treatments/artrose-tornozelo.webp",
        description:
          "Desgaste da cartilagem que pode causar dor, rigidez e inchaço. O plano considera intensidade dos sintomas, alinhamento e nível de atividade.",
      },
      {
        name: "Canelite",
        image: "/treatments/canelite.webp",
        description:
          "Dor por sobrecarga na borda da tíbia, comum em corrida e esportes. É importante diferenciar a condição de fraturas por estresse.",
      },
      {
        name: "Fascite plantar",
        image: "/treatments/fascite-plantar.webp",
        description:
          "Causa frequente de dor no calcanhar, geralmente mais intensa nos primeiros passos. A avaliação identifica fatores de sobrecarga e diagnósticos semelhantes.",
      },
      {
        name: "Entorse de tornozelo",
        image: "/treatments/entorse-tornozelo.webp",
        description:
          "Torção capaz de lesionar ligamentos, tendões, cartilagem ou ossos. A gravidade e a estabilidade orientam a reabilitação e o retorno às atividades.",
      },
      {
        name: "Síndrome compartimental crônica",
        image: "/treatments/sindrome-compartimental.webp",
        description:
          "Aumento de pressão muscular durante o exercício, causando dor, tensão ou alteração de sensibilidade que melhora após interromper a atividade.",
      },
      {
        name: "Fratura do pilão tibial",
        image: "/treatments/fratura-pilao-tibial.webp",
        description:
          "Fratura complexa na parte inferior da tíbia, próxima à articulação. O planejamento considera os fragmentos ósseos e as condições dos tecidos.",
      },
      {
        name: "Fratura da tíbia e fíbula",
        image: "/treatments/fratura-tibia-fibula.webp",
        description:
          "Fraturas dos ossos da perna podem variar bastante em padrão e gravidade. Alinhamento, estabilidade e tecidos ao redor guiam o cuidado.",
      },
    ],
  },
];

function normalizeText(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function getEditDistance(firstWord, secondWord, limit) {
  if (Math.abs(firstWord.length - secondWord.length) > limit) {
    return limit + 1;
  }

  let previousRow = Array.from(
    { length: secondWord.length + 1 },
    (_, index) => index,
  );

  for (let firstIndex = 1; firstIndex <= firstWord.length; firstIndex += 1) {
    const currentRow = [firstIndex];
    let smallestValue = currentRow[0];

    for (
      let secondIndex = 1;
      secondIndex <= secondWord.length;
      secondIndex += 1
    ) {
      const insertion = currentRow[secondIndex - 1] + 1;
      const deletion = previousRow[secondIndex] + 1;
      const substitution =
        previousRow[secondIndex - 1] +
        (firstWord[firstIndex - 1] === secondWord[secondIndex - 1] ? 0 : 1);
      const value = Math.min(insertion, deletion, substitution);

      currentRow.push(value);
      smallestValue = Math.min(smallestValue, value);
    }

    if (smallestValue > limit) return limit + 1;
    previousRow = currentRow;
  }

  return previousRow[secondWord.length];
}

function wordsMatch(queryWord, indexedWord) {
  if (queryWord === indexedWord) return true;

  if (queryWord.length <= 2) {
    return indexedWord.startsWith(queryWord);
  }

  if (
    indexedWord.includes(queryWord) ||
    (indexedWord.length >= 4 && queryWord.includes(indexedWord))
  ) {
    return true;
  }

  const longestLength = Math.max(queryWord.length, indexedWord.length);
  const editLimit = longestLength <= 4 ? 1 : longestLength <= 7 ? 2 : 3;

  return getEditDistance(queryWord, indexedWord, editLimit) <= editLimit;
}

function matchesTreatmentSearch(searchIndex, normalizedQuery) {
  if (searchIndex.text.includes(normalizedQuery)) return true;

  const queryWords = normalizedQuery.split(" ").filter(Boolean);

  return queryWords.every((queryWord) =>
    searchIndex.words.some((indexedWord) => wordsMatch(queryWord, indexedWord)),
  );
}

const treatmentSearchIndex = new Map(
  treatmentGroups.flatMap((group) =>
    group.treatments.map((treatment) => {
      const text = normalizeText(
        `${treatment.name} ${treatment.description} ${group.title} ${group.subtitle}`,
      );

      return [
        `${group.id}:${treatment.name}`,
        { text, words: [...new Set(text.split(" ").filter(Boolean))] },
      ];
    }),
  ),
);

const INITIAL_VISIBLE_TREATMENTS = 4;

function getWhatsAppUrl(treatmentName) {
  const message = `Olá, Dr. César! Gostaria de saber mais sobre ${treatmentName}.`;

  return `https://wa.me/5548991375831?text=${encodeURIComponent(message)}`;
}

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="20"
      viewBox="0 0 24 24"
      width="20"
    >
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="m16.5 16.5 4 4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="18"
      viewBox="0 0 24 24"
      width="18"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M12 11v6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="7.5" fill="currentColor" r="1" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="22"
      viewBox="0 0 24 24"
      width="22"
    >
      <path
        d="m6 6 12 12M18 6 6 18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function TreatmentModal({ selected, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!selected) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, selected]);

  if (!selected) return null;

  const image = selected.treatment.image;

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-blue-dark/80 p-4 backdrop-blur-sm"
      role="presentation"
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) onClose();
      }}
    >
      <div
        aria-labelledby="treatment-modal-title"
        aria-modal="true"
        className="relative my-auto grid w-full max-w-4xl overflow-hidden rounded-[28px] bg-white shadow-[0_30px_100px_rgba(2,21,51,.35)] md:grid-cols-[.9fr_1.1fr]"
        role="dialog"
      >
        <button
          ref={closeButtonRef}
          aria-label="Fechar detalhes do tratamento"
          className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-blue-dark shadow-lg transition hover:rotate-90 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-light"
          type="button"
          onClick={onClose}
        >
          <CloseIcon />
        </button>

        <div className="relative grid min-h-[280px] place-items-center overflow-hidden bg-gradient-to-br from-gray-light via-white to-blue-muted/35 md:min-h-[520px]">
          <div
            aria-hidden="true"
            className="absolute -left-16 -top-16 h-52 w-52 rounded-full bg-blue-light/15 blur-3xl"
          />
          <Image
            alt={selected.treatment.name}
            className="h-full w-full object-cover"
            height={520}
            src={image}
            width={520}
          />
          <span className="absolute bottom-5 left-5 rounded-full border border-white/60 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-blue-dark backdrop-blur">
            {selected.group.title}
          </span>
        </div>

        <div className="flex flex-col justify-center p-7 md:p-12">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-light">
            Entenda o tratamento
          </span>
          <h3
            className="mt-3 text-3xl font-bold leading-tight tracking-[-0.03em] text-blue-dark md:text-4xl"
            id="treatment-modal-title"
          >
            {selected.treatment.name}
          </h3>
          <p className="mt-5 text-base leading-relaxed text-gray/80">
            {selected.treatment.description}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-gray/60">
            Cada caso é único. A consulta especializada permite confirmar o
            diagnóstico e indicar a conduta mais adequada.
          </p>
          <a
            className="mt-7 inline-flex min-h-14 w-fit items-center gap-3 rounded-full bg-gradient-to-r from-green-dark to-green-light px-6 font-bold text-white shadow-[0_14px_30px_rgba(0,150,61,.2)] transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-dark focus-visible:ring-offset-2"
            href={getWhatsAppUrl(selected.treatment.name)}
            rel="noreferrer"
            target="_blank"
          >
            <BaselineWhatsapp height={22} width={22} />
            Falar sobre este tratamento
          </a>
        </div>
      </div>
    </div>
  );
}

function Work() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [expandedGroups, setExpandedGroups] = useState(() => new Set());

  const normalizedQuery = normalizeText(query.trim());
  const visibleGroups = useMemo(() => {
    if (!normalizedQuery) return treatmentGroups;

    return treatmentGroups
      .map((group) => ({
        ...group,
        treatments: group.treatments.filter((treatment) => {
          const searchIndex = treatmentSearchIndex.get(
            `${group.id}:${treatment.name}`,
          );

          return matchesTreatmentSearch(searchIndex, normalizedQuery);
        }),
      }))
      .filter((group) => group.treatments.length > 0);
  }, [normalizedQuery]);

  const closeModal = useCallback(() => setSelected(null), []);
  const toggleGroup = useCallback((groupId) => {
    setExpandedGroups((currentGroups) => {
      const nextGroups = new Set(currentGroups);

      if (nextGroups.has(groupId)) nextGroups.delete(groupId);
      else nextGroups.add(groupId);

      return nextGroups;
    });
  }, []);

  return (
    <section
      className="relative scroll-mt-20 overflow-hidden bg-gray-light/45 py-16 lg:py-24"
      id="tratamentos"
    >
      <div
        aria-hidden="true"
        className="absolute -left-32 top-32 h-72 w-72 rounded-full bg-blue-light/5 blur-3xl"
      />
      <div className="relative mx-auto max-w-screen-xl px-4">
        <div>
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-light">
              Cuidado especializado
            </span>
            <h2 className="mt-3 text-4xl font-bold tracking-[-0.04em] text-blue-dark md:text-6xl">
              <span className="block">Tratamentos para todo</span>
              <span className="block">o pé e tornozelo</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray/70 md:text-lg">
              Encontre a região ou condição que procura. Clique em um tratamento
              para entender melhor ou fale diretamente com nossa equipe.
            </p>
          </div>
          <label className="mx-auto mt-9 flex min-h-14 w-full max-w-2xl items-center gap-3 rounded-2xl border border-blue-dark/10 bg-white px-5 shadow-[0_10px_35px_rgba(2,21,51,.06)] focus-within:border-blue-light focus-within:ring-4 focus-within:ring-blue-light/10">
            <span className="text-blue-light">
              <SearchIcon />
            </span>
            <span className="sr-only">Buscar tratamento</span>
            <input
              className="w-full bg-transparent text-sm font-medium text-blue-dark outline-none placeholder:text-gray/45"
              placeholder="Busque pelo serviço desejado"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
        </div>

        {visibleGroups.length > 0 ? (
          <div className="mt-12 grid items-start gap-5 lg:grid-cols-2">
            {visibleGroups.map((group) => {
              const isExpanded = expandedGroups.has(group.id);
              const shouldLimitGroup = !isExpanded && !normalizedQuery;
              const displayedTreatments = shouldLimitGroup
                ? group.treatments.slice(0, INITIAL_VISIBLE_TREATMENTS)
                : group.treatments;

              return (
                <article
                  key={group.id}
                  className="overflow-hidden rounded-[26px] border border-blue-dark/[.07] bg-white shadow-[0_16px_50px_rgba(2,21,51,.07)]"
                >
                  <div className="flex items-center gap-4 border-b border-blue-dark/[.07] bg-gradient-to-r from-blue-dark to-blue-light p-6 text-white">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/10">
                      <Image
                        alt=""
                        className="h-9 w-9 brightness-0 invert"
                        height={36}
                        src={group.icon}
                        width={36}
                      />
                    </span>
                    <div>
                      <h3 className="text-2xl font-bold">{group.title}</h3>
                      <p className="mt-0.5 text-sm text-white/65">
                        {group.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="p-3 sm:p-4">
                    <ul className="space-y-1.5">
                      {displayedTreatments.map((treatment) => (
                        <li
                          key={treatment.name}
                          className="group flex items-center gap-2 rounded-2xl border border-transparent p-1.5 transition hover:border-blue-light/15 hover:bg-gray-light/45"
                        >
                          <button
                            className="flex min-h-12 flex-1 items-center gap-3 rounded-xl px-3 text-left text-sm font-semibold text-blue-dark outline-none transition group-hover:text-blue-light focus-visible:ring-2 focus-visible:ring-blue-light"
                            type="button"
                            onClick={() => setSelected({ group, treatment })}
                          >
                            <span className="text-blue-light/70">
                              <InfoIcon />
                            </span>
                            <span className="flex-1">{treatment.name}</span>
                            <span className="hidden shrink-0 text-[11px] font-bold uppercase tracking-[0.12em] text-blue-light sm:inline">
                              Saiba mais
                            </span>
                          </button>
                          <a
                            aria-label={`Falar no WhatsApp sobre ${treatment.name}`}
                            className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-green-light/10 text-green-dark transition hover:scale-105 hover:bg-green-light hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-green-dark"
                            href={getWhatsAppUrl(treatment.name)}
                            rel="noreferrer"
                            target="_blank"
                          >
                            <BaselineWhatsapp height={21} width={21} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {!normalizedQuery &&
                  group.treatments.length > INITIAL_VISIBLE_TREATMENTS ? (
                    <div className="border-t border-blue-dark/[.07] p-3 sm:p-4">
                      <button
                        aria-expanded={isExpanded}
                        aria-label={`${isExpanded ? "Ver menos" : "Ver mais"} tratamentos de ${group.title}`}
                        className="flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gray-light/45 px-5 text-sm font-bold text-blue-dark transition hover:bg-gray-light hover:text-blue-light focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-light"
                        type="button"
                        onClick={() => toggleGroup(group.id)}
                      >
                        {isExpanded ? "Ver menos" : "Ver mais"}
                        <svg
                          aria-hidden="true"
                          className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
                          fill="none"
                          height="17"
                          viewBox="0 0 24 24"
                          width="17"
                        >
                          <path
                            d="m6 9 6 6 6-6"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                        </svg>
                      </button>
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        ) : (
          <div className="mt-12 rounded-[26px] border border-dashed border-blue-dark/20 bg-white px-6 py-16 text-center">
            <p className="text-lg font-bold text-blue-dark">
              Nenhum tratamento encontrado.
            </p>
            <p className="mt-2 text-sm text-gray/60">
              Tente outro termo ou fale com nossa equipe pelo WhatsApp.
            </p>
          </div>
        )}
      </div>

      <TreatmentModal selected={selected} onClose={closeModal} />
    </section>
  );
}

export default Work;
