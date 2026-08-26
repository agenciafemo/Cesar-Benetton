import Image from "next/image";

import PhArrowUpRight from "~icons/ph/arrow-up-right-bold";
import RiInstagramLine from "~icons/ri/instagram-line";

const INSTAGRAM_PROFILE = "https://www.instagram.com/cesarbenetton/";

const pinnedPosts = [
  {
    link: "https://www.instagram.com/cesarbenetton/p/DOtt_BaDlHt/",
    eyebrow: "Post fixado • 17 set. 2025",
    title: "AOFAS Annual Meeting 2025",
    description:
      "Participação na delegação brasileira, com troca de conhecimento e acesso às principais inovações em pé e tornozelo.",
    image: "/instagram/fixado-aofas-2025.webp",
  },
  {
    link: "https://www.instagram.com/cesarbenetton/p/B5xjT6kn1yY/",
    eyebrow: "Post fixado • 7 dez. 2019",
    title: "Curso O Pé Plano — São Paulo",
    description:
      "Conteúdo educativo e atualização científica sobre o pé plano, também conhecido como pé chato.",
    image: "/instagram/fixado-pe-plano.jpg",
  },
];

const recentPosts = [
  {
    link: "https://www.instagram.com/cesarbenetton/p/DXm48REEWzs/",
    title: "22º Congresso Brasileiro de Pé e Tornozelo",
    description:
      "Participação em São Paulo e palestra sobre a Síndrome de Haglund.",
    image: "/instagram/recente-congresso-2026.webp",
  },
  {
    link: "https://www.instagram.com/cesarbenetton/p/DLfkw_0uZlw/",
    title: "XXIV Congresso Sul-Brasileiro de Ortopedia",
    description:
      "Palestra em Bento Gonçalves sobre lesão osteocondral do tálus.",
    image: "/instagram/recente-talus-2025.webp",
  },
];

function VerifiedIcon() {
  return (
    <svg
      aria-label="Perfil verificado"
      fill="none"
      height="18"
      role="img"
      viewBox="0 0 24 24"
      width="18"
    >
      <path
        d="M9.1 3.3a3.4 3.4 0 0 1 5.8 0 3.4 3.4 0 0 1 4.1 4.1 3.4 3.4 0 0 1 0 5.8 3.4 3.4 0 0 1-4.1 4.1 3.4 3.4 0 0 1-5.8 0A3.4 3.4 0 0 1 5 13.2a3.4 3.4 0 0 1 0-5.8 3.4 3.4 0 0 1 4.1-4.1Z"
        fill="#335686"
      />
      <path
        d="m8.5 10.5 2.2 2.2 4.8-5"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="14"
      viewBox="0 0 24 24"
      width="14"
    >
      <path
        d="m14.5 4 5.5 5.5-3 1.2-3.7 3.7.7 3.1-1.4 1.4-7.5-7.5L6.5 10l3.1.7 3.7-3.7L14.5 4Z"
        fill="currentColor"
      />
      <path
        d="m9.5 15.5-5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function Instagram() {
  return (
    <section className="bg-white px-4 py-16 lg:py-24" id="posts">
      <div className="relative mx-auto max-w-screen-xl overflow-hidden rounded-[32px] bg-blue-dark p-5 text-white shadow-[0_30px_80px_rgba(2,21,51,.2)] sm:p-8 lg:rounded-[40px] lg:p-12">
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-gradient-to-br from-[#833ab4]/30 via-[#fd1d1d]/20 to-[#fcb045]/25 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-44 -left-28 h-96 w-96 rounded-full bg-blue-light/15 blur-3xl"
        />

        <header className="relative flex flex-col gap-6 border-b border-white/10 pb-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] p-[3px]">
              <div className="relative h-16 w-16 overflow-hidden rounded-full border-[3px] border-blue-dark bg-gray-light sm:h-20 sm:w-20">
                <Image
                  alt="Dr. César Benetton"
                  className="h-full w-full object-cover object-top"
                  height={80}
                  src="/cesar-hero.png"
                  width={80}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h2 className="text-xl font-bold sm:text-2xl">
                  @cesarbenetton
                </h2>
                <VerifiedIcon />
              </div>
              <p className="mt-1 text-sm text-white/60">
                Ortopedista • Pé e tornozelo • Criciúma, SC
              </p>
            </div>
          </div>

          <a
            className="inline-flex min-h-12 w-fit items-center gap-2 rounded-full bg-white px-5 font-bold text-blue-dark shadow-lg transition hover:-translate-y-0.5 hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-dark"
            href={INSTAGRAM_PROFILE}
            rel="noreferrer"
            target="_blank"
          >
            <RiInstagramLine height={20} width={20} />
            Seguir no Instagram
          </a>
        </header>

        <div className="relative mt-8 grid gap-8 lg:grid-cols-[1.35fr_.65fr]">
          <div>
            <div className="mb-4 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                  Selecionados pelo Dr. César
                </span>
                <h3 className="mt-1 text-2xl font-bold">Posts fixados</h3>
              </div>
              <span className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-white/65 sm:flex">
                <PinIcon /> 2 fixados
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {pinnedPosts.map((post) => (
                <a
                  key={post.link}
                  className="group overflow-hidden rounded-[24px] border border-white/10 bg-white/[.06] transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[.09]"
                  href={post.link}
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
                    <Image
                      alt={post.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      height={300}
                      sizes="(max-width: 639px) 90vw, (max-width: 1023px) 43vw, 28vw"
                      src={post.image}
                      width={400}
                    />
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-blue-dark/75 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] backdrop-blur">
                      <PinIcon /> Fixado
                    </span>
                    <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white text-blue-dark shadow-lg transition group-hover:rotate-12">
                      <PhArrowUpRight height={18} width={18} />
                    </span>
                  </div>
                  <div className="p-5">
                    <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-light">
                      {post.eyebrow}
                    </span>
                    <h4 className="mt-2 text-lg font-bold leading-snug">
                      {post.title}
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-white/55">
                      {post.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <aside className="rounded-[26px] border border-white/10 bg-white/[.055] p-5 lg:p-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                  Feed
                </span>
                <h3 className="mt-1 text-2xl font-bold">
                  Publicações recentes
                </h3>
              </div>
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-light opacity-60" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-light" />
              </span>
            </div>

            <div className="mt-5 space-y-3">
              {recentPosts.map((post) => (
                <a
                  key={post.link}
                  className="group grid grid-cols-[92px_1fr] gap-4 rounded-2xl border border-transparent p-2 transition hover:border-white/10 hover:bg-white/[.06]"
                  href={post.link}
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="relative aspect-square overflow-hidden rounded-xl bg-white/5">
                    <Image
                      alt={post.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      height={120}
                      src={post.image}
                      width={120}
                    />
                  </div>
                  <div className="flex min-w-0 flex-col justify-center">
                    <h4 className="text-sm font-bold leading-snug">
                      {post.title}
                    </h4>
                    <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-white/50">
                      {post.description}
                    </p>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-blue-light">
                      Ver publicação <PhArrowUpRight height={13} width={13} />
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <a
              className="mt-5 flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-white/15 text-sm font-bold text-white transition hover:border-white/30 hover:bg-white/[.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              href={INSTAGRAM_PROFILE}
              rel="noreferrer"
              target="_blank"
            >
              <RiInstagramLine height={18} width={18} />
              Ver todos os posts
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Instagram;
