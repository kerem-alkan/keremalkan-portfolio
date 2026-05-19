export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#0A0A0A] text-[#EAEAEA]">
      
      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#202020] blur-[180px]" />

      {/* HERO */}

      <section className="flex min-h-screen flex-col justify-between px-8 py-8 md:px-14 md:py-10">

        <div className="flex items-center justify-between text-sm text-[#777777]">
          <p>Kerem Alkan</p>

          <div className="flex gap-6">
            <a
              href="https://github.com/kerem-alkan"
              target="_blank"
              className="transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/kerem-alkan"
              target="_blank"
              className="transition hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="relative z-10 max-w-5xl">

          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-[#666666]">
            Brand & Technology Specialist
          </p>

          <h1 className="mb-8 text-6xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-[9rem]">
            Building modern
            <br />
            digital experiences
            <br />
            through technology.
          </h1>

          <p className="max-w-2xl text-lg leading-8 text-[#A1A1A1] md:text-xl md:leading-9">
            Focused on retail operations, digital experience,
            front-end development and modern technology systems.
          </p>

        </div>

        <div className="flex items-center justify-between text-sm text-[#666666]">
          <p>Istanbul, Türkiye</p>

          <p>Open to modern digital collaborations</p>
        </div>

      </section>

      {/* ABOUT */}

      <section className="border-t border-[#1A1A1A] px-8 py-28 md:px-14">

        <div className="grid max-w-6xl grid-cols-1 gap-16 md:grid-cols-2">

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#666666]">
              About
            </p>
          </div>

          <div>

            <p className="text-2xl leading-[1.8] text-[#D4D4D4]">
              I work at the intersection of retail operations,
              digital experience and modern technology systems.
            </p>

            <p className="mt-8 text-lg leading-8 text-[#888888]">
              Alongside premium consumer technology retail operations,
              I explore front-end development, UI/UX systems and
              modern digital interfaces focused on simplicity,
              usability and visual clarity.
            </p>

          </div>

        </div>

      </section>

      {/* EXPERIENCE */}

      <section className="border-t border-[#1A1A1A] px-8 py-28 md:px-14">

        <div className="mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-[#666666]">
            Experience
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">

          <div className="rounded-3xl border border-[#1A1A1A] bg-[#111111] p-8">
            <p className="text-sm text-[#666666]">2025 — Present</p>

            <h3 className="mt-4 text-2xl font-medium">
              Aztek Teknoloji
            </h3>

            <p className="mt-4 leading-8 text-[#888888]">
              Retail technology operations focused on premium
              consumer electronics, digital experience and
              customer engagement.
            </p>
          </div>

          <div className="rounded-3xl border border-[#1A1A1A] bg-[#111111] p-8">
            <p className="text-sm text-[#666666]">Previous Experience</p>

            <h3 className="mt-4 text-2xl font-medium">
              Huawei · Philips · Retail Operations
            </h3>

            <p className="mt-4 leading-8 text-[#888888]">
              Worked across retail ecosystems, technology sales,
              digital operations and consumer electronics experience.
            </p>
          </div>

        </div>

      </section>

      {/* SELECTED WORK */}

      <section className="border-t border-[#1A1A1A] px-8 py-28 md:px-14">

        <div className="mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-[#666666]">
            Selected Work
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl border border-[#1A1A1A] p-8 transition hover:border-[#333333]">
            <p className="text-sm text-[#666666]">
              Desktop Application
            </p>

            <h3 className="mt-4 text-2xl font-medium">
              Necronomicon Launcher
            </h3>

            <p className="mt-4 leading-8 text-[#888888]">
              Modular WPF launcher architecture and modern UI experiments.
            </p>
          </div>

          <div className="rounded-3xl border border-[#1A1A1A] p-8 transition hover:border-[#333333]">
            <p className="text-sm text-[#666666]">
              Front-End
            </p>

            <h3 className="mt-4 text-2xl font-medium">
              Portfolio Platform
            </h3>

            <p className="mt-4 leading-8 text-[#888888]">
              Modern portfolio experience built with Next.js,
              Tailwind and Vercel.
            </p>
          </div>

          <div className="rounded-3xl border border-[#1A1A1A] p-8 transition hover:border-[#333333]">
            <p className="text-sm text-[#666666]">
              Digital Experience
            </p>

            <h3 className="mt-4 text-2xl font-medium">
              UI / UX Systems
            </h3>

            <p className="mt-4 leading-8 text-[#888888]">
              Focused on simplicity, spacing systems and modern
              digital interface experiences.
            </p>
          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section className="border-t border-[#1A1A1A] px-8 py-24 md:px-14">

        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#666666]">
              Contact
            </p>

            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              Let’s build
              <br />
              something modern.
            </h2>
          </div>

          <div className="space-y-4 text-[#888888]">
            <p>contact@keremalkan.com</p>

            <a
              href="https://linkedin.com/in/kerem-alkan"
              target="_blank"
              className="block transition hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/kerem-alkan"
              target="_blank"
              className="block transition hover:text-white"
            >
              GitHub
            </a>
          </div>

        </div>

      </section>

    </main>
  );
}