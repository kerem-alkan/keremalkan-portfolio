export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0d0d0f] text-white">

      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />

      {/* Grain Overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="relative z-10 flex max-w-3xl flex-col items-center px-6 text-center">

        <p className="mb-6 text-xs uppercase tracking-[0.35em] text-neutral-500">
          Kerem Alkan
        </p>

        <h1 className="mb-6 text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
          Currently refining
          <br />
          the experience.
        </h1>

        <p className="max-w-xl text-base leading-8 text-neutral-400 md:text-lg">
          A redesigned portfolio experience is currently in progress.
          The new version will be available soon.
        </p>

        <div className="mt-12 flex items-center gap-4 text-sm text-neutral-500">

          <a
            href="https://github.com/kerem-alkan"
            target="_blank"
            className="transition hover:text-white"
          >
            GitHub
          </a>

          <span>•</span>

          <a
            href="https://www.linkedin.com/in/kerem-alkan/"
            target="_blank"
            className="transition hover:text-white"
          >
            LinkedIn
          </a>

          <span>•</span>

          <a
            href="https://www.instagram.com/keremlabs"
            target="_blank"
            className="transition hover:text-white"
          >
            Instagram
          </a>

        </div>

      </div>
    </main>
  )
}
